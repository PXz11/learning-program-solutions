import React from 'react';
import './CountPeople.css'

class CountPeople extends React.Component {

constructor() {
  super();
  this.state = {
    entrycount: 0,
    exitcount: 0,
    c: 0
  };
}

updateEntry() {
  this.setState((prevState, props) => {
    return { entrycount: prevState.entrycount + 1 };
  });
}

updateExit() {
  this.setState((prevState, props) => {
    return { exitcount: prevState.exitcount + 1 };
  });
}
render() {
  return (
    <div className="container">
      <div className="counter-box">
        <button className="btn" onClick={() => this.updateEntry()}>Login</button>
        <span className="text">{this.state.entrycount} People Entered ! ! ! </span>
      </div>
      
      <div className="counter-box">
        <button className="btn" onClick={() => this.updateExit()}>Exit</button>
        <span className="text">{this.state.exitcount} People Exited ! ! !</span>
      </div>
      </div>
  );
}
}

export default CountPeople;