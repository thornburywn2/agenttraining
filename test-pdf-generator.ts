/**
 * PDF Generator Test Script
 *
 * This script tests the generateTrainingPDF function and captures all console output,
 * debug logs, and timing information for analysis.
 */

import { generateTrainingPDF } from './src/utils/pdfGenerator';

interface LogEntry {
  timestamp: number;
  type: 'log' | 'warn' | 'error' | 'info';
  message: string;
  data?: unknown;
}

interface TestReport {
  startTime: number;
  endTime: number;
  duration: number;
  logs: LogEntry[];
  sections: string[];
  pages: number;
  errors: string[];
  warnings: string[];
  success: boolean;
}

// Capture console output
const originalConsole = {
  log: console.log,
  warn: console.warn,
  error: console.error,
  info: console.info,
};

const report: TestReport = {
  startTime: 0,
  endTime: 0,
  duration: 0,
  logs: [],
  sections: [],
  pages: 0,
  errors: [],
  warnings: [],
  success: false,
};

// Override console methods to capture output
console.log = (...args: unknown[]): void => {
  const message = args.map(arg =>
    typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
  ).join(' ');

  report.logs.push({
    timestamp: Date.now() - report.startTime,
    type: 'log',
    message,
  });

  // Parse debug logs for section information
  if (message.includes('[PDF Debug]')) {
    const match = message.match(/\[PDF Debug\] (\w+):/);
    if (match) {
      const section = match[1];

      // Track sections
      if (message.includes('Starting Section')) {
        const sectionMatch = message.match(/Section \d+: (.+)/);
        if (sectionMatch) {
          report.sections.push(sectionMatch[1]);
        }
      }

      // Track pages
      if (message.includes('Added new page')) {
        const pageMatch = message.match(/Added new page (\d+)/);
        if (pageMatch) {
          report.pages = parseInt(pageMatch[1], 10);
        }
      }

      // Track completion
      if (message.includes('Total pages:')) {
        const totalMatch = message.match(/Total pages: (\d+)/);
        if (totalMatch) {
          report.pages = parseInt(totalMatch[1], 10);
        }
      }
    }
  }

  originalConsole.log(...args);
};

console.warn = (...args: unknown[]): void => {
  const message = args.map(arg =>
    typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
  ).join(' ');

  report.logs.push({
    timestamp: Date.now() - report.startTime,
    type: 'warn',
    message,
  });
  report.warnings.push(message);

  originalConsole.warn(...args);
};

console.error = (...args: unknown[]): void => {
  const message = args.map(arg =>
    typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
  ).join(' ');

  report.logs.push({
    timestamp: Date.now() - report.startTime,
    type: 'error',
    message,
  });
  report.errors.push(message);

  originalConsole.error(...args);
};

console.info = (...args: unknown[]): void => {
  const message = args.map(arg =>
    typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
  ).join(' ');

  report.logs.push({
    timestamp: Date.now() - report.startTime,
    type: 'info',
    message,
  });

  originalConsole.info(...args);
};

// Run the test
async function runTest(): Promise<void> {
  originalConsole.log('\n=== PDF Generator Test Started ===\n');

  report.startTime = Date.now();

  try {
    // Run the PDF generator
    generateTrainingPDF();
    report.success = true;
  } catch (error) {
    report.success = false;
    report.errors.push(error instanceof Error ? error.message : String(error));
    originalConsole.error('PDF generation failed:', error);
  }

  report.endTime = Date.now();
  report.duration = report.endTime - report.startTime;

  // Print detailed report
  originalConsole.log('\n=== PDF Generator Test Report ===\n');
  originalConsole.log(`Status: ${report.success ? '✅ SUCCESS' : '❌ FAILED'}`);
  originalConsole.log(`Duration: ${report.duration}ms (${(report.duration / 1000).toFixed(2)}s)`);
  originalConsole.log(`Total Pages: ${report.pages}`);
  originalConsole.log(`Sections Processed: ${report.sections.length}`);
  originalConsole.log(`Total Logs: ${report.logs.length}`);
  originalConsole.log(`Warnings: ${report.warnings.length}`);
  originalConsole.log(`Errors: ${report.errors.length}`);

  if (report.sections.length > 0) {
    originalConsole.log('\n--- Sections Created ---');
    report.sections.forEach((section, index) => {
      originalConsole.log(`${index + 1}. ${section}`);
    });
  }

  if (report.warnings.length > 0) {
    originalConsole.log('\n--- Warnings ---');
    report.warnings.forEach((warning, index) => {
      originalConsole.log(`${index + 1}. ${warning}`);
    });
  }

  if (report.errors.length > 0) {
    originalConsole.log('\n--- Errors ---');
    report.errors.forEach((error, index) => {
      originalConsole.log(`${index + 1}. ${error}`);
    });
  }

  originalConsole.log('\n--- All Debug Logs ---');
  report.logs.forEach((log, index) => {
    const timestamp = `[${log.timestamp}ms]`;
    const type = `[${log.type.toUpperCase()}]`;
    originalConsole.log(`${index + 1}. ${timestamp} ${type} ${log.message}`);
  });

  originalConsole.log('\n=== Test Complete ===\n');

  // Save report to JSON
  const fs = await import('fs');
  const reportPath = './pdf-test-report.json';
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  originalConsole.log(`📊 Full report saved to: ${reportPath}`);
}

// Run the test
runTest().catch((error) => {
  originalConsole.error('Test runner failed:', error);
  process.exit(1);
});
