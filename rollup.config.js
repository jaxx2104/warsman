import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'

export default {
  external: ['path'],
  input: 'src/main.js',
  output: {
    banner: '#!/usr/bin/env node',
    file: 'dist/bundle.js',
    format: 'umd'
  },
  plugins: [
    resolve(),
    commonjs(),
    babel({
      runtimeHelpers: true,
      exclude: 'node_modules/**'
    })
  ]
}
