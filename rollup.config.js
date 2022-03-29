import { nodeResolve } from '@rollup/plugin-node-resolve';

export default [
  {
    input: './public/index.js',
    output: {
      file: './dist/index.js',
      format: 'umd',
    },
    plugins: [nodeResolve()]
  },
  {
    input: './public/firebase-messaging-sw.js',
    output: {
      file: './dist/firebase-messaging-sw.js',
      format: 'umd',
    },
    plugins: [nodeResolve()]
  },
];
