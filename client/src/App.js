import React, { Component } from 'react'
import axios from 'axios'

import './App.css';
import PlayerList from './components/player-list';

export default class App extends Component {

  constructor() {
    super();

    this.state = {
      players: []
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/api/players`).then(res => this.setState({ players: res.data })).catch(err => err)
  }


  render() {

    return (
      <div>
        <h1>Women's World Cup players ranked by search interest from Google Trends</h1>
        <h3>June-July 2019</h3>
        <PlayerList players={this.state.players} />
      </div>
    )
  }
}
