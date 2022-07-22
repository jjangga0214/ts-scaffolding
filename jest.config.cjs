// eslint-disable-next-line import/no-extraneous-dependencies
const { getConfig } = require('@jjangga0214/jest-config')
const { compilerOptions } = require('./tsconfig')

module.exports = {
  ...getConfig(compilerOptions),

  // You can override other fields as well.
  // transform: {
  //   '.(ts|tsx)': 'ts-jest',
  // },
}
