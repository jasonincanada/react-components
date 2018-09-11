import React, { Component } from 'react';
import './App.css';
import PeopleProportion from './components/PeopleProportion'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My React Components</h1>
        </header>

        <br />

        <div className="component">
          <h2>PeopleProportion</h2>

          <p>
            Visualize a percentage of people in a group.  Do you get a ton of retweets?  Visualize
            the proportion of your total follower count that retweets you, in order to get a more
            accurate perspective of engagement levels.
          </p>

          <div className="component-demo">
            <PeopleProportion size="750" possible="437600" actual="178656" />
          </div>

          <div className="component-properties">
            <tt>&lt;PeopleProportion size="750" possible="437600" actual="178656" /&gt;</tt>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
