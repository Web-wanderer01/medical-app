import { promises as fs } from 'fs';
import path from 'path';
import { ConcatenationOptions, FileContent } from './types';
import { getMarkdownFiles } from './file-utils';
import { readAndProcessFile, combineContents } from './content-processor';

export async function concatenateMarkdownFiles(options: ConcatenationOptions): Promise<void> {
  try {
    // Ensure source directory exists
    await fs.access(options.sourceDir);
    
    // Get all markdown files
    const files = await getMarkdownFiles(options.sourceDir);
    
    if (files.length === 0) {
      throw new Error('No markdown files found in the specified directory');
    }
    
    // Read and process all files
    const contents: FileContent[] = await Promise.all(
      files.map(file => readAndProcessFile(file))
    );
    
    // Combine all contents
    const finalContent = combineContents(contents, options.separator);
    
    // Create output directory if it doesn't exist
    const outputDir = path.dirname(options.outputFile);
    await fs.mkdir(outputDir, { recursive: true });
    
    // Write the final file
    await fs.writeFile(options.outputFile, finalContent, 'utf-8');
    
    console.log(`Successfully concatenated ${files.length} files to ${options.outputFile}`);
  } catch (error) {
    console.error('Error concatenating markdown files:', error);
    throw error;
  }
}
