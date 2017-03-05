import React from 'react'

export default React.createClass({
	render(){
		return(
			<div>
				<div className="champRoles">
					<p>	Primary Role: <strong>{this.props.role1}</strong></p>
					<p>Seconday Role: <strong>{this.props.role2}</strong></p>
				</div>
				<span className="lineBreak"></span>
			</div>
		)
	}
})