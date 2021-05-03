import React, { useState, useEffect } from 'react';
import { apiCall } from '../../../api/mockedApi.js';
import { Card } from '../Card/index.js';
import { CardsCreationForm } from '../CardsCreationForm/index.js';

import styles from './CardsContainer.module.scss';

export function CardsContainer() {

  const [state, setState] = useState({ cards: [] });
  const [newCard, setNewCard] = useState({});

  useEffect(() => {
    apiCall().then((data) => {
      setState({ cards: data });
    });
  }, []);

  function deleteCard(id) {
    const filtered = state.cards.filter(el => el.id !== id);
    setState({ cards: filtered });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const children = event.target.children;
    for (let i = 1; i < children.length - 1; i++) {
      if (!children[i].value) {
        children[i].focus();
        return
      }
    }
    setState({ cards: [...state.cards, newCard] });
  }

  function handleChange(event) {
    setNewCard({
      ...newCard,
      [event.target.name]: event.target.value,
      id: state.cards.length + 1,
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
      newCard={newCard} 
      key={newCard} 
      />
    </div>
  );

}
