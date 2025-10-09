/**
 * PDF Generator for AGENTS.md Training Guide
 * Uses markdown generation and server-side PDF conversion
 */

import { generateMarkdown } from './markdownGenerator';
import { convertMarkdownToPDF } from './pdfConverter';

// Debug flag - set to true for verbose logging
const DEBUG_PDF = true;

// Debug logger
function debugLog(section: string, message: string, data?: unknown): void {
  if (DEBUG_PDF) {
    console.log(`[PDF Debug] ${section}: ${message}`, data || '');
  }
}

/**
 * Generates a comprehensive training PDF for the AGENTS.md Framework
 * Uses the markdown-to-PDF pipeline for better formatting and maintainability
 */
export async function generateTrainingPDF(): Promise<void> {
  try {
    debugLog('Init', 'Starting PDF generation via Markdown pipeline');

    // Step 1: Generate markdown from webapp content
    const markdown = generateMarkdown();
    debugLog('Markdown', 'Generated markdown content', {
      length: markdown.length,
      estimatedPages: Math.ceil(markdown.length / 3000)
    });

    // Step 2: Send to server for PDF conversion
    await convertMarkdownToPDF(markdown, 'AGENTS-md-Training-Guide.pdf');
    debugLog('Complete', 'PDF generation complete and download initiated');

  } catch (error) {
    debugLog('Error', 'PDF generation failed', error);
    console.error('PDF generation error:', error);
    alert('Failed to generate PDF. Please check the console for details.');
  }
}
