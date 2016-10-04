import React from 'react'
import Header from './Header.jsx'
import Formbox from './FormBox.jsx'
import Links from './Links.jsx'

export default React.createClass({
  render() {
    return (
      <div className="mainWrapper" id="main">
        <Header/>
        <Formbox/>
        <Links/>
      </div>
    )
  }
})
