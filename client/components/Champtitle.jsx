import React from 'react'

export default React.createClass({
  render () {
    return (
      <div className="">
        <div className="champName"> {this.props.name} </div>
  			<div className="champEpithet"> " {this.props.epiphet} " </div>
        <span className="lineBreak"></span>
      </div>
    )
  }
})
