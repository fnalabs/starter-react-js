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

import meta from 'metadata'
import template from 'server/template'

import { Routes } from 'Routes'
import { Nav, Footer } from 'layout'

// define critical css per page
const pathRegExp = /^\//
const styles = {}
for (const url in meta) {
  if (pathRegExp.test(url) && fs.existsSync(`./dist/server/css/${meta[url].name}.css`)) {
    styles[url] = Buffer.from(fs.readFileSync(`./dist/server/css/${meta[url].name}.css`)).toString('utf8')
  }
}

// define client side css and js
const webpackManifest = fs.existsSync('./dist/server/manifest.json')
  ? JSON.parse(fs.readFileSync('./dist/server/manifest.json'))
  : {}
const css = webpackManifest['main.css']
const js = webpackManifest['main.js']

// init app
const app = new Koa()

// function to render content server-side
async function render (ctx) {
  const context = {}
  const html = renderToString(
    <StaticRouter location={ctx.url} context={context}>
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
  ctx.body = template`${helmet.title.toString()}${helmet.meta.toString()}${helmet.link.toString()}${styles[ctx.path]}${css}${html}${js}`
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
