
const initialState = {
  cards: {
    Emrakul: { id: 0, name: 'Emrakul, the Promised End', price: 22, image: '../client/images/emrakul.jpeg'},
    Kozilek: { id: 1, name: 'Kozilek, the Great Distortion', price: 4.49, image: '../client/images/kozilek.jpeg'},
    Ulamog: { id: 2, name: 'Ulamog, the Ceaseless Hunger', price: 12.50, image: '../client/images/ulamog.jpeg'},
    Bob: { id: 3, name: 'Dark Confidant', price: 41.29, image: '../client/images/bob.jpeg'}
  },
  inventory: [],
  bank: 1000
}

module.exports = initialState
