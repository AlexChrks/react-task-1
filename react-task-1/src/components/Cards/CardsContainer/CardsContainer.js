import React, { useState, useEffect } from 'react';
import { apiCall } from '../../../api/mockedApi.js';
import { Card } from '../Card/index.js';
import { CardsCreationForm } from '../CardsCreationForm/index.js';

import styles from './CardsContainer.module.scss';

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

export function CardsContainer() {

  const [state, setState] = useState({ cards: [] });
  const [newCard, setNewCard] = useState(initialState);
  
  useEffect(() => {
    apiCall().then((data) => {
      setState({ cards: data });
    });
  }, []);

  function deleteCard(id) {
    const filtered = state.cards.filter(el => el.id !== id);
    setState({ cards: filtered });
  }

  function newCardValidation () {
    const reduced = Object.entries(newCard).reduce((acc, cur) => {
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

    setNewCard(reduced);
  }

  function handleSubmit(event) {

    event.preventDefault();

    newCardValidation();

    const children = event.target.children;

    for (let i = 1; i < children.length - 1; i++) {
      if (!children[i].value) {
        children[i].focus();
        return
      }
    }
    
    setState({
      cards: [
        ...state.cards,
      {
        title: newCard.title.value,
        type: newCard.type.value,
        imageUrl: newCard.imageUrl.value,
        price: newCard.price.value,
        country: newCard.country.value,
      }
    ]});
    
    setNewCard(initialState);
  }

  function handleChange(event) {
    const { target } = event;

    setNewCard({
      ...newCard,
      [target.name]: { ...newCard[target.name], value: target.value, hasError: false },
    });
  }

  function handleBlur (event) {
    const { target } = event;

    setNewCard({
      ...newCard,
      [target.name]: { ...newCard[target.name], hasError: !target.value },
    });
  }
  const { cards } = state;

  return (
    <div className={styles.container}>
      { !cards.length &&
        <div className={styles.noCardsNotification}>No cards yet</div>
      }
      { cards.map(card => (
        <Card
          key={card.id}
          cardData={card}
          deleteCard={() => { deleteCard(card.id) }} />
      ))}
      <CardsCreationForm 
      handleSubmit={handleSubmit} 
      handleChange={handleChange} 
      handleBlur={handleBlur}
      newCard={newCard} 
      key={newCard} 
      />
    </div>
  );

}
