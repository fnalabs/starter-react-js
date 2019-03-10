import React from 'react'
import { hydrate } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import Transition from './Transition.jsx'

import { Routes } from 'Routes.jsx'
import { Nav, Footer } from 'layout'

hydrate(
  <BrowserRouter>
    <Transition>
      <header><Nav /></header>
      <main><Routes /></main>
      <Footer />
    </Transition>
  </BrowserRouter>
  , document.getElementById('main')
)
