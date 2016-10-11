import React from 'react'

export default React.createClass({
  render(){
    return(
      <div className="">
        <div className="champStats">
  				<div className="statPropColumn">
  					<p> HEALTH </p>
  					<p> HEALTH REGEN. </p>
  					<p> MANA </p>
  					<p> MANA REGEN. </p>
  					<p> MELEE </p>
  				</div>
  				<div className="statValColumn">
  					<p> {this.props.hp} </p>
  					<p> {this.props.hpRegen} </p>
  					<p> {this.props.mp} </p>
  					<p> {this.props.mpRegen} </p>
  					<p> {this.props.attackRange} </p>
  				</div>
  				<div className="statPropColumn">
  					<p> ATTACK DAMAGE </p>
  					<p> ATTACK SPEED </p>
  					<p> ARMOR </p>
  					<p> MAGIC RESIST </p>
  					<p> MOVE SPEED </p>
  				</div>
  				<div className="statValColumn">
  					<p> {this.props.attackDmg} </p>
  					<p> {this.props.attackSpd} </p>
  					<p> {this.props.armor} </p>
  					<p> {this.props.magicResist} </p>
  					<p> {this.props.moveSpeed} </p>
  				</div>
  			</div>
        <span className="lineBreak"/>
      </div>
    )
  }
})
