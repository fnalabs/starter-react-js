// imports
import Koa from 'koa'
import compress from 'koa-compress'
import helmet from 'koa-helmet'
import logger from 'koa-logger'
import serve from 'koa-static'

import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import Helmet from 'react-helmet'

import { Layout } from './Layout.jsx'

// init app
const app = new Koa()

// function to render content server-side
async function render (ctx) {
  const context = {}
  const html = renderToString(
    <StaticRouter location={ctx.url} context={context}>
      <Layout />
    </StaticRouter>
  )
  Helmet.renderStatic()

  if (context.url) {
    ctx.status = 302
    return ctx
  }

  ctx.status = context.status || 200
  ctx.body = html
  return ctx
}

// define middleware and export
export default app
  .use(compress())
  .use(helmet())
  .use(helmet.referrerPolicy())
  .use(logger())
  .use(serve('dist/client'))
  .use(render)
  .on('error', (err, ctx) => {
    console.log('server error', err, ctx)
  })
