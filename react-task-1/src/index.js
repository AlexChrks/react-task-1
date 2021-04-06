import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/App/index.js';
import './index.scss';

const store = {
  user: {
    firstName: 'Alex',
    lastName: 'Cherkas'
  },
  avatar: {
    image: 'https://media.istockphoto.com/photos/portrait-of-handsome-latino-african-man-picture-id1007763808?k=6&m=1007763808&s=612x612&w=0&h=Js1VDBulbaNw_CF7fghP_nhUPCC-DQTqb7Wym1CdTOI=',
    alt: 'black man'
  }
};

ReactDOM.render(
    <App store={ store } />,
  document.getElementById('root')
);
