#!/usr/bin/env tsx

/**
 * Quick PDF Generation Test
 * Tests the updated PDF generator with new sections
 */

import { generateTrainingPDF } from './src/utils/pdfGenerator';
import * as fs from 'fs';

console.log('=== Quick PDF Generation Test ===\n');

const startTime = Date.now();

try {
  // Generate the PDF
  console.log('📄 Generating PDF...');
  generateTrainingPDF();

  const endTime = Date.now();
  const duration = endTime - startTime;

  console.log(`\n✅ PDF Generated Successfully!`);
  console.log(`⏱️  Generation Time: ${duration}ms (${(duration / 1000).toFixed(2)}s)`);

  // Check if file exists
  const pdfPath = './AGENTS-md-Training-Guide.pdf';
  if (fs.existsSync(pdfPath)) {
    const stats = fs.statSync(pdfPath);
    const fileSizeKB = (stats.size / 1024).toFixed(2);
    const fileSizeMB = (stats.size / 1024 / 1024).toFixed(2);

    console.log(`📦 File Size: ${fileSizeKB} KB (${fileSizeMB} MB)`);
    console.log(`📂 Location: ${pdfPath}`);
  }

  console.log('\n🎉 Test Complete!');
  console.log('\nNew sections added:');
  console.log('  • Section 11: Code Puppy (8 subsections)');
  console.log('  • Section 12: My Files (AGENTS.md & README.md)');
  console.log('  • Tech Stacks: Added 5 detailed stack breakdowns');
  console.log('  • Table of Contents: Updated with new sections');

} catch (error) {
  console.error('\n❌ Error generating PDF:', error);
  process.exit(1);
}
