import React from 'react';

import { Header } from '../Header/index.js';
import { Main } from '../Main/index.js';
import { Footer } from '../Footer/index.js';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import reducer from '../../store/reducers/index'

import styles from './App.module.scss';


const store = createStore(reducer, applyMiddleware(thunk));

export function App() {
  return (
    <Provider store={store}>
      <div className={styles.app}>
        <Header />
        <Main />
        <Footer />
      </div>
    </Provider>
  );
}
