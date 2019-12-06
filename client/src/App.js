import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import './App.css';

import PlayerList from './components/player-list'
import DarkModeToggle from './components/darkModeToggle'
import '../src/css/dark.css'

const AppCon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  max-width: 750px;

  .appTitle {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    .titleBottom {
      display: flex;
      justify-content: center;
    }
  }
`;

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      players: [],
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/api/players`)
      .then(res => this.setState({ players: res.data }))
      .catch(err => err)
  }


  render() {

    return (
      <AppCon>
        <div className="appTitle">
          <h1>Women's World Cup players ranked by search interest from Google Trends</h1>
          <div className="titleBottom">
            <h3>June-July 2019</h3>
            <DarkModeToggle />
          </div>
        </div>
        <PlayerList players={this.state.players} />

      </AppCon>
    )
  }
}
