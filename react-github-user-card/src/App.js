import React, { Component } from 'react';
// import Particles from "react-particles-js";
import "./App.css";

class App extends Component {
  state = {
    user: [],
    followers: []
  }

  componentDidMount() {
    fetch('https://api.github.com/users/joshuasamaniego')
    .then(res => res.json())
    .then(data => {
      this.setState({
        user: data
      })
    })
    .catch(err => {
      console.log("Something went wrong" + err);
    })

    fetch('https://api.github.com/users/joshuasamaniego/followers')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      this.setState({
        followers: data
      });
    })
    .catch(err => {
      console.log("Something went wrong" + err);
    })
  }

  render() {
    return (
      <div className="app__container">
        <h1>My Github UserCard:</h1>
        <h3>{this.state.user.name}</h3>
        <img src={this.state.user.avatar_url} alt={`${this.state.user.name}'s profile`}/>
        <button>Get User's Followers</button>
      </div>
    )
  }
}

export default App;
