import React from 'react';
import Test from './Test';

function Subtitle() {
  return (
    <h2>written by Choieastsea.</h2>
  );
}
class Subject extends React.Component{
  render() {
    return (
      <h3>Subject: IT</h3>
    );
  }
}
function App() {
  return (
    <div>
      <Test />
      <Subject />
      <Subtitle />
      Hello React!
    </div>
  );
}

export default App;

