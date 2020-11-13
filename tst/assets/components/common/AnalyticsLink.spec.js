/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'

import { AnalyticsLink } from 'common'

describe('<AnalyticsLink />', () => {
  it('should render not consented', () => {
    const analyticsLink = shallow(<AnalyticsLink to='test'>test</AnalyticsLink>)

    expect(analyticsLink.html()).toEqual('<a href="test">test</a>')
  })

  it('should render not consented w/ target', () => {
    const analyticsLink = shallow(<AnalyticsLink to='test' target='_blank' rel='noopener noreferrer'>test</AnalyticsLink>)

    expect(analyticsLink.html()).toEqual('<a href="test" target="_blank" rel="noopener noreferrer">test</a>')
  })

  it('should render not consented w/ custom class', () => {
    const analyticsLink = shallow(<AnalyticsLink to='test' className='custom'>test</AnalyticsLink>)

    expect(analyticsLink.html()).toEqual('<a href="test" class="custom">test</a>')
  })

  it('should render not consented w/ ARIA label', () => {
    const analyticsLink = shallow(<AnalyticsLink to='test' aria-label='test'>test</AnalyticsLink>)

    expect(analyticsLink.html()).toEqual('<a href="test" aria-label="test">test</a>')
  })

  it('should render a consented link', () => {
    const analyticsLink = shallow(<AnalyticsLink to='test'>test</AnalyticsLink>, { context: { isConsent: true } })

    expect(analyticsLink.is('OutboundLink')).toBe(true)
    expect(analyticsLink.prop('to')).toEqual('test')
    expect(analyticsLink.prop('eventLabel')).toEqual('test')
  })
})
