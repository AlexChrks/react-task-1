import React, { useState, useEffect } from 'react';
import { apiCall } from '../../../api/mockedApi.js';
import { Card } from '../Card/index.js';
import { CardsCreationForm } from '../CardsCreationForm/index.js';

import styles from './CardsContainer.module.scss';

export function CardsContainer() {

  const [state, setState] = useState({ cards: [] });

  useEffect(() => {
    apiCall().then((data) => {
      setState({ cards: data });
    });
  }, []);


  function deleteEvent(id) {
    const copyCardsArr = Object.assign([], state.cards);
    const filtered = copyCardsArr.filter((el) => !(el.id === id));
    setState({cards: filtered});
  }

  function handleSubmit (e) {
    e.preventDefault();

    const newObj = {
      title: e.target[0].value,
      type: e.target[1].value,
      imageUrl: e.target[2].value,
      price: e.target[3].value,
      country: e.target[4].value,
      id: state.cards.length + 1,
    }

    const stateCopy = Object.assign([], state.cards)
    stateCopy.push(newObj);
    setState({cards: stateCopy});
  }

  const { cards } = state;

  if (!cards.length) {
    return (
      <div className={styles.noCardsNotification}>No cards yet</div>
    );
  }
  return (
    <div className={styles.container}>
      { cards.map((card) => {
        return (
          <Card 
            key={card.id} 
            cardData={card} 
            deleteEvent={() => {deleteEvent(card.id)}} /> 
        )
      })}
      <CardsCreationForm handleSubmit={handleSubmit}/>
    </div>
  );

}
