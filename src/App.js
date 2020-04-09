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
function App() {
  return (
    <div>
      <Test />
      <Subject subname="IT" />
      <Subject subname="Math" />
      <Subtitle name="choieastsea" />
      Hello React!
    </div>
  );
}

export default App;

