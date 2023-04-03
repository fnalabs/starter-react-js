import React from 'react'
import { cleanup, render } from '@testing-library/react'
import { Header } from '../../../src/components/layout'

describe('<Header />', () => {
  afterEach(cleanup)

  it('should render static content correctly', () => {
    const { asFragment } = render(<Header />)
    expect(asFragment()).toMatchInlineSnapshot(`
<DocumentFragment>
  <header>
    <nav>
      <a
        href="/"
      >
        Home
      </a>
    </nav>
  </header>
</DocumentFragment>
`)
  })
})
