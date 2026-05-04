import { generate } from 'critical';
import { globSync } from 'glob';
import { readFileSync, writeFileSync } from 'fs';

function stripFontImport(file) {
  let html = readFileSync(file, 'utf-8');
  html = html.replace(/<style>([\s\S]*?)<\/style>/g, (_, css) => {
    const cleaned = css.replace(/@import\s+url\([^)]*fonts\.googleapis[^)]*\)\s*;?/g, '');
    return `<style>${cleaned}</style>`;
  });
  writeFileSync(file, html, 'utf-8');
}

const files = globSync('*.html');

async function run() {
  for (const file of files) {
    console.log(`Processing ${file}...`);
    try {
      await generate({
        base: './',
        src: file,
        target: file,
        inline: true,
        css: [
          'themes/lux-bootstrap.min.css'
        ],
        dimensions: [
          {
            width: 375,
            height: 667,
          },
          {
            width: 1280,
            height: 800,
          },
        ],
        // Odložené načítání zbytku CSS
        penthouse: {
          timeout: 60000,
        }
      });
      stripFontImport(file);
      console.log(`Successfully processed ${file}`);
    } catch (err) {
      console.error(`Error processing ${file}:`, err);
    }
  }
}

run();
