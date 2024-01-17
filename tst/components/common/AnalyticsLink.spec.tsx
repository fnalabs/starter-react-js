/* eslint-env jest */
import React from 'react'
import '@testing-library/jest-dom'
import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import AnalyticsLink, { LinkTarget } from '../../../src/components/common/AnalyticsLink'

const mockEvent = jest.fn()
jest.mock('react-ga4', () => ({
  __esModule: true,
  default: {
    event: (e: any) => mockEvent(e)
  }
}))
jest.mock('../../../src/contexts/Consent', () => ({
  useConsent: jest.fn()
    .mockReturnValueOnce(true)
    .mockReturnValueOnce(false)
    .mockReturnValueOnce(false)
    .mockReturnValueOnce(true)
    .mockReturnValue(false)
}))

describe('<AnalyticsLink />', () => {
  afterEach(() => {
    jest.clearAllMocks()
    cleanup()
  })

  it('should handleClick and send a GA Click event', async () => {
    render(<AnalyticsLink to='#test'>test</AnalyticsLink>)

    await userEvent.click(screen.getByRole('link'))

    expect(mockEvent).toHaveBeenCalledTimes(1)
    expect(mockEvent).toHaveBeenCalledWith({
      action: 'Click',
      category: 'Outbound',
      label: '#test'
    })
  })

  it('should handleClick without sending a GA Click event', async () => {
    render(<AnalyticsLink to='#test'>test</AnalyticsLink>)

    await userEvent.click(screen.getByRole('link'))

    expect(mockEvent).not.toHaveBeenCalled()
  })

  it('should handleClick and call onClick prop', async () => {
    const mockOnClick = jest.fn()

    render(<AnalyticsLink to='#test' onClick={mockOnClick}>test</AnalyticsLink>)

    await userEvent.click(screen.getByRole('link'))

    expect(mockEvent).not.toHaveBeenCalled()
    expect(mockOnClick).toHaveBeenCalledTimes(1)
  })

  it('should render a consented link', () => {
    render(<AnalyticsLink to='#test'>test</AnalyticsLink>)

    const renderedLink = screen.getByRole('link')
    expect(renderedLink).toHaveAttribute('href', '#test')
    expect(renderedLink).not.toHaveAttribute('target')
    expect(renderedLink).not.toHaveAttribute('rel')
    expect(renderedLink).not.toHaveAttribute('class')
    expect(renderedLink).not.toHaveAttribute('aria-label')
    expect(renderedLink).toHaveTextContent('test')
  })

  it('should render not consented', () => {
    render(<AnalyticsLink to='#test'>test</AnalyticsLink>)

    const renderedLink = screen.getByRole('link')
    expect(renderedLink).toHaveAttribute('href', '#test')
    expect(renderedLink).not.toHaveAttribute('target')
    expect(renderedLink).not.toHaveAttribute('rel')
    expect(renderedLink).not.toHaveAttribute('class')
    expect(renderedLink).not.toHaveAttribute('aria-label')
    expect(renderedLink).toHaveTextContent('test')
  })

  it('should render not consented w/ target', () => {
    render(<AnalyticsLink to='#test' target={LinkTarget.BLANK} rel='noopener noreferrer'>test</AnalyticsLink>)

    const renderedLink = screen.getByRole('link')
    expect(renderedLink).toHaveAttribute('href', '#test')
    expect(renderedLink).toHaveAttribute('target', '_blank')
    expect(renderedLink).toHaveAttribute('rel', 'noopener noreferrer')
    expect(renderedLink).not.toHaveAttribute('class')
    expect(renderedLink).not.toHaveAttribute('aria-label')
    expect(renderedLink).toHaveTextContent('test')
  })

  it('should render not consented w/ custom class', () => {
    render(<AnalyticsLink to='#test' className='custom'>test</AnalyticsLink>)

    const renderedLink = screen.getByRole('link')
    expect(renderedLink).toHaveAttribute('href', '#test')
    expect(renderedLink).not.toHaveAttribute('target')
    expect(renderedLink).not.toHaveAttribute('rel')
    expect(renderedLink).toHaveAttribute('class', 'custom')
    expect(renderedLink).not.toHaveAttribute('aria-label')
    expect(renderedLink).toHaveTextContent('test')
  })

  it('should render not consented w/ ARIA label', () => {
    render(<AnalyticsLink to='#test' ariaLabel='test'>test</AnalyticsLink>)

    const renderedLink = screen.getByRole('link')
    expect(renderedLink).toHaveAttribute('href', '#test')
    expect(renderedLink).not.toHaveAttribute('target')
    expect(renderedLink).not.toHaveAttribute('rel')
    expect(renderedLink).not.toHaveAttribute('class')
    expect(renderedLink).toHaveAttribute('aria-label', 'test')
    expect(renderedLink).toHaveTextContent('test')
  })
})
