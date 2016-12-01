import React from 'react'
import {Link} from 'react-router'

// Render the entire list of champions - map an image, id and link for each one.
export default React.createClass({
  render () {
    return (
      <div className="champListContainer">
        {this.props.champs.map(champ => {
          return(
            <div className="champContainer">
              <img src={champ.image}/>
              <Link className="link" to={`/champion/${champ.id}`}> {champ.name} </Link>
            </div>
          )
        })}
      </div>
    )
  }
})
