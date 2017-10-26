import React from 'react';
import './AdEditor.css';

const citiesMock = [
  'Москва',
  'Санкт-Петербург',
  'Новосибирск',
  'Екатеринбург',
  'Казань',
  'Владивосток'
];

class AdEditor extends React.Component {
  state = {
    title: '',
    description: '',
    phone: '',
    phoneIncorrect: false,
    city: undefined,
    imgSrc: undefined
  };

  onTitleChange = e => this.setState({ title: e.target.value });
  onDescriptionChange = e => this.setState({ description: e.target.value });
  onCityChange = e => this.setState({ city: e.target.value });
  onPhoneChange = e => {
    const inputValue = e.target.value;
    if (/\+7{0,1}[0-9]{0,11}$/.test(inputValue.replace(/ /g, ''))) {
      this.setState({ phone: inputValue });
    }
  };

  onImageUpload = uploadEvent => {
    const input = uploadEvent.target;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = e => this.setState({ imgSrc: e.target.result });
      reader.readAsDataURL(input.files[0]);
    }
  };

  render() {
    return (
      <div className="AdEditor">
        <input
          value={this.state.title}
          onChange={this.onTitleChange}
          className="AdEditor-title"
          type="text"
          maxLength="100"
          placeholder="Название"
        />
        <textarea
          value={this.state.description}
          onChange={this.onDescriptionChange}
          className="AdEditor-description"
          maxLength="300"
          placeholder="Описание"
        />
        <div>
          <input
            onChange={this.onPhoneChange}
            value={this.state.phone}
            class="AdEditor-phoneInput"
            type="tel"
            placeholder="Контактный телефон"
          />
          <p class="AdEditor-phoneFormat">В формате +7 xxx xxx xx xx</p>
        </div>
        <select
          value={this.state.city}
          onChange={this.onCityChange}
          className="AdEditor-select"
        >
          <option disabled selected={this.state.city === undefined}>
            Город
          </option>
          {citiesMock.map((city, index) => (
            <option value={index} key={city}>
              {city}
            </option>
          ))}
        </select>
        {this.state.imgSrc && (
          <img src={this.state.imgSrc} className="AdEditor-imagePreview" />
        )}
        <label>
          <span className="button">Загрузить фото</span>
          <input
            onChange={this.onImageUpload}
            className="AdEditor-fileInput"
            type="file"
          />
        </label>
        <button className="button">Добавить объявление</button>
      </div>
    );
  }
}

export default AdEditor;
