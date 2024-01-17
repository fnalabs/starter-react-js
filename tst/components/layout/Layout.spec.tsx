import React, { ReactNode } from 'react'
import { cleanup, render } from '@testing-library/react'

describe('<Layout />', () => {
  afterEach(cleanup)

  beforeAll(() => {
    jest.mock('react-ga4')
    jest.mock('../../../src/components/common', () => ({
      CookieConsent: () => (<div>Cookie Consent</div>),
      ServiceWorker: () => (<div>Service Worker</div>)
    }))
    jest.mock('../../../src/contexts/Consent', () => ({
      ConsentProvider: ({ children }: { children: ReactNode }) => <>{children}</>
    }))
  })

  beforeEach(jest.resetModules)

  it('should render Layout content for development and test correctly', async () => {
    jest.doMock('../../../src/config', () => ({ IS_PROD: false }))
    const { default: Layout } = await import('../../../src/app/layout')

    const { asFragment } = render(<Layout>test</Layout>)
    expect(asFragment()).toMatchInlineSnapshot(`
<DocumentFragment>
  <div>
    Cookie Consent
  </div>
</DocumentFragment>
`)
  })

  it('should render Layout content for production correctly', async () => {
    jest.doMock('../../../src/config', () => ({ IS_PROD: true }))
    const { default: Layout } = await import('../../../src/app/layout')

    const { asFragment } = render(<Layout>test</Layout>)
    expect(asFragment()).toMatchInlineSnapshot(`
<DocumentFragment>
  <div>
    Cookie Consent
  </div>
  <div>
    Service Worker
  </div>
</DocumentFragment>
`)
  })
})
