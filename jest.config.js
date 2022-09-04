import { produceConfig } from '@jjangga0214/jest-config'
import { createRequire } from 'module'

const require = createRequire(import.meta.url)
const tsConfig = require('./tsconfig.json')

export default {
  ...produceConfig(tsConfig),
  transform: { '^.+\\.(t|j)sx?$': ['@swc/jest'] },
  // transform: { '^.+\\.tsx?$': ['esbuild-jest'] },
  // transform: { '^.+\\.tsx?$': ['ts-jest'] },
}
