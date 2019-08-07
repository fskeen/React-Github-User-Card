import React from 'react';
import './App.css';

import Header from './components/Header';
import CardContainer from './components/CardContainer';

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      users: [''],
      finalQuery: 'fskeen',
      followers: [],
      following: []
    };
  }

  fetchData = () => {
    fetch(`https://api.github.com/users/${this.state.finalQuery}`)
      .then(res => res.json())
      .then(res => {
        this.setState({users: [res]})
      })
      .catch(error => {
        console.log("Error getting users from server: ", error)
      })

    fetch(`https://api.github.com/users/${this.state.finalQuery}/followers`)
      .then(res => res.json())
      .then(res => {
      this.setState({followers: res})
    })
    .catch(error => {
      console.log("Error getting followers from server: ", error)
    })

    fetch(`https://api.github.com/users/${this.state.finalQuery}/following`)
      .then(res => res.json())
      .then(res => {
      this.setState({following: res})
    })
    .catch(error => {
      console.log("Error getting following from server: ", error)
    })
  }

  componentDidMount() {
    this.fetchData()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.finalQuery !== this.state.finalQuery) {
      this.fetchData()
    } else {
      return prevState
    }

  }

  setSearch = (query) => {
    this.setState({finalQuery: query})
    console.log("state in setSearch: ", this.state)
    console.log("query passed to function: ", query)
  }

  render () {
    console.log(this.state)
    console.log("current user", this.state.finalQuery)
   return (
    <div className="App">
      <Header setSearch={this.setSearch}/>
      <CardContainer
        users={this.state.users}
        followers={this.state.followers}
        following={this.state.following}/>
    </div>
  ); 
  }
}

export default App;
