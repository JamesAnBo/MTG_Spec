import React from 'react'
const _ = require('lodash')

class Inventory extends React.Component {

  render (){
    console.log(this.props);
    return (
      <div>
        <h3>Your current invetory is:</h3>
        <ul>
          {
            _.map(this.props.inventory, (item) => {
              return(
              <li>{item}</li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

module.exports = Inventory
