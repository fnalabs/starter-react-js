import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import CookieConsent, { Cookies } from 'react-cookie-consent'
import ReactGA from 'react-ga'

import { Provider } from 'contexts/Consent.jsx'

import meta from 'metadata.json'

class Transition extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isConsent: Cookies.get('CookieConsent') || false
    }

    ReactGA.initialize(process.env.GA_ID)
  }

  onAccept = () => {
    const pageMeta = meta[this.props.location.pathname]
    const title = pageMeta.title
      ? `${pageMeta.title} | ${meta.common.siteName}`
      : meta.common.siteName

    ReactGA.pageview(this.props.location.pathname, undefined, title)
    this.setState({ isConsent: true })
  }

  static getDerivedStateFromProps (props, state) {
    if (Cookies.get('CookieConsent')) return { isConsent: true }
    else return null
  }

  componentDidUpdate (prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0)
    }
  }

  render () {
    return (
      <Provider value={this.state}>
        {this.props.children}

        {!this.state.isConsent &&
          <CookieConsent disableStyles
            buttonText='I Accept'
            contentClasses='is-inline-block'
            onAccept={this.onAccept}
          >
            We use cookies to provide you the best experience. By clicking <strong>I Accept</strong> you are agreeing to our <Link to='/cookie'>Cookie</Link> and <Link to='/privacy'>Privacy</Link> Policies.
          </CookieConsent>
        }
      </Provider>
    )
  }
}

export default withRouter(Transition)
