import { add } from '#/index.js'

describe('index', () => {
  it('adds 1 and 2', () => {
    expect.hasAssertions()
    expect(1 + 2).toBe(add(1, 2))
  })
})
