import React from 'react'
import Helmet from 'react-helmet'

import meta from 'metadata'

export const Header = ({ title, description, url }) => (
  <Helmet>
    <title>{title}</title>
    <meta name='description' content={description} />
    <link rel='canonical' href={url} />

    <meta property='og:title' content={title} />
    <meta property='og:description' content={description} />
    <meta property='og:site_name' content={meta.common.siteName} />
    <meta property='og:url' content={url} />
    <meta property='og:image' content={meta.common.imageUrl} />
    <meta property='og:type' content='website' />
  </Helmet>
)
