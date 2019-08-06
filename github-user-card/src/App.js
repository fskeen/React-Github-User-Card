import React from 'react';
import './App.css';

import Header from './components/Header';
import CardContainer from './components/CardContainer';

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      users: ['User is loading'],
      followers: [],
      following: []
    };
  }

  componentDidMount() {
    fetch(`https://api.github.com/users/fskeen`)
      .then(res => res.json())
      .then(res => {
        this.setState({users: [res]})
      })
      .catch(error => {
        console.log("Error getting users from server: ", error)
      })

    fetch(`https://api.github.com/users/fskeen/followers`)
      .then(res => res.json())
      .then(res => {
      this.setState({followers: res})
    })
    .catch(error => {
      console.log("Error getting followers from server: ", error)
    })

    fetch(`https://api.github.com/users/fskeen/following`)
      .then(res => res.json())
      .then(res => {
      this.setState({following: res})
    })
    .catch(error => {
      console.log("Error getting following from server: ", error)
    })
  }



  render () {
    console.log(this.state)
   return (
    <div className="App">
      <Header />
      <CardContainer
        users={this.state.users}
        followers={this.state.followers}
        following={this.state.following}/>
    </div>
  ); 
  }
}

export default App;
