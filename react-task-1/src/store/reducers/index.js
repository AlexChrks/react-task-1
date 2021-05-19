import { combineReducers } from 'redux';

import { cardsReducer } from './cardsReducer';
import { newCardReducer } from './newCardReducer';
import { userInfoReducer } from './userInfoReducer';
import { authReducer } from './authReducer';

export default combineReducers({
  cardsReducer,
  newCardReducer,
  userInfoReducer,
  authReducer
})

