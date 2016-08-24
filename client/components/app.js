import React from 'react'
import { connect } from 'react-redux'
import actionCreators from '../action-creators/action'
const _ = require('lodash')


class App extends React.Component {
   constructor(props) {
    super(props)
      this.buyClick = this.buyClick.bind(this)
      this.sellClick = this.sellClick.bind(this)
  }

  buyClick (cardId, price) {
    this.props.buyCard(cardId, price)
  }

  sellClick (cardId, price) {
    this.props.sellCard(cardId, price)
  }

  render() {
    console.log('these are the props inside App:', this.props)
    const { cards } = this.props
    console.log('These are the cards ', { cards });
    return (
      <div>
        <div>
          <h1>Buy Cards</h1>
      {
        _.map(cards, card => {
          return (
            <button
              onClick={() => {
                this.buyClick(card.name, card.price)
              }}>{card.name}</button>
          )
        })
      }
        </div>
        <div>
          <h1>Sell Cards</h1>
            {
            _.map(cards, card => {
              return (
                <button
                  onClick={() => {
                    this.sellClick(card.name, card.price)
                  }}>{card.name}</button>
                )
              })
            }
        </div>
        <h1>Your current bank is</h1>
        {this.props.bank}
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
