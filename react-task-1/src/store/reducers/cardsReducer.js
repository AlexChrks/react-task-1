const initialState = { cards: [] };

export function cardsReducer(state = initialState, action) {

  switch(action.type) {
    case 'LOAD_CARDS_FROM_API':
      return {
        cards: action.payload
      }
    case 'DELETE_CARD': {
      const stateCopy = [...state.cards];
      const filtered = stateCopy.filter(el => el.id !== action.payload.id);
      return {
        cards: filtered
      }
    }
    case 'SUBMIT_CARD': {
      const stateCopy = [...state.cards];
      return {
        cards: [
          ...stateCopy,
          action.payload.newCardToSubmit
        ]
      }
    }  
      default:
      return state;
  }
}
