import React from 'react'
import {Link} from 'react-router'

export default React.createClass({
  render () {
    return (
      <div className="champContainer2">
        <img src={champ.image}/>
        <Link className="link" to={`/champion/${champ.id}`}> {champ.name} </Link>
      </div>
    )
  }
})
