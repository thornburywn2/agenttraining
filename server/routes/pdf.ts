import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { z } from 'zod';
import puppeteer from 'puppeteer';
import { marked } from 'marked';
import hljs from 'highlight.js';

// Validation schema
const pdfRequestSchema = z.object({
  markdown: z.string().min(1),
  filename: z.string().optional().default('AGENTS-md-Training-Guide.pdf'),
});

type PDFRequest = z.infer<typeof pdfRequestSchema>;

// Configure marked with syntax highlighting
function configureMarked(): void {
  marked.use({
    breaks: true,
    gfm: true,
  });
}

// Get CSS styles for the PDF
function getPDFStyles(): string {
  return `
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        line-height: 1.5;
        color: #1f2937;
        background: white;
        padding: 20px 40px;
        font-size: 10pt;
      }

      h1 {
        color: #1e40af;
        font-size: 28pt;
        font-weight: bold;
        margin: 0 0 16px 0;
        padding-bottom: 12px;
        border-bottom: 4px solid #3b82f6;
        page-break-after: avoid;
      }

      h2 {
        color: #7c3aed;
        font-size: 20pt;
        font-weight: bold;
        margin: 32px 0 12px 0;
        padding-top: 8px;
        page-break-after: avoid;
      }

      h3 {
        color: #0891b2;
        font-size: 15pt;
        font-weight: 600;
        margin: 24px 0 10px 0;
        page-break-after: avoid;
      }

      h4 {
        color: #4b5563;
        font-size: 12pt;
        font-weight: 600;
        margin: 16px 0 8px 0;
        page-break-after: avoid;
      }

      p {
        margin: 10px 0;
        text-align: justify;
      }

      a {
        color: #2563eb;
        text-decoration: none;
      }

      ul, ol {
        margin: 10px 0 10px 25px;
      }

      li {
        margin: 5px 0;
      }

      code {
        background: #f3f4f6;
        padding: 2px 5px;
        border-radius: 3px;
        font-family: 'Courier New', Courier, monospace;
        font-size: 9pt;
        color: #be123c;
      }

      pre {
        background: #1f2937;
        color: #f9fafb;
        padding: 12px;
        border-radius: 5px;
        overflow-x: auto;
        margin: 12px 0;
        page-break-inside: avoid;
      }

      pre code {
        background: transparent;
        color: inherit;
        padding: 0;
        font-size: 8pt;
        line-height: 1.35;
      }

      .hljs-keyword { color: #c678dd; }
      .hljs-string { color: #98c379; }
      .hljs-number { color: #d19a66; }
      .hljs-comment { color: #5c6370; font-style: italic; }
      .hljs-function { color: #61afef; }
      .hljs-class { color: #e5c07b; }
      .hljs-title { color: #61afef; }
      .hljs-params { color: #abb2bf; }
      .hljs-built_in { color: #e6c07b; }
      .hljs-attr { color: #d19a66; }
      .hljs-variable { color: #e06c75; }

      table {
        width: 100%;
        border-collapse: collapse;
        margin: 16px 0;
        font-size: 9pt;
        page-break-inside: avoid;
      }

      th {
        background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
        color: white;
        padding: 12px 10px;
        text-align: left;
        font-weight: 600;
        border: 1px solid #3b82f6;
      }

      td {
        padding: 10px;
        border: 1px solid #e5e7eb;
      }

      tr:nth-child(even) {
        background: #f9fafb;
      }

      blockquote {
        border-left: 4px solid #fbbf24;
        background: #fef3c7;
        padding: 15px 20px;
        margin: 15px 0;
        font-style: italic;
        page-break-inside: avoid;
      }

      blockquote strong {
        color: #92400e;
      }

      hr {
        border: none;
        border-top: 2px solid #e5e7eb;
        margin: 30px 0;
      }

      strong {
        font-weight: 600;
        color: #1f2937;
      }

      em {
        font-style: italic;
      }

      @media print {
        body { padding: 0; }
        h1, h2, h3, h4, h5, h6 { page-break-after: avoid; }
        pre, blockquote, table { page-break-inside: avoid; }
      }
    </style>
  `;
}

// Generate HTML from markdown
async function generateHTML(markdown: string): Promise<string> {
  configureMarked();

  // Process markdown with manual code highlighting
  let content = await marked.parse(markdown);

  // Apply syntax highlighting to code blocks
  content = content.replace(/<code class="language-(\w+)">([\s\S]*?)<\/code>/g, (match, lang, code) => {
    if (lang && hljs.getLanguage(lang)) {
      try {
        const highlighted = hljs.highlight(code, { language: lang }).value;
        return `<code class="language-${lang}">${highlighted}</code>`;
      } catch (err) {
        console.error('Highlight error:', err);
      }
    }
    return match;
  });

  const styles = getPDFStyles();

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>AGENTS.md Training Guide</title>
      ${styles}
    </head>
    <body>
      ${content}
    </body>
    </html>
  `;
}

// Generate PDF
async function generatePDF(markdown: string): Promise<Buffer> {
  const html = await generateHTML(markdown);

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();

    await page.setContent(html, {
      waitUntil: 'networkidle0'
    });

    const pdfBuffer = await page.pdf({
      format: 'A4',
      margin: {
        top: '50px',
        right: '35px',
        bottom: '50px',
        left: '35px'
      },
      printBackground: true,
      displayHeaderFooter: true,
      preferCSSPageSize: false,
      scale: 0.95,
      headerTemplate: `
        <div style="width: 100%; background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
                    color: white; font-size: 11px; padding: 8px 35px;
                    display: flex; align-items: center; font-weight: bold;">
          AGENTS.md Framework Training Guide
        </div>
      `,
      footerTemplate: `
        <div style="width: 100%; font-size: 8px; padding: 8px 35px;
                    display: flex; justify-content: space-between; align-items: center;
                    border-top: 1px solid #e5e7eb; background: #f3f4f6; color: #6b7280;">
          <span>Generated on ${new Date().toLocaleDateString()}</span>
          <span>Page <span class="pageNumber"></span> of <span class="totalPages"></span></span>
        </div>
      `
    });

    return Buffer.from(pdfBuffer);
  } finally {
    await browser.close();
  }
}

// Register PDF routes
export async function pdfRoutes(fastify: FastifyInstance): Promise<void> {
  // POST /api/generate-pdf
  fastify.post<{
    Body: PDFRequest
  }>('/api/generate-pdf', async (request: FastifyRequest<{ Body: PDFRequest }>, reply: FastifyReply) => {
    try {
      const { markdown, filename } = pdfRequestSchema.parse(request.body);

      console.log('Generating PDF', { markdownLength: markdown.length, filename });

      // Generate PDF
      const pdfBuffer = await generatePDF(markdown);

      console.log('PDF generated successfully', { size: pdfBuffer.length });

      // Set response headers
      reply
        .header('Content-Type', 'application/pdf')
        .header('Content-Disposition', `attachment; filename="${filename}"`)
        .header('Content-Length', pdfBuffer.length)
        .send(pdfBuffer);

    } catch (error) {
      if (error instanceof z.ZodError) {
        return reply.status(400).send({
          error: 'Validation error',
          details: error.errors
        });
      }

      console.error('PDF generation failed', error);
      return reply.status(500).send({
        error: 'PDF generation failed',
        message: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  });
}
