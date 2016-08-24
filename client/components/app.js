import React from 'react'
import { connect } from 'react-redux'
import actionCreators from '../action-creators/action'
import Inventory from './Inventory'
import CardShop from './cardShop'
const _ = require('lodash')

const CardButton = (props) => {
  const {card, clickHandler} = props

  return (
    <button
      onClick={ () => { clickHandler(card.name, card.price) }}
    >{card.name}</button>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.buyClick = this.props.buyCard.bind(this)
    this.sellClick = this.props.sellCard.bind(this)
  }

  render() {
    const { cards } = this.props
    return (
      <div>
        <div>
          <h2>Buy Cards</h2>
          {
            _.map(cards, card => (<CardButton key={card.id} card={card} clickHandler={this.buyClick} />))
          }
        </div>
        <div>
          <h2>Sell Cards</h2>
          {
            _.map(cards, card => (<CardButton key={card.id} card={card} clickHandler={this.sellClick} />))
          }
        </div>
        <h2>Your current bank is</h2>
        {this.props.bank}
        <Inventory {...this.props} />
      </div>
    )
  }
}

module.exports = connect(
  (state) => state,
   (dispatch) => {
      return ({
        buyCard: (cardId, price) => {
          dispatch(actionCreators.buyCard(cardId, price))
        },
        sellCard: (cardId, price) => {
          dispatch(actionCreators.sellCard(cardId, price))
        }
      })
    }
)(App)
