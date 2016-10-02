import React from 'react'
import {Link} from 'react-router'

export default React.createClass({
  render () {
    return (
      <div className="linkWrapper">
        <ul>
          <li><Link to="/champion/Jax"> Jax </Link></li>
          <li><Link to="/champion/Ashe"> Ashe </Link></li>
          <li><Link to="/champion/Gragas"> Gragas </Link></li>
        </ul>
      </div>
    )
  }
})
