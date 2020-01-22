import babel from "rollup-plugin-babel";
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import pkg from './package.json'

export default {
  input: "src/index.js",
  output: [
    {
      file: pkg.main,
      format: "cjs"
    },    {
      file: pkg.module,
      format: "esm"
    }
  ],
  plugins: [
    babel({
      exclude: "node_modules/**"
    }),
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    commonjs(),
  ],
  globals: { 'styled-components': 'styled' },
  external: ["react", "styled-components"],
} 