import {nodeResolve} from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';

export default [
  {
    input: './public/index.js',
    output: {
      file: './dist/index.js',
      format: 'umd',
    },
    plugins: [nodeResolve({preferBuiltins: true, browser: true}), json(), commonjs(), ]
  },
  {
    input: './public/firebase-messaging-sw.js',
    output: {
      file: './dist/firebase-messaging-sw.js',
      format: 'umd',
    },
    plugins: [nodeResolve({preferBuiltins: true, browser: true}), json(), commonjs(), ]
  },
];
