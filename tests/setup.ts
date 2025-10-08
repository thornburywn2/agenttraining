import { expect, afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import * as matchers from '@testing-library/jest-dom/matchers'
import * as axeMatchers from 'jest-axe'

// Extend Vitest matchers with jest-dom and jest-axe
expect.extend(matchers)
expect.extend(axeMatchers)

// Cleanup after each test
afterEach(() => {
  cleanup()
})
