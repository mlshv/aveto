import React from 'react';
import './AdEditor.css';

class AdEditor extends React.Component {
  render() {
    return (
      <div className="AdEditor">
        <input
          className="AdEditor-title"
          type="text"
          maxLength="100"
          placeholder="Название"
        />
        <textarea
          className="AdEditor-description"
          maxLength="300"
          placeholder="Описание"
        />
        <label>
          <span className="button">Загрузить фото</span>
          <input className="AdEditor-fileInput" type="file" />
        </label>
        <button className="button">Добавить объявление</button>
      </div>
    );
  }
}

export default AdEditor;
