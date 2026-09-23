import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    // Keep fonts as separate files: the browser only downloads the ones it needs,
    // but anything inlined into the CSS is downloaded by every visitor.
    assetsInlineLimit: (filePath) => (/\.(woff2?|ttf|otf)$/.test(filePath) ? false : undefined),
  },
});
