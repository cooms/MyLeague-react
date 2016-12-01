import React from 'react'

// Render champions main statistical information
export default React.createClass({
  render(){
    return(
      <div className="">
        <div className="statBars">
          <p> ATTACK {this.props.attack} </p>
          <p> HEALTH {this.props.defense} </p>
          <p> MAGIC {this.props.magic} </p>
          <p> DIFFICULTY {this.props.difficulty} </p>
        </div>
        <span className="lineBreak"/>
      </div>
    )
  }
})
