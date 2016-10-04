import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'

import App from './components/App'
import ChampionInfo from './components/ChampionInfo'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Router history={hashHistory}>
      <Route path='/' component={App}/>
      <Route path='/champion/:name' component={ChampionInfo}/>
    </Router>,
    document.getElementById('app')
  )
})
