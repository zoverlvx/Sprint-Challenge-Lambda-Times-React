import React from 'react';
import PropTypes from "prop-types";

const Card = ({data}) => {
  return (
    <div className="card">
      <div className="headline">{data.headline}</div>
      <div className="author">
        <div className="img-container">
          <img alt={data.tab} src={data.img} />
        </div>
        <span>By {data.author}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.
Card.propTypes = {
	data: PropTypes.shape({
		author: PropTypes.string,
		headline: PropTypes.string,
		img: PropTypes.string,
		tab: PropTypes.string
	})	
}

export default Card;
