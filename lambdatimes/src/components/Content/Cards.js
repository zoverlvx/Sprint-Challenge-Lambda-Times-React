import React from 'react';
import PropTypes from "prop-types";
import Card from './Card';

const Cards = props => {
  return (
    <div className="cards-container">
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
		{props.cards.map((card, i) => <Card data={card} key={i}/>)}
    </div>
  )
}

Cards.propTypes = {
	cards: PropTypes.arrayOf(
		PropTypes.shape({
			headline: PropTypes.string,
			author: PropTypes.string,
			img: PropTypes.string,
			tab: PropTypes.string
		})
	)
}

// Make sure you include prop types for all of your incoming props

export default Cards;
