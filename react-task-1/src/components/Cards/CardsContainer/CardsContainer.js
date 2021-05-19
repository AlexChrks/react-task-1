import React, { useEffect, useCallback } from 'react';
import { apiCall } from '../../../api/mockedApi.js';
import { Card } from '../Card/index.js';
import { CardsCreationForm } from '../CardsCreationForm/index.js';

import styles from './CardsContainer.module.scss';
import { useSelector, useDispatch } from 'react-redux';

import { loadCards, deleteCurrentCard, submitCard, loadCardsAsync } from '../../../store/actions/cardsActions';
import { setNewCard, validateNewCard, rewriteNewCard } from '../../../store/actions/newCardActions';

export function CardsContainer() {

  const cards = useSelector((state) => state.cardsReducer.cards);
  const newCard = useSelector((state) => state.newCardReducer);

  const dispatchAction = useDispatch();
  
  useEffect(() => {
    loadCardsAsync()(dispatchAction);
  }, []);

  
  const deleteCard = useCallback((id) => {
    dispatchAction(deleteCurrentCard(id));
  }, [dispatchAction]);

  function newCardValidation () {
    dispatchAction(validateNewCard())
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

    const newCardToSubmit = {
      title: newCard.title.value,
      type: newCard.type.value,
      imageUrl: newCard.imageUrl.value,
      price: newCard.price.value,
      country: newCard.country.value,
      id: `${newCard.title}${cards.length + 1}`
    }

    dispatchAction(submitCard(newCardToSubmit, cards));

    dispatchAction(rewriteNewCard());
  }

  function handleChange(event) {
    const { target } = event;

    dispatchAction(setNewCard({
      ...newCard,
      [target.name]: { ...newCard[target.name], value: target.value, hasError: false },
      }));
  }

  function handleBlur (event) {
    const { target } = event;

    dispatchAction(setNewCard({
      ...newCard,
      [target.name]: { ...newCard[target.name], hasError: !target.value },
    }));
  }

  return (
    <div className={styles.container}>
      { !cards.length &&
        <div className={styles.noCardsNotification}>No cards yet</div>
      }
      { cards.map(card => (
        <Card
          key={card.id}
          cardData={card}
          deleteCard={() => { deleteCard(card.id) }}         
          />
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
