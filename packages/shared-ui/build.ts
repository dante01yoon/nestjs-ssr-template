import * as esbuild from "esbuild";

export const baseBuildConfig: esbuild.BuildOptions = {
  bundle: true,
  platform: 'browser',
  format: 'esm',
  loader: {
    '.png': 'dataurl',
    '.svg': 'dataurl',
  },
  plugins:[],
  external: ['esbuild'],
  splitting:true,
}

esbuild.build({
  ...baseBuildConfig,
  entryPoints: [
    './components/index.ts'
  ],
  outdir: 'dist',
  // watch: {
  //   onRebuild: (error, result) => {
  //     if(error) console.error("build failed: ", error)
  //     else console.log('main build succeeded: ', result);
  //   }
  // }
})