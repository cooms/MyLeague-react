import React from 'react'
import Champtitle from './Champtitle.jsx'
import Champstats from './Champstats.jsx'
import Champbio from './Champbio.jsx'

export default React.createClass({
  getinitialState () {
    
  }
  render () {
    return (
      <div className="mainWrapper" id="jax">
        <div className="contentWrapper">
          <Champtitle name={this.props.params.name}/>
          <Champstats/>
          <Champbio/>
        </div>
      </div>
    )
  }
})
