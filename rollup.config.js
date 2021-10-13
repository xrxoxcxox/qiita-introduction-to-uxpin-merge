import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import commonjs from 'rollup-plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'

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
      resolve(),
      peerDepsExternal(),
      commonjs(),
      typescript({ declaration: true, declarationDir: 'cjs', exclude: ['src/**/*.stories.tsx'] })
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
      resolve(),
      peerDepsExternal(),
      commonjs(),
      typescript({ declaration: true, declarationDir: 'esm', exclude: ['src/**/*.stories.tsx'] })
    ]
  }
]
