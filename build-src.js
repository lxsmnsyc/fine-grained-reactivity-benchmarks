const esbuild = require('esbuild');
const mod = require('module')

esbuild.build({
  entryPoints: [
    'src/index.ts'
  ],
  outfile: 'dist/index.js',
  bundle: true,
  platform: 'node',
  conditions: ['browser'],
  format: 'cjs',
  minify: false,
  target: 'es2017',
  external: [
    ...mod.builtinModules,
    'benny',
  ],
});