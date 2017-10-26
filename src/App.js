import React, { Component } from 'react';
import AdEditor from './AdEditor';
import Card from './Card';
import './App.css';

class App extends Component {
  state = {
    ads: [1, 2, 3]
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Aveto</h1>
        </header>
        <main className="App-container">
          <AdEditor />
          {this.state.ads.map(ad => <Card />)}
        </main>
      </div>
    );
  }
}

export default App;
