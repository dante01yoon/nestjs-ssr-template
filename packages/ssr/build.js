const  { build } = require("esbuild");
const { dependencies, peerDependencies } = require("./package.json");
const { LoaderFunction } = require("react-router-dom");


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



const clientConfig ={
  entryPoints: ['src/entry-client.tsx'],
  platform: "browser",
  loader: {
    ".tsx": "tsx",
    ".ts": "tsx",
    ".jsx": "jsx",
    ".js": "jsx",
  },
  // format: 'esm',
  target: ['es2018'],
  treeShaking: true,
  outfile: 'dist/main.mjs',
  bundle: true,
  external: Object.keys(dependencies).concat(Object.keys(peerDependencies))
}

build({
  ...clientConfig,
})