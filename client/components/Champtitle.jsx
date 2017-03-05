import React from 'react'

// Render the champion's title
export default React.createClass({
  render () {
    return (
      <div className="">
        <div className="champName"> {this.props.name} </div>
  			<div className="champEpithet"> " {this.props.epiphet} " </div>
      </div>
    )
  }
})
