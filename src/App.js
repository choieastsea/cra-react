import React from 'react';
import Test from './Test';

function Subtitle(property) {
  return (
    <h2>written by {property.name}.</h2>
  );
}
class Subject extends React.Component {
  render() {
    return (
      <h3>Subject: {this.props.subname} </h3>
    );
  }
}
class App extends React.Component {
  state = {
    score: 0
  };
  like = () => {
    this.setState(current => ({ score: current.score + 1 }));
    //this.state.score += 1;
    console.log(this.state.score);
  }

  dislike = () => {
    this.setState(current => ({ score: this.state.score - 1 }));
    //this.state.score -= 1;
    console.log(this.state.score);
  };
  render() {
    return (
      <div>
        <Test />
        <Subject subname="IT" />
        <Subject subname="Math" />
        <Subtitle name="choieastsea" />
        <button onClick={this.like}>Like!</button>
        <button onClick={this.dislike}>Dislike</button>
        <br />
        <span>like? {this.state.score}</span>
      </div>
    );
  };
}

export default App;

