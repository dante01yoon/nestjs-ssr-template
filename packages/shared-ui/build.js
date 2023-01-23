"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.baseBuildConfig = void 0;
var esbuild = require("esbuild");
exports.baseBuildConfig = {
    bundle: true,
    platform: 'browser',
    format: 'esm',
    loader: {
        '.png': 'dataurl',
        '.svg': 'dataurl'
    },
    plugins: [],
    external: ['esbuild'],
    splitting: true
};
esbuild.build(__assign(__assign({}, exports.baseBuildConfig), { entryPoints: [
        './components/index.ts'
    ], outdir: 'dist' }));
