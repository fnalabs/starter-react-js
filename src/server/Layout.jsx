import React from 'react'

import { Routes } from 'Routes.jsx'
import { Nav, Footer } from 'layout'

import styles from 'styles/main.scss'

export const Layout = () => (
  <html>
    <head>
      <meta charSet='utf-8' />
      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />

      <style dangerouslySetInnerHTML={{ __html: styles._getCss() }} />

      {/* TODO: add favicons
      <link rel='apple-touch-icon-precomposed' sizes='152x152' href='' />
      <link rel='apple-touch-icon-precomposed' sizes='144x144' href='' />
      <link rel='apple-touch-icon-precomposed' sizes='120x120' href='' />
      <link rel='apple-touch-icon-precomposed' sizes='114x114' href='' />
      <link rel='apple-touch-icon-precomposed' sizes='72x72' href='' />
      <link rel='apple-touch-icon-precomposed' sizes='57x57' href='' />
      <link rel='icon' type='image/png' sizes='32x32' href='' />
      */}
    </head>

    <body>

      <div id='main' role='none'>
        <header><Nav /></header>
        <main><Routes /></main>
        <Footer />
      </div>

      <script src='./main.js' async />
    </body>
  </html>
)
