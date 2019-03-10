import React, { Component, Fragment } from 'react'
import Helmet from 'react-helmet'
import { Cookies } from 'react-cookie-consent'
import ReactGA from 'react-ga'

import meta from 'metadata.json'

export default class Home extends Component {
  componentDidMount () {
    if (Cookies.get('CookieConsent')) {
      ReactGA.pageview(this.props.location.pathname, undefined, meta.common.siteName)
    }
  }

  render () {
    const { description, url } = meta['/']
    const siteName = meta.common.siteName

    return (
      <Fragment>
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
      </Fragment>
    )
  }
}
