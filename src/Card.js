import React from 'react';
import './Card.css';

export default props => {
  const { title, description, imgSrc, phone, city } = props.ad;
  return (
    <div className="Card">
      <div className="Card-container">
        <h2>{title}</h2>
        {description && <p className="Card-description">{description}</p>}
        {imgSrc && <img className="Card-image" src={imgSrc} alt={title} />}
        <p>Телефон: {phone}</p>
        {city && <p>Город: {city}</p>}
      </div>
      <button onClick={props.onDelete} className="button">
        Удалить
      </button>
    </div>
  );
};
