import React from 'react'
import '@testing-library/jest-dom'
import { cleanup, render, renderHook } from '@testing-library/react'
import { ConsentActionType, ConsentProvider, consentReducer, useConsent, useConsentDispatch } from '../../src/contexts/Consent'

jest.mock('react-cookie-consent', () => ({
  Cookies: {
    get: () => jest.fn().mockReturnValueOnce('true').mockReturnValue(undefined)
  }
}))

describe('consentReducer', () => {
  afterEach(cleanup)

  it('should process ConsentActionType.ACCEPTED correctly', () => {
    expect(consentReducer(false, { type: ConsentActionType.ACCEPTED })).toBe(true)
  })

  it('should process ConsentActionType.DECLINED correctly', () => {
    expect(consentReducer(false, { type: ConsentActionType.DECLINED })).toBe(false)
  })

  it('should throw an error if the wrong action is provided', () => {
    expect(() => consentReducer(false, { type: 'test' as unknown as ConsentActionType })).toThrow('Unknown Consent action: "test"')
  })
})

describe('<ConsentProvider />', () => {
  afterEach(cleanup)

  it('should render all static content with cookies set correctly', () => {
    const { asFragment } = render(<ConsentProvider>test content</ConsentProvider>)
    expect(asFragment()).toMatchInlineSnapshot(`
<DocumentFragment>
  test content
</DocumentFragment>
`)
  })

  it('should render all static content with session storage set correctly', () => {
    Object.defineProperty(globalThis, 'sessionStorage', {
      value: {
        getItem: jest.fn().mockReturnValue('true')
      }
    })

    const { asFragment } = render(<ConsentProvider>test content</ConsentProvider>)
    expect(asFragment()).toMatchInlineSnapshot(`
<DocumentFragment>
  test content
</DocumentFragment>
`)
  })
})

describe('useConsent', () => {
  afterEach(cleanup)

  it('should use custom hook correctly', () => {
    const { result } = renderHook(useConsent)
    expect(result.current).toBe(false)
  })
})

describe('useConsentDispatch', () => {
  afterEach(cleanup)

  it('should use custom hook correctly', () => {
    const { result } = renderHook(useConsentDispatch)
    expect(result.current).toBeUndefined()
  })
})
