import React from 'react'
import Champtitle from './Champtitle.jsx'
import Champstats from './Champstats.jsx'
import Champbio from './Champbio.jsx'
import champapi from './champapi'

export default React.createClass({
  getInitialState () {
    return {

    }
  },

  componentDidMount () {
    champapi.getChamp(this.renderResults)
  },

  renderResults (err, champData) {
    console.log(champData.epiphet)
    this.setState({
      name: champData.name,
      epiphet: champData.epiphet,
      blurb: champData.blurb,
      image: champData.image,
      hp: champData.stats.hp,
      hpRegen: champData.stats.hpRegen,
      mp: champData.stats.mp,
      mpRegen: champData.stats.mpRegen,
      attackRange: champData.stats.attackRange,
      attackDmg: champData.stats.attackDmg,
      attackSpd: champData.stats.attackSpd,
      armor: champData.stats.armor,
      magicResist: champData.stats.magicResist,
      moveSpeed: champData.stats.moveSpeed
    })
  },

  render () {
    return (
      <div className="mainWrapper" id="jax">
        <div className="contentWrapper">
          <Champtitle name={this.props.params.name} epiphet={this.state.epiphet}/>
          <Champstats hp={this.state.hp} hpRegen={this.state.hpRegen} mp={this.state.mp} mpRegen={this.state.mpRegen} attackRange={this.state.attackRange} attackDmg={this.state.attackDmg} attackSpd={this.state.attackSpd} armor={this.state.armor} magicResist={this.state.magicResist} moveSpeed={this.state.moveSpeed} />
          <Champbio blurb={this.state.blurb}/>
        </div>
      </div>
    )
  }
})
