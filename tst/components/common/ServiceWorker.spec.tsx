import React from 'react'
import '@testing-library/jest-dom'
import { cleanup, render } from '@testing-library/react'
import ServiceWorker from '../../../src/components/common/ServiceWorker'

const mockUpdate = jest.fn().mockReturnValue({})
const mockServiceWorker = {
  update: () => mockUpdate()
}
const mockRegister = jest.fn().mockReturnValue(mockServiceWorker)
const mockAddEventListener = jest.fn()
const mockRemoveEventListener = jest.fn()

describe('<ServiceWorker />', () => {
  afterEach(cleanup)

  it('should render placeholder content', () => {
    const { asFragment } = render(<ServiceWorker />)
    expect(asFragment()).toMatchInlineSnapshot(`
<DocumentFragment>
  <div />
</DocumentFragment>
`)
  })

  it('should render and register service worker properly', () => {
    Object.defineProperty(navigator, 'serviceWorker', {
      value: {
        register: () => mockRegister(),
        addEventListener: () => mockAddEventListener(),
        removeEventListener: () => mockRemoveEventListener()
      }
    })

    const { unmount } = render(<ServiceWorker />)

    expect(mockRegister).toHaveBeenCalledTimes(1)
    expect(mockUpdate).not.toHaveBeenCalled()
    // expect(mockAddEventListener).toHaveBeenCalledTimes(1)
    expect(mockRemoveEventListener).not.toHaveBeenCalled()

    unmount()

    expect(mockRemoveEventListener).toHaveBeenCalledTimes(1)
  })
})
