import path from 'path';
import { defineConfig } from 'vite';
import { buildPlugin } from 'vite-plugin-build';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  build: { target: 'es2015' },
  plugins: [
    vue(),
    buildPlugin({
      fileBuild: {
        emitDeclaration: true,
        // esOutputDir: false
      },
      libBuild: {
        buildOptions: {
          rollupOptions: {
            external: ['vue'],
            output: { globals: { vue: 'Vue' } },
          },
          lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            name: 'Joyboo',
            fileName: (format) => `Joyboo.${format}.js`,
            formats: ['umd', 'es'],
          },
        },
      },
    }),
  ],

  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
      generateScopedName: (name: string) => `cq-${name}`,
    },
  },
});
