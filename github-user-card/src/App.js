import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import CardContainer from './components/CardContainer';

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      users: ['fake user']
    };
  }

  componentDidMount() {
    fetch(`https://api.github.com/users/fskeen`)
      .then(res => res.json())
      .then(res => {
        this.setState({users: [res]})
      })
      .catch(error => {
        console.log("Error getting data from server: ", error)
      })
  }

  render () {
   return (
    <div className="App">
      <Header />
      <CardContainer users={this.state.users}/>
    </div>
  ); 
  }
}

export default App;
