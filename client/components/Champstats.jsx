import React from 'react'

export default React.createClass({
  render(){
    return(
      <div>
        <div className="champStats">
  				<div className="statPropColumn">
  					<p> HEALTH </p>
  					<p> HEALTH REGEN. </p>
  					<p> MANA </p>
  					<p> MANA REGEN. </p>
  					<p> MELEE </p>
  				</div>
  				<div className="statValColumn">
  					<p> 593 </p>
  					<p> 8.37 </p>
  					<p> 339 </p>
  					<p> 7.58 </p>
  					<p> 125 </p>
  				</div>
  				<div className="statPropColumn">
  					<p> ATTACK DAMAGE </p>
  					<p> ATTACK SPEED </p>
  					<p> ARMOR </p>
  					<p> MAGIC RESIST </p>
  					<p> MOVE SPEED </p>
  				</div>
  				<div className="statValColumn">
  					<p> 62 </p>
  					<p> 0.638 </p>
  					<p> 27 </p>
  					<p> 32.1 </p>
  					<p> 350 </p>
  				</div>
  			</div>
        <span className="lineBreak"></span>
      </div>
    )
  }
})
