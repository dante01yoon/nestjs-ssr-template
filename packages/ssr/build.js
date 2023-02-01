const  { build } = require("esbuild");
const { dependencies, peerDependencies } = require("./package.json");


const sharedConfig = {
  entryPoints: ['src/entry-server.tsx'],
  bundle: true,
  external: Object.keys(dependencies).concat(Object.keys(peerDependencies))
}

build({
  ...sharedConfig,
  outfile: 'dist/index.js',
  platform: 'node',
})

build({
  ...sharedConfig,
  outfile: 'dist/index.esm.js',
  format: 'esm',
  platform: "neutral"
})

