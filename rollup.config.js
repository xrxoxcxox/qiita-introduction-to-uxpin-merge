import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import commonjs from 'rollup-plugin-commonjs'
import builtins from 'rollup-plugin-node-builtins'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import babel from 'rollup-plugin-babel'
import { DEFAULT_EXTENSIONS } from '@babel/core'

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        dir: 'cjs',
        format: 'cjs',
        exports: 'named',
        sourcemap: true,
        preserveModules: true,
        preserveModulesRoot: 'src'
      }
    ],
    plugins: [
      peerDepsExternal(),
      commonjs(),
      builtins(),
      resolve(),
      typescript({ declarationDir: 'cjs', exclude: ['src/**/*.stories.tsx'] }),
      babel({
        extensions: [...DEFAULT_EXTENSIONS, '.ts', '.tsx']
      })
    ]
  },
  {
    input: 'src/index.ts',
    output: [
      {
        dir: 'esm/',
        format: 'es',
        exports: 'named',
        sourcemap: true,
        preserveModules: true,
        preserveModulesRoot: 'src'
      }
    ],
    plugins: [
      peerDepsExternal(),
      commonjs(),
      builtins(),
      resolve(),
      typescript({ declarationDir: 'esm', exclude: ['src/**/*.stories.tsx'] }),
      babel({
        extensions: [...DEFAULT_EXTENSIONS, '.ts', '.tsx']
      })
    ]
  }
]
