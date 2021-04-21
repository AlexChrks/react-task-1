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


  function deleteEvent(id) {
    const filtered = state.cards.filter(el => el.id !== id);
    setState({ cards: filtered });
  }

  function handleSubmit(event) {
    event.preventDefault();
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
          deleteEvent={() => { deleteEvent(card.id) }} />
      ))}
      <CardsCreationForm handleSubmit={handleSubmit} handleChange={handleChange} key={newCard}/>
    </div>
  );

}
