/* eslint-env jest */
import React from 'react'
import { mount, shallow } from 'enzyme'

import { AnalyticsLink } from 'common'

describe('<AnalyticsLink />', () => {
  it('should render not consented', () => {
    const analyticsLink = mount(<AnalyticsLink to='test'>test</AnalyticsLink>)

    expect(analyticsLink.contains(<a href='test'>test</a>)).toBe(true)
  })

  it('should render not consented w/ target', () => {
    const analyticsLink = mount(<AnalyticsLink to='test' target='_blank' rel='noopener noreferrer'>test</AnalyticsLink>)

    expect(analyticsLink.contains(<a href='test' target='_blank' rel='noopener noreferrer'>test</a>)).toBe(true)
  })

  it('should render not consented w/ custom class', () => {
    const analyticsLink = mount(<AnalyticsLink to='test' className='custom'>test</AnalyticsLink>)

    expect(analyticsLink.contains(<a href='test' className='custom'>test</a>)).toBe(true)
  })

  it('should render a consented link', () => {
    const analyticsLink = shallow(<AnalyticsLink to='test'>test</AnalyticsLink>)
    const Children = analyticsLink.props().children({ isConsent: true })
    const link = mount(Children)

    expect(link.is('OutboundLink')).toBe(true)
    expect(link.prop('to')).toEqual('test')
    expect(link.prop('eventLabel')).toEqual('test')
  })
})
