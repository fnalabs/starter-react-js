import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Helmet from 'react-helmet'

import meta from 'metadata.json'

export const Cookie = () => {
  const { title, url } = meta['/cookie']
  const siteName = meta.common.siteName

  return (
    <Fragment>
      <Helmet>
        <title>{title} | {siteName}</title>

        <meta property='og:title' content={`${title} | ${siteName}`} />
        <meta property='og:site_name' content={siteName} />
        <meta property='og:url' content={url} />
        <meta property='og:type' content='website' />
      </Helmet>

      <article>
        {/* TODO: add site/company name and web address here */}
        <h1>Cookie Policy for `siteName`</h1>
        <p>This is the Cookie Policy for <Link to='/'>https://example.com</Link></p>
        {/* /TODO */}

        <p><strong>What Are Cookies</strong></p>
        <p>As is common practice with almost all professional websites this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it and why we sometimes need to store these cookies. We will also share how you can prevent these cookies from being stored however this may downgrade or 'break' certain elements of the sites functionality.</p>
        <p>For more general information on cookies see the Wikipedia article on <a href='https://en.wikipedia.org/wiki/HTTP_cookie'>HTTP Cookies</a>.</p>

        <p><strong>How We Use Cookies</strong></p>
        <p>We use cookies for a variety of reasons detailed below. Unfortunately in most cases there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.</p>

        <p><strong>Disabling Cookies</strong></p>
        <p>You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in also disabling certain functionality and features of the this site. Therefore it is recommended that you do not disable cookies.</p>

        <p><strong>The Cookies We Set</strong></p>
        <ul>
          <li>
            <p>Site preferences cookies</p>
            <p>In order to provide you with a great experience on this site we provide the functionality to set your preferences for how this site runs when you use it. In order to remember your preferences we need to set cookies so that this information can be called whenever you interact with a page is affected by your preferences.</p>
          </li>
        </ul>

        <p><strong>Third Party Cookies</strong></p>
        <p>In some special cases we also use cookies provided by trusted third parties. The following section details which third party cookies you might encounter through this site.</p>
        <ul>
          <li>
            <p>This site uses Google Analytics which is one of the most widespread and trusted analytics solution on the web for helping us to understand how you use the site and ways that we can improve your experience. These cookies may track things such as how long you spend on the site and the pages that you visit so we can continue to produce engaging content.</p>
            <p>For more information on Google Analytics cookies, see the official <a href='https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage'>Google Analytics</a> page.</p>
          </li>
          <li>
            <p>We also use social media buttons and/or plugins on this site that allow you to connect with your social network in various ways. For these to work the following social media sites including; Twitter, will set cookies through our site which may be used to enhance your profile on their site or contribute to the data they hold for various purposes outlined in their respective privacy policies.</p>
          </li>
        </ul>

        <p><strong>More Information</strong></p>
        <p>Hopefully that has clarified things for you and as was previously mentioned if there is something that you aren't sure whether you need or not it's usually safer to leave cookies enabled in case it does interact with one of the features you use on our site. This Cookies Policy was created with the help of the <a href='https://cookiepolicygenerator.com'>GDPR Cookies Policy Generator</a>.</p>
        <p>However if you are still looking for more information then you can contact us through one of our preferred contact methods:</p>
        <ul>
          {/* TODO: add contact info */}
          <li><p>Email: <a href='mailto:contact@example.com'>contact@example.com</a></p></li>
          {/* /TODO */}
        </ul>
      </article>
    </Fragment>
  )
}
