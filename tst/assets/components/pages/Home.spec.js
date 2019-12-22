/* eslint-env jest */
import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

import ReactGA from 'react-ga'

import { Home } from 'pages'

jest.mock('react-ga')

describe('<Home />', () => {
  it('should render homepage static content', () => {
    const tree = renderer.create(<Home location={{ pathname: '/' }} />).toJSON()

    expect(tree).toMatchSnapshot()
    expect(ReactGA.pageview).not.toBeCalled()
  })

  it('should call pageview if isConsent is true', () => {
    shallow(<Home location={{ pathname: '/' }} />, {
      context: { isConsent: true }
    })

    expect(ReactGA.pageview).toBeCalledTimes(1)
  })
})
