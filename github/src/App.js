import React, { Component } from 'react'
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    userData: [],
    followerData: [],
    buttonClicked: false
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/joshuasamaniego')
    .then(res => {
      this.setState({
        userData: res.data,
      })
    })
    .catch(err => {
      console.log("Error with axios call", err);
    })
    axios.get('https://api.github.com/users/joshuasamaniego/followers')
    .then(res => {
      this.setState({
        followerData: res.data
      })
    })
    .catch(err => {
      console.log("Error with axios call", err);
    })
  }

  handleClick = (e) => {
    console.log(e.target);
    this.setState({
      buttonClicked: true
    })
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.buttonClicked !== prevState.buttonClicked) {
  //     console.log("component has re-rendered, buttonClicked state has been updated");
  //   }
  // }

  render() {
    console.log(this.state.followerData);
    return (
      <div className="App">
        <div className="user-card-container">
          <h1>Github User Card App</h1>
          <img className="user-img" src={this.state.userData.avatar_url} alt="profile"/>
          <h3>{this.state.userData.name}</h3>
          <p>{this.state.userData.bio}</p>
          <a href={this.state.userData.url}>Follow Me On GitHub!</a>
          <button onClick={this.handleClick}>See My Followers</button>
        </div>
        <div className="followers-container">
          {this.state.buttonClicked 
          ? 
            this.state.followerData.map(follower => {
              return(
                <div className="follower-card">
                  <img src={follower.avatar_url} alt="follower-profile"/>
                  <h5>{follower.login}</h5>
                </div>
              )
            }) 
          : null}
        </div>
      </div>
    )
  }
}

export default App;

