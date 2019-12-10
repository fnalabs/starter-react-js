// imports
import fs from 'fs'

import Koa from 'koa'
import compress from 'koa-compress'
import helmet from 'koa-helmet'
import logger from 'koa-logger'
import serve from 'koa-static'

import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import Helmet from 'react-helmet'

import template from './template'

import { Routes } from 'Routes'
import { Nav, Footer } from 'layout'

import styles from 'styles/main.scss'

// define manifest and client side scripts
const manifestRegExp = /^manifest/
const webpackManifest = JSON.parse(fs.readFileSync('./dist/server/manifest.json'))

let manifest = ''
for (const key in webpackManifest) if (manifestRegExp.test(key)) manifest = `<link rel="manifest" href="/${webpackManifest[key]}">`
const scripts = `<script src='/${webpackManifest['main.js']}' async></script>`

// init app
const app = new Koa()

// function to render content server-side
async function render (ctx) {
  const context = {}
  const html = renderToString(
    <StaticRouter location={ctx.url} context={context}>
      <style dangerouslySetInnerHTML={{ __html: styles._getCss() }} />
      <div id='main' role='none'>
        <header><Nav /></header>
        <main><Routes /></main>
        <Footer />
      </div>
    </StaticRouter>
  )
  const helmet = Helmet.renderStatic()

  if (context.url) {
    ctx.status = 302
    return ctx
  }

  ctx.status = context.status || 200
  ctx.body = template`${helmet.title.toString()}${helmet.meta.toString()}${helmet.link.toString()}${manifest}${html}${scripts}`
  return ctx
}

// define middleware and export
export default app
  .use(compress())
  .use(helmet())
  .use(helmet.referrerPolicy())
  .use(logger())
  .use(serve('./dist/client'))
  .use(render)
  .on('error', (err, ctx) => {
    console.log('server error', err, ctx)
  })
