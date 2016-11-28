import React from 'react'

export default React.createClass({
  render() {
    return (
      <div className="formBoxWrapper" id="indexWrapper">
  			 <form method="post" id="inputForm">
  				 <label htmlFor="name"> What's your name? </label>
  				 <br/>
  				 <input type="text" name="name" max="15" id="inputField"/>
  				 <br/>
  				 <label htmlFor="name"> What's your role? </label>
  				 <br/>
  				 <select name="role" id="selectField">
  					 <option className=""> Fighter </option>
  					 <option className=""> Mage </option>
  					 <option className=""> Assassin </option>
  					 <option className=""> Support </option>
  					 <option className=""> Marksman </option>
  					 <option className=""> Tank </option>
  				 </select>
  				 <br/>
  				 <button type="submit" id="submit"> Find my Champ </button>
  			 </form>
  		</div>
    )
  }
})
