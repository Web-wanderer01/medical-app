import { promises as fs } from 'fs';
import path from 'path';
import { FileContent } from './types';

export async function readAndProcessFile(filePath: string): Promise<FileContent> {
  const content = await fs.readFile(filePath, 'utf-8');
  const relativePath = path.relative(process.cwd(), filePath);
  
  return {
    path: relativePath,
    content: `# source file: \`${relativePath}\`\n\n${content}`
  };
}

export function combineContents(contents: FileContent[], separator: string = '\n---\n'): string {
  return contents.map(file => file.content).join(separator);
}
