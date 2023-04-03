/* eslint-env jest */
import React, { ReactNode } from 'react'
import '@testing-library/jest-dom'
import { cleanup, render, screen, RenderResult } from '@testing-library/react'
import AnalyticsLink, { LinkTargets } from '../../../src/components/common/AnalyticsLink'
import { Provider } from '../../../src/components/contexts/Consent'

const customRender = (ui: ReactNode, isConsent: boolean): RenderResult => {
  return render(<Provider value={isConsent}>{ui}</Provider>)
}

describe('<AnalyticsLink />', () => {
  afterEach(cleanup)

  it('should render not consented', () => {
    render(<AnalyticsLink to='test'>test</AnalyticsLink>)

    const renderedLink = screen.getByRole('link')
    expect(renderedLink).toHaveAttribute('href', 'test')
    expect(renderedLink).not.toHaveAttribute('target')
    expect(renderedLink).not.toHaveAttribute('rel')
    expect(renderedLink).not.toHaveAttribute('class')
    expect(renderedLink).not.toHaveAttribute('aria-label')
    expect(renderedLink).toHaveTextContent('test')
  })

  it('should render not consented w/ target', () => {
    render(<AnalyticsLink to='test' target={LinkTargets.BLANK} rel='noopener noreferrer'>test</AnalyticsLink>)

    const renderedLink = screen.getByRole('link')
    expect(renderedLink).toHaveAttribute('href', 'test')
    expect(renderedLink).toHaveAttribute('target', '_blank')
    expect(renderedLink).toHaveAttribute('rel', 'noopener noreferrer')
    expect(renderedLink).not.toHaveAttribute('class')
    expect(renderedLink).not.toHaveAttribute('aria-label')
    expect(renderedLink).toHaveTextContent('test')
  })

  it('should render not consented w/ custom class', () => {
    render(<AnalyticsLink to='test' className='custom'>test</AnalyticsLink>)

    const renderedLink = screen.getByRole('link')
    expect(renderedLink).toHaveAttribute('href', 'test')
    expect(renderedLink).not.toHaveAttribute('target')
    expect(renderedLink).not.toHaveAttribute('rel')
    expect(renderedLink).toHaveAttribute('class', 'custom')
    expect(renderedLink).not.toHaveAttribute('aria-label')
    expect(renderedLink).toHaveTextContent('test')
  })

  it('should render not consented w/ ARIA label', () => {
    render(<AnalyticsLink to='test' ariaLabel='test'>test</AnalyticsLink>)

    const renderedLink = screen.getByRole('link')
    expect(renderedLink).toHaveAttribute('href', 'test')
    expect(renderedLink).not.toHaveAttribute('target')
    expect(renderedLink).not.toHaveAttribute('rel')
    expect(renderedLink).not.toHaveAttribute('class')
    expect(renderedLink).toHaveAttribute('aria-label', 'test')
    expect(renderedLink).toHaveTextContent('test')
  })

  it('should render a consented link', () => {
    customRender(<AnalyticsLink to='test'>test</AnalyticsLink>, true)

    const renderedLink = screen.getByRole('link')
    expect(renderedLink).toHaveAttribute('href', 'test')
    expect(renderedLink).not.toHaveAttribute('target')
    expect(renderedLink).not.toHaveAttribute('rel')
    expect(renderedLink).not.toHaveAttribute('class')
    expect(renderedLink).not.toHaveAttribute('aria-label')
    expect(renderedLink).toHaveTextContent('test')
  })
})
