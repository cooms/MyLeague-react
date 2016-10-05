import React from 'react'
import Header from './Header.jsx'
import Formbox from './FormBox.jsx'
import ChampList from './ChampList.jsx'
import ChampApi from './ChampApi'

export default React.createClass({
  getInitialState () {
    return {

    }
  },

  componentDidMount () {
    ChampApi.GetAllChamps(this.renderResults)
  },

  renderResults (err, allChampsData) {
    console.log(allChampsData)
    this.setState({
      champName: allChampsData.champName,
      profImage: champData.profImage
    })
  },
  
  render() {
    return (
      <div className="mainWrapper" id="main">
        <Header/>
        <Formbox/>
        <ChampList/>
      </div>
    )
  }
})
