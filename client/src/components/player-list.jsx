import React, { Component } from "react";
import styled from "styled-components";

import PlayerCard from "./player-card";

const ContentCon = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default class PlayerList extends Component {
  render() {
    return (
      <ContentCon>
        {this.props.players.map(player => (
          <PlayerCard player={player} key={player.id} />
        ))}
      </ContentCon>
    );
  }
}
