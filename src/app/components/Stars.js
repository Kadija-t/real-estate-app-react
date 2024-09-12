import React from 'react';

const Stars = ({ rating }) => {
  const createStars = (rating) => {
    const stars = [];
    for (let index = 1; index <= 5; index++) {
      if (index <= rating) {
        stars.push(<i key={index} className="fa-solid fa-star filled"></i>);
      } else {
        stars.push(<i key={index} className="fa-solid fa-star empty"></i>);
      }
    }
    return stars;
  };

  return <div className="stars">{createStars(rating)}</div>;
};

export default Stars;
