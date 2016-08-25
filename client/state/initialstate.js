
const initialState = {
  cards: {
    'Emrakul, the Promised End': { id: 0, name: 'Emrakul, the Promised End', price: 22, inInventory: false, image: '../client/images/emrakul.jpeg'},
    'Kozilek, the Great Distortion': { id: 1, name: 'Kozilek, the Great Distortion', price: 4.49, inInventory: false, image: '../client/images/kozilek.jpeg'},
    'Ulamog, the Ceaseless Hunger': { id: 2, name: 'Ulamog, the Ceaseless Hunger', price: 12.50, inInventory: false, image: '../client/images/ulamog.jpeg'},
    'Dark Confidant': { id: 3, name: 'Dark Confidant', price: 41.29, inInventory: false, image: '../client/images/bob.jpeg'}
  },
  inventory: [],
  bank: 1000
}

module.exports = initialState
