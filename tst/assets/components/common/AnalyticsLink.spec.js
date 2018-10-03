/* eslint-env jest */
import React from 'react'
import { mount, shallow } from 'enzyme'

import AnalyticsLink from '../../../../src/assets/components/common/AnalyticsLink.jsx'

describe('<AnalyticsLink />', () => {
  test('should render not consented', () => {
    const analyticsLink = mount(<AnalyticsLink to='test'>test</AnalyticsLink>)

    expect(analyticsLink.contains(<a href='test'>test</a>)).toBe(true)
  })

  test('should render not consented w/ target', () => {
    const analyticsLink = mount(<AnalyticsLink to='test' target='_blank'>test</AnalyticsLink>)

    expect(analyticsLink.contains(<a href='test' target='_blank'>test</a>)).toBe(true)
  })

  test('should render not consented w/ custom class', () => {
    const analyticsLink = mount(<AnalyticsLink to='test' className='custom'>test</AnalyticsLink>)

    expect(analyticsLink.contains(<a href='test' className='custom'>test</a>)).toBe(true)
  })

  test('should render consented', () => {
    const analyticsLink = shallow(<AnalyticsLink to='test'>test</AnalyticsLink>)
    const Children = analyticsLink.props().children({ isConsent: true })
    const link = shallow(Children)

    expect(link.is('a')).toBe(true)
    expect(link.prop('to')).toEqual('test')
    expect(link.prop('href')).toEqual('test')
  })
})
