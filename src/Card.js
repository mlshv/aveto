import React from 'react';
import './Card.css';

export default props => (
  <div className="Card">
    <div className="Card-container">
      <h2>Имя карточки</h2>
      <p>Описание</p>
      <img className="Card-image" src="https://codepo8.github.io/canvas-images-and-pixels/img/horse.png" />
    </div>
    <button className="button">Удалить</button>
  </div>
);
