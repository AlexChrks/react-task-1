const initialState = {
  title: {
    name: 'title',
    value: '',
    type: 'text',
    placeholder: 'Title',
    hasError: false,
    errorMessage: 'Title is required',
  },
  type: {
    name: 'type',
    value: '',
    type: 'text',
    placeholder: 'Type',
    hasError: false,
    errorMessage: 'Type is required',
  },
  imageUrl: {
    name: 'imageUrl',
    value: '',
    type: 'text',
    placeholder: 'Image Url',
    hasError: false,
    errorMessage: 'Url is required',
  },
  price: {
    name: 'price',
    value: '',
    type: 'number',
    placeholder: 'Price',
    hasError: false,
    errorMessage: 'Price is required',
  },
  country: {
    name: 'country',
    value: '',
    type: 'text',
    placeholder: 'Country',
    hasError: false,
    errorMessage: 'Country is required',
  },
}

export function newCardReducer(state = initialState, action) {

  switch(action.type) {
    case 'SET_NEW_CARD_ON_HANDLE_CHANGE':
      return action.payload.changedNewCard
      
    case 'VALIDATE_NEW_CARD':
      return Object.entries(state).reduce((acc, cur) => {
        if (!cur[1].value) {
          acc[cur[0]] = {
            ...cur[1],
            hasError: true,
          }
        } else {
          acc[cur[0]] = {
            ...cur[1],
          }
        }
        return acc;
      },{});

    case 'REWRITE_NEW_CARD':
      return initialState    
      default:
      return state;
  }
}