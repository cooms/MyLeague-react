import React from 'react'
import Header from './Header.jsx'
import Formbox from './FormBox.jsx'
import ChampList from './ChampList.jsx'
import ChampApi from './ChampApi.js'

export default React.createClass({
  getInitialState () {
    return {
      champs: []
    }
  },

  componentDidMount () {
    ChampApi.GetAllChamps(this.renderResults)
  },

  renderResults (err, allChamps) {
    this.setState({
      champs: allChamps
    })
  },

  render() {
    return (
      <div className="mainWrapper" id="main">
        <Header/>
        <Formbox/>
        <ChampList champs={this.state.champs}/>
      </div>
    )
  }
})
