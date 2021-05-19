import { apiCall } from '../../api/mockedApi';

const LOAD_CARDS_FROM_API = 'LOAD_CARDS_FROM_API';
const DELETE_CARD = 'DELETE_CARD';
const SUBMIT_CARD = 'SUBMIT_CARD';

export function loadCards(data) {
  return {
    type: LOAD_CARDS_FROM_API,
    payload: data
  }
}

export function loadCardsAsync() {
  return (dispatch) => {
    apiCall().then((data) => {
      dispatch(loadCards(data));
    })
  };
}

export function deleteCurrentCard(id) {
  return {
    type: DELETE_CARD,
    payload: { id } 
  }
}

export function submitCard(newCardToSubmit) {
  return {
    type: SUBMIT_CARD,
    payload: { newCardToSubmit }
  }
}
