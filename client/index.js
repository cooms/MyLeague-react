import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'

import App from './components/App'
import Championinfo from './components/Championinfo'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Router history={hashHistory}>
      <Route path='/' component={App}/>
      <Route path='/myChamp' component={Championinfo}/>
    </Router>,
    document.getElementById('app')
  )
})
