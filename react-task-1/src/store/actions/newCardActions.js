const SET_NEW_CARD_ON_HANDLE_CHANGE = 'SET_NEW_CARD_ON_HANDLE_CHANGE';
const VALIDATE_NEW_CARD = 'VALIDATE_NEW_CARD';
const REWRITE_NEW_CARD = 'REWRITE_NEW_CARD';

export function setNewCard(changedNewCard, cards) {
  return {
    type: SET_NEW_CARD_ON_HANDLE_CHANGE,
    payload: {changedNewCard, cards}
  }
}

export function validateNewCard() {
  return {
    type: VALIDATE_NEW_CARD
  }
}

export function rewriteNewCard() {
  return {
    type: REWRITE_NEW_CARD
  }
}
