import React, { Component } from 'react';
import AdEditor from './AdEditor';
import Card from './Card';
import './App.css';

class App extends Component {
  state = {
    ads: []
  };

  componentDidMount() {
    const loadAds = () => {
      try {
        return JSON.parse(localStorage.getItem('ads'));
      } catch (ignored) {}
    };
    this.setState({ ads: loadAds() || [] });
  }

  componentDidUpdate() {
    localStorage.setItem('ads', JSON.stringify(this.state.ads));
  }

  handleAdSubmit = ad => {
    console.log('submitting', ad);
    this.setState(prevState => ({ ads: [ad, ...prevState.ads] }));
  };

  handleAdDelete = index => {
    console.log('index', index);
    this.setState(prevState => ({
      ads: [
        ...prevState.ads.slice(0, index),
        ...prevState.ads.slice(index + 1, prevState.ads.length)
      ]
    }));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Aveto</h1>
        </header>
        <main className="App-container">
          <AdEditor onSubmit={this.handleAdSubmit} />
          {this.state.ads.map((ad, index) => (
            <Card
              ad={ad}
              onDelete={() => this.handleAdDelete(index)}
              key={ad.timestamp}
            />
          ))}
        </main>
      </div>
    );
  }
}

export default App;
