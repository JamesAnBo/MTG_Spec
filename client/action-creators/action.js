const buyCard = function (cardId, price, inInventory) {
  return {
    type: 'BUY_CARD',
    payload: {
      cardId: cardId,
      price: price,
      inInventory: inInventory
    }
  }
}

const sellCard = function (cardId, price, inInventory) {
  return { type: 'SELL_CARD',
    payload: {
      cardId: cardId,
      price: price,
      inInventory: inInventory
    }
  }
}

module.exports = {
  buyCard,
  sellCard
}
