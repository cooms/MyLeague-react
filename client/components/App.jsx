import React from 'react'
import Header from './Header.jsx'
import Formbox from './Formbox.jsx'

export default React.createClass({
  render() {
    return (
      <div className="mainWrapper" id="main">
        <Header/>
        <Formbox/>
      </div>
    )
  }
})
