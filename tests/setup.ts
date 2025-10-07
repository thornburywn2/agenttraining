import { expect, afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import * as matchers from 'jest-axe'

// Extend Vitest matchers with jest-axe
expect.extend(matchers)

// Cleanup after each test
afterEach(() => {
  cleanup()
})
