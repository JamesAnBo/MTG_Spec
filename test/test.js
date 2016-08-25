const test = require('tape')
const reducer = require('../client/reducers/reducers')
const initialState = require('../client/state/initialstate')
const actionCreators = require('../client/action-creators/action')
const buyCard = actionCreators.buyCard
const sellCard = actionCreators.sellCard

console.log('reducers', reducer, initialState)

//arrange
var expectedState = {
  cards: {
    'Emrakul, the Promised End': { id: 0, name: 'Emrakul, the Promised End', price: 22, inInventory: false, image: '../client/images/emrakul.jpeg'},
    'Kozilek, the Great Distortion': { id: 1, name: 'Kozilek, the Great Distortion', price: 4.49, inInventory: false, image: '../client/images/kozilek.jpeg'},
    'Ulamog, the Ceaseless Hunger': { id: 2, name: 'Ulamog, the Ceaseless Hunger', price: 12.50, inInventory: false, image: '../client/images/ulamog.jpeg'},
    'Dark Confidant': { id: 3, name: 'Dark Confidant', price: 41.29, inInventory: false, image: '../client/images/bob.jpeg'}
  },
  inventory: ['Emrakul, the Promised End'],
  bank: 978
}

test('buyCard adds the card to the inventory and removes its price from the bank', t => {
  const actual = reducer(initialState, buyCard('Emrakul, the Promised End', 22))
  console.log('actual state ', actual)
  t.deepEqual(actual, expectedState)

  t.end()


})

//arrange
var expectedState1 = {
  cards: {
    'Emrakul, the Promised End': { id: 0, name: 'Emrakul, the Promised End', price: 22, inInventory: false, image: '../client/images/emrakul.jpeg'},
    'Kozilek, the Great Distortion': { id: 1, name: 'Kozilek, the Great Distortion', price: 4.49, inInventory: false, image: '../client/images/kozilek.jpeg'},
    'Ulamog, the Ceaseless Hunger': { id: 2, name: 'Ulamog, the Ceaseless Hunger', price: 12.50, inInventory: false, image: '../client/images/ulamog.jpeg'},
    'Dark Confidant': { id: 3, name: 'Dark Confidant', price: 41.29, inInventory: false, image: '../client/images/bob.jpeg'}
  },
  inventory: [],
  bank: 1000
}

var beforeState = {
  cards: {
    'Emrakul, the Promised End': { id: 0, name: 'Emrakul, the Promised End', price: 22, inInventory: false, image: '../client/images/emrakul.jpeg'},
    'Kozilek, the Great Distortion': { id: 1, name: 'Kozilek, the Great Distortion', price: 4.49, inInventory: false, image: '../client/images/kozilek.jpeg'},
    'Ulamog, the Ceaseless Hunger': { id: 2, name: 'Ulamog, the Ceaseless Hunger', price: 12.50, inInventory: false, image: '../client/images/ulamog.jpeg'},
    'Dark Confidant': { id: 3, name: 'Dark Confidant', price: 41.29, inInventory: false, image: '../client/images/bob.jpeg'}
  },
  inventory: ['Emrakul, the Promised End'],
  bank: 978
}

test('sellCard removes the card from the invetory and adds the price back to the bank', t => {
  const actual = reducer(beforeState, sellCard('Emrakul, the Promised End', 22))
  console.log('actual state ', actual)
  t.deepEqual(expectedState1, actual)

  t.end()


})
