import React from 'react'
import {Link} from 'react-router'

export default React.createClass({
  render () {
    return (
      <div className="champListContainer">
        <div className="champContainer">
          <img src="http://ddragon.leagueoflegends.com/cdn/6.20.1/img/champion/Aatrox.png"/>
          <Link className="link" to="/champion/Aatrox"> Aatrox </Link>
        </div>
        <div className="champContainer">
          <img src="http://ddragon.leagueoflegends.com/cdn/6.20.1/img/champion/Sion.png"/>
          <Link className="link" to="/champion/Sion"> Sion </Link>
        </div>
      </div>
    )
  }
})
