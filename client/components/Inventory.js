import React from 'react'

class Inventory extends React.Component {

  render (){
    console.log(this.props);
    return (
      <div>
        <h3>Your current invetory is:</h3>
        {this.props.inventory}
      </div>
    )
  }
}

module.exports = Inventory
