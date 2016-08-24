import React from 'react'
const _ = require('lodash')

const CardButton = (props) => {
  const {card, clickHandler} = props

  return (
    <button
      onClick={ () => { clickHandler(card.name, card.price) }}
    >{card.name}</button>
  )
}

class CardShop extends React.Component {

  constructor(props) {
    super(props)
    this.buyClick = this.props.buyCard.bind(this)
    this.sellClick = this.props.sellCard.bind(this)
  }

  render (){
    console.log(this.props);
    return (
      <div>
        {
          _.map(cards, card => (<CardButton key={card.id} card={card} clickHandler={this.buyClick} />))
        }
        {
          _.map(cards, card => (<CardButton key={card.id} card={card} clickHandler={this.sellClick} />))
        }
      </div>
    )
  }
}

module.exports = CardShop
