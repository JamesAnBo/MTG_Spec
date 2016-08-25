const combineReducers = require('redux').combineReducers
const initialState = require('../state/initialstate')

const cardsReducer = (state, action) => {
  const newState = Object.assign([], state)
  switch (action.type) {
    case 'BUY_CARD':
      console.log('This is the action payload ', action.payload);
      newState.inInventory = true
      console.log('This is the new state in cardsReducer ',newState);
      return newState
    case 'SELL_CARD':
      if (newState.inInventory) {
        newState.inInventory = false
      }
      return newState

    default:
      return state
  }
}

const inventoryReducer = (state, action) => {
  const newState = Object.assign([], state)

  switch (action.type) {
    case 'BUY_CARD':
      return [...state, action.payload.cardId]
    case 'SELL_CARD' :
      const itemIndex = state.indexOf(action.payload.cardId)
      if (itemIndex != -1){
        newState.splice(itemIndex, 1)
      }
    return newState
    default:
      return state
  }
}

const bankReducer = (state, action) => {
  switch (action.type) {
    case 'BUY_CARD':
      console.log('=====Removing money from the bank=====');
      return state - action.payload.price
    case 'SELL_CARD' :
      console.log('=====Adding money back to the bank=====');
        return state + action.payload.price
    default:
      return state
  }
}

module.exports = (state=initialState, action) => {
  return {
    cards: cardsReducer(state.cards, action),
    inventory: inventoryReducer(state.inventory, action),
    bank: bankReducer(state.bank, action)
  }
}
