import { concatenateMarkdownFiles } from './concatenator';

export async function main() {
  const args = process.argv.slice(2);
  
  if (args.length < 1) {
    console.error('Usage: node index.js <source-directory> [output-file]');
    process.exit(1);
  }
  
  const sourceDir = args[0];
  const outputFile = args[1] || 'output.md';
  
  try {
    await concatenateMarkdownFiles({
      sourceDir,
      outputFile,
      separator: '\n---\n'
    });
  } catch (error) {
    console.error('Failed to concatenate markdown files:', error);
    process.exit(1);
  }
}

// Use import.meta.url to check if file is being run directly
if (import.meta.url.endsWith(process.argv[1])) {
  main();
}
