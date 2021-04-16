import React, { Component } from 'react';
import { apiCall } from '../../../api/mockedApi.js';
import { Card } from '../Card/index.js'
import styles from './CardsContainer.module.scss';

export class CardsContainer extends Component {

  state = {
    cards: []
  }

  componentDidMount() {
    apiCall().then((data) => {
      this.setState({ cards: data });
    });
  }

  render() {
    const { cards } = this.state;

    if (!cards.length) {
      return (
        <div className={styles.noCardsNotification}>No cards yet</div>
      );
    }
    return (
      <div className={styles.container}>
        { cards.map((card) => <Card key={card.id} cardData={card} />)}
      </div>
    );
  }
}
