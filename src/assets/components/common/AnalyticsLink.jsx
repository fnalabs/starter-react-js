import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { OutboundLink } from 'react-ga'

import { Consumer } from '../contexts/Consent.jsx'

export default class AnalyticsLink extends Component {
  static propTypes = {
    to: PropTypes.string.isRequired,
    className: PropTypes.string,
    target: PropTypes.oneOf(['_blank', '_parent', '_top'])
  }

  render () {
    const { children, className, target, to } = this.props

    const attrs = target ? { target } : {}
    if (className) attrs.className = className

    return (
      <Consumer>
        {({ isConsent }) => (
          isConsent
            ? <OutboundLink eventLabel={to} to={to} {...attrs}>{children}</OutboundLink>
            : <a href={to} {...attrs}>{children}</a>
        )}
      </Consumer>
    )
  }
}
