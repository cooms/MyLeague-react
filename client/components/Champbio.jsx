import React from 'react'

export default React.createClass({
  render(){
    return(
      <div className="champBio">
				<img src="images/jax_2.jpg" alt="Jax's profile pic" className="champProfPic"/>
				<div className="mainContent">
          {this.props.blurb}
          <br/>
				</div>
			</div>
    )
  }
})
