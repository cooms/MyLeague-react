import React from 'react'

export default React.createClass({
  render () {
    return (
      <div className="">
        <div className="champName"> {this.props.name} </div>
  			<div className="champEpithet"> "Grandmaster at Arms" </div>
        <span className="lineBreak"></span>
      </div>
    )
  }
})
