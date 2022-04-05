import {expect, test} from '@jest/globals'
import {run} from '../src/main'

test('1+1', async () => {
  await run()
  expect(1 + 1).toBe(2)
})
