import React from 'react'
import ChampApi from './ChampApi'
import Champtitle from './ChampTitle.jsx'
import ChampRoles from './ChampRoles.jsx'
import ChampStatBars from './ChampStatBars.jsx'
import Champstats from './ChampStats.jsx'
import Champbio from './ChampBio.jsx'


export default React.createClass({
  getInitialState () {
    return {

    }
  },

  componentDidMount () {
    ChampApi.getChamp(this.props.params.name, this.renderResults)
    window.scrollTo(0, 80)
  },

  renderResults (err, champData) {
    this.setState({
      attack: champData.baseInfo.attack,
      defense: champData.baseInfo.defense,
      magic: champData.baseInfo.magic,
      difficulty: champData.baseInfo.difficulty,
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
      profImage: champData.profImage,
      role1: champData.roles.role1,
      role2: champData.roles.role2
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
          <ChampRoles
            role1={this.state.role1}
            role2={this.state.role2}
          />
          <ChampStatBars
            attack={this.state.attack}
            defense={this.state.defense}
            magic={this.state.magic}
            difficulty={this.state.difficulty}
          />
          <Champstats
            attack={this.state.attack}
            defense={this.state.defense}
            magic={this.state.magic}
            difficulty={this.state.difficulty}
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
