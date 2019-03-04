import React, { Component } from 'react';
import './App.css';
import PeopleProportion from './components/PeopleProportion'
import PartridgePuzzle from './components/PartridgePuzzle'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My React Components</h1>
        </header>

        <br />

        <div className="component">
          <h2>PartridgePuzzle</h2>

          <p>
            Render a particular <a href="http://www.mathpuzzle.com/partridge.html">Partridge Puzzle</a>. The one shown below is taken from Donald Knuth's Art of Computer Programming (figure 62). The data is currently hard-coded into the component source, but it could be drawn from a database of all possible squares, of which there are thousands (for 36x36 squares).
          </p>

          <p>
            I'm brainstorming a Battleship-style game where you have to uncover your opponent's full square in fewer turns than they uncover yours, using a certain number of available probes and using deduction smartly.
          </p>

          <div className="component-demo">
            <PartridgePuzzle scale="15" puzzleId="0" />
          </div>

          <div className="component-properties">
            <tt>&lt;PartridgePuzzle scale="15" puzzleId="0" /&gt;</tt>
          </div>
        </div>


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
