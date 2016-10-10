import React from 'react'
import Champtitle from './ChampTitle.jsx'
import Champstats from './ChampStats.jsx'
import Champbio from './ChampBio.jsx'
import ChampApi from './ChampApi'

export default React.createClass({
  getInitialState () {
    return {

    }
  },

  componentDidMount () {
    ChampApi.getChamp(this.props.params.name, this.renderResults)
  },

  renderResults (err, champData) {
    console.log(champData.epiphet)
    this.setState({
      name: champData.champName,
      epiphet: champData.epiphet,
      blurb: champData.blurb,
      hp: champData.stats.hp,
      hpRegen: champData.stats.hpRegen,
      mp: champData.stats.mp,
      mpRegen: champData.stats.mpRegen,
      attackRange: champData.stats.attackRange,
      attackDmg: champData.stats.attackDmg,
      attackSpd: champData.stats.attackSpd,
      armor: champData.stats.armor,
      magicResist: champData.stats.magicResist,
      moveSpeed: champData.stats.moveSpeed,
      tallImage: champData.tallImage,
      splashImage: champData.splashIamge,
      profImage: champData.profImage
    })
  },

  render () {
    return (
      <div className="mainWrapper"
        id="jax">
        <div className="contentWrapper">
          <Champtitle
            name={this.state.name}
            epiphet={this.state.epiphet}
          />
          <Champstats
            attack={this.state.attack}
            defense={this.state.defense}
            hp={this.state.hp}
            hpRegen={this.state.hpRegen}
            mp={this.state.mp}
            mpRegen={this.state.mpRegen}
            attackRange={this.state.attackRange}
            attackDmg={this.state.attackDmg}
            attackSpd={this.state.attackSpd}
            armor={this.state.armor}
            magicResist={this.state.magicResist}
            moveSpeed={this.state.moveSpeed}
          />
          <Champbio
            blurb={this.state.blurb}
            tallImage={this.state.tallImage}
          />
        </div>
      </div>
    )
  }
})
