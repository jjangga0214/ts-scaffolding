// eslint-disable-next-line import/no-extraneous-dependencies
const { produceConfig } = require('@jjangga0214/jest-config')
const { compilerOptions } = require('./tsconfig')

module.exports = {
  ...produceConfig(compilerOptions),
  transform: { '^.+\\.(t|j)sx?$': ['@swc/jest'] },
  // transform: { '^.+\\.tsx?$': ['esbuild-jest'] },
  // transform: { '^.+\\.tsx?$': ['ts-jest'] },
}
