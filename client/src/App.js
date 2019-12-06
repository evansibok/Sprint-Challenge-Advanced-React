import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

import './App.css';

import PlayerList from './components/player-list';
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

      .toggleCon {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-left: 1em;

        .dark-mode__toggle {
          background: none;
          border: 0.15em solid #222;
          border-radius: 50px;
          height: 24px;
          position: relative;
          width: 42px;

          .toggle {
            background: #222;
            border-radius: 50px;
            height: 19px;
            top: 2px;
            left: 3px;
            position: absolute;
            transition: 0.4s;
            width: 19px;
          }
        }
      }
    }
  }
`;

export default class App extends Component {

  constructor() {
    super();

    this.state = {
      players: [],
      darkMode: false,
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/api/players`).then(res => this.setState({ players: res.data })).catch(err => err)
  }

  componentDidUpdate() {
    this.state.darkMode
      ? document.querySelector("body").classList.add("dark-mode")
      : document.querySelector("body").classList.remove("dark-mode");
  }

  toggleMode = (evt) => {
    evt.preventDefault();
    this.setState({ darkMode: !this.state.darkMode })
  }


  render() {

    return (
      <AppCon>
        <div className="appTitle">
          <h1>Women's World Cup players ranked by search interest from Google Trends</h1>
          <div className="titleBottom">
            <h3>June-July 2019</h3>
            <div className="toggleCon">
              <div className="dark-mode__toggle" onClick={this.toggleMode}>
                <div className={this.state.darkMode ? "toggle toggled" : "toggle"} />
              </div>
            </div>
          </div>
        </div>
        <PlayerList players={this.state.players} />

      </AppCon>
    )
  }
}
