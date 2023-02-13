const  { build, context } = require("esbuild");
const { dependencies, peerDependencies, devDependencies } = require("./package.json");
const { LoaderFunction } = require("react-router-dom");
const { esbuildVersion } = require("vite");


const sharedConfig = {
  entryPoints: ['src/entry-server.tsx'],
  bundle: true,
  minify: true,
  external: Object.keys(dependencies).concat(Object.keys(peerDependencies))
}

const clientConfig ={
  bundle: true,
  entryPoints: ['src/entry-client.tsx'],
  platform: "browser",
  outfile: 'dist/main.js',
  treeShaking: true,
  // minify: true,
  sourcemap: true,
}

const serverConfig = {
  cjs: {
    ...sharedConfig,
    outfile: 'dist/index.js',
    platform: 'node',
  },
  esm: {
    ...sharedConfig,
    outfile: 'dist/index.esm.js',
    format: 'esm',
    platform: "node"
  }
}
for (config in serverConfig) {
  if(Object.prototype.hasOwnProperty.call(serverConfig, config)) {
    if(process.env.NODE_ENV  == "development") {
      Promise.all([
        context(config),
      ]).then(c => c.watch)
    }
    else { 
      build(serverConfig[config])
    }
  }
}
build(clientConfig)
// context(clientConfig).then(c => c.watch())