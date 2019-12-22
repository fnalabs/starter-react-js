import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import ReactGA from 'react-ga'

import Consent from 'contexts/Consent'

import meta from 'metadata'

export default class Home extends Component {
  static contextType = Consent
  static contextTypes = {
    isConsent: PropTypes.bool
  }

  componentDidMount () {
    if (this.context.isConsent) {
      ReactGA.pageview(this.props.location.pathname, undefined, meta.common.siteName)
    }
  }

  render () {
    const { description, url } = meta['/']
    const siteName = meta.common.siteName

    return (
      <>
        <Helmet>
          <title>{siteName}</title>
          <meta name='description' content={description} />
          <link rel='canonical' href={url} />

          <meta property='og:title' content={siteName} />
          <meta property='og:description' content={description} />
          <meta property='og:site_name' content={siteName} />
          <meta property='og:url' content={url} />
          <meta property='og:type' content='website' />
        </Helmet>

        <div>Homepage content</div>
      </>
    )
  }
}
