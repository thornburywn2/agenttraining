/**
 * PDF Converter for AGENTS.md Training Guide
 * Converts markdown to beautifully styled PDF using marked and puppeteer
 */

import { marked } from 'marked';
import hljs from 'highlight.js';

// Debug logging
const DEBUG = true;

function debugLog(section: string, message: string, data?: unknown): void {
  if (DEBUG) {
    console.log(`[PDF Converter] ${section}: ${message}`, data || '');
  }
}

/**
 * Configure marked
 */
function configureMarked(): void {
  marked.use({
    breaks: true,
    gfm: true,
  });
}

/**
 * Get CSS styles for the PDF
 */
function getPDFStyles(): string {
  return `
    <style>
      /* Reset and Base Styles */
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        line-height: 1.6;
        color: #1f2937;
        background: white;
        padding: 20px 40px;
        font-size: 11pt;
      }

      /* Typography */
      h1 {
        color: #1e40af;
        font-size: 32pt;
        font-weight: bold;
        margin: 0 0 20px 0;
        padding-bottom: 15px;
        border-bottom: 4px solid #3b82f6;
        page-break-after: avoid;
      }

      h2 {
        color: #7c3aed;
        font-size: 24pt;
        font-weight: bold;
        margin: 40px 0 15px 0;
        padding-top: 10px;
        page-break-after: avoid;
      }

      h3 {
        color: #0891b2;
        font-size: 18pt;
        font-weight: 600;
        margin: 30px 0 12px 0;
        page-break-after: avoid;
      }

      h4 {
        color: #4b5563;
        font-size: 14pt;
        font-weight: 600;
        margin: 20px 0 10px 0;
        page-break-after: avoid;
      }

      p {
        margin: 10px 0;
        text-align: justify;
      }

      /* Links */
      a {
        color: #2563eb;
        text-decoration: none;
      }

      a:hover {
        text-decoration: underline;
      }

      /* Lists */
      ul, ol {
        margin: 10px 0 10px 25px;
      }

      li {
        margin: 5px 0;
      }

      /* Code Blocks */
      code {
        background: #f3f4f6;
        padding: 2px 6px;
        border-radius: 3px;
        font-family: 'Courier New', Courier, monospace;
        font-size: 10pt;
        color: #be123c;
      }

      pre {
        background: #1f2937;
        color: #f9fafb;
        padding: 15px;
        border-radius: 6px;
        overflow-x: auto;
        margin: 15px 0;
        page-break-inside: avoid;
      }

      pre code {
        background: transparent;
        color: inherit;
        padding: 0;
        font-size: 9pt;
        line-height: 1.4;
      }

      /* Syntax Highlighting */
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

      /* Tables */
      table {
        width: 100%;
        border-collapse: collapse;
        margin: 20px 0;
        font-size: 10pt;
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

      /* Blockquotes */
      blockquote {
        border-left: 4px solid #fbbf24;
        background: #fef3c7;
        padding: 15px 20px;
        margin: 15px 0;
        font-style: italic;
        page-break-inside: avoid;
      }

      blockquote p {
        margin: 5px 0;
      }

      blockquote strong {
        color: #92400e;
      }

      /* Horizontal Rules */
      hr {
        border: none;
        border-top: 2px solid #e5e7eb;
        margin: 30px 0;
      }

      /* Images */
      img {
        max-width: 100%;
        height: auto;
        margin: 15px 0;
      }

      /* Strong/Bold */
      strong {
        font-weight: 600;
        color: #1f2937;
      }

      /* Emphasis/Italic */
      em {
        font-style: italic;
      }

      /* Print Styles */
      @media print {
        body {
          padding: 0;
        }

        h1, h2, h3, h4, h5, h6 {
          page-break-after: avoid;
        }

        pre, blockquote, table {
          page-break-inside: avoid;
        }

        img {
          page-break-inside: avoid;
        }
      }

      /* Page Breaks */
      .page-break {
        page-break-after: always;
      }

      /* Special Boxes */
      .info-box {
        background: #dbeafe;
        border: 2px solid #3b82f6;
        border-radius: 6px;
        padding: 15px;
        margin: 15px 0;
        page-break-inside: avoid;
      }

      .warning-box {
        background: #fef3c7;
        border: 2px solid #fbbf24;
        border-radius: 6px;
        padding: 15px;
        margin: 15px 0;
        page-break-inside: avoid;
      }

      .success-box {
        background: #d1fae5;
        border: 2px solid #10b981;
        border-radius: 6px;
        padding: 15px;
        margin: 15px 0;
        page-break-inside: avoid;
      }

      /* Footer Styles */
      .footer {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        height: 30px;
        background: #f3f4f6;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 40px;
        font-size: 9pt;
        color: #6b7280;
        border-top: 1px solid #e5e7eb;
      }

      /* Header Styles */
      .header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 50px;
        background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
        display: flex;
        align-items: center;
        padding: 0 40px;
        color: white;
        font-size: 14pt;
        font-weight: bold;
      }

      .content {
        margin-top: 60px;
        margin-bottom: 40px;
      }
    </style>
  `;
}

/**
 * Get HTML template for PDF
 */
function getHTMLTemplate(htmlContent: string): string {
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
      <div class="content">
        ${htmlContent}
      </div>
    </body>
    </html>
  `;
}

/**
 * Convert markdown to HTML
 */
export async function convertMarkdownToHTML(markdown: string): Promise<string> {
  debugLog('HTML Conversion', 'Starting markdown to HTML conversion', {
    markdownLength: markdown.length
  });

  // Configure marked
  configureMarked();

  // Convert to HTML
  let html = await marked.parse(markdown);

  // Apply syntax highlighting to code blocks
  html = html.replace(/<code class="language-(\w+)">([\s\S]*?)<\/code>/g, (match, lang, code) => {
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

  debugLog('HTML Conversion', 'Markdown converted to HTML', {
    htmlLength: html.length
  });

  // Wrap in template
  const fullHTML = getHTMLTemplate(html);

  debugLog('HTML Conversion', 'Full HTML template created', {
    totalLength: fullHTML.length
  });

  return fullHTML;
}

/**
 * Note: Server-side PDF generation is handled by the backend API endpoint.
 * See server/routes/pdf.ts for the Puppeteer implementation.
 */

/**
 * Browser-friendly version: Sends markdown to server for PDF generation
 */
export async function convertMarkdownToPDF(
  markdown: string,
  filename: string = 'AGENTS-md-Training-Guide.pdf'
): Promise<void> {
  debugLog('PDF Request', 'Sending markdown to server for PDF generation', {
    markdownLength: markdown.length,
    filename
  });

  try {
    const response = await fetch('/api/generate-pdf', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ markdown, filename })
    });

    if (!response.ok) {
      throw new Error(`PDF generation failed: ${response.statusText}`);
    }

    debugLog('PDF Request', 'Received PDF from server');

    // Get the PDF blob
    const blob = await response.blob();

    debugLog('PDF Request', 'PDF blob created', { size: blob.size });

    // Create download link
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();

    debugLog('PDF Request', 'Download initiated');

    // Cleanup
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);

    debugLog('PDF Request', 'Download complete and cleaned up');

  } catch (error) {
    debugLog('PDF Request', 'Error requesting PDF from server', error);
    throw error;
  }
}
