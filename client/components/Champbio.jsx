import React from 'react'

export default React.createClass({
  createMarkup(){
    return {
      __html: this.props.blurb
    }
  },

  render(){
    return(
      <div className="champBio">
				<img
          src={this.props.tallImage}
          alt="Jax's profile pic"
          className="champProfPic"
        />
      <div dangerouslySetInnerHTML={this.createMarkup()} className="mainContent"/>
        <br/>
			</div>
    )
  }
})
