const buyCard = function (cardId, price) {
  return {
    type: 'BUY_CARD',
    payload: {
      cardId: cardId,
      price: price
    }
  }
}

const sellCard = function (cardId, price) {
  return { type: 'SELL_CARD',
    payload: {
      cardId: cardId,
      price: price
    }
  }
}

module.exports = {
  buyCard,
  sellCard
}
