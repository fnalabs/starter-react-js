import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { OutboundLink } from 'react-ga'

import { Consumer } from 'contexts/Consent'

export default class AnalyticsLink extends Component {
  static propTypes = {
    to: PropTypes.string.isRequired,
    className: PropTypes.string,
    target: PropTypes.oneOf(['_blank', '_parent', '_top']),
    rel: PropTypes.string
  }

  render () {
    const { children, className, rel, target, to } = this.props

    const attrs = target ? { target } : {}
    if (className) attrs.className = className
    if (rel) attrs.rel = rel

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
