import React from "react";
import styled from "styled-components";

const CardCon = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 200px;
  font-size: 0.8rem;
  margin: 1em;

  h3 {
    margin: 0.4em;
    padding: 0.6em;

    span {
      font-weight: 500;
    }
  }

  .cardTitle {
    margin: 0;
    border-top-left-radius: 1em;
    border-top-right-radius: 1em;
    background: #3ce068;
    color: #fff;
  }

  .cardContent {
    border: 1px solid #aaa;
    border-bottom-left-radius: 1em;
    border-bottom-right-radius: 1em;
    border-top: none;
  }
`;

const PlayerCard = ({ player }) => {
  return (
    <CardCon>
      <div className="cardTitle">
        <h3>{player.name}</h3>
      </div>

      <div className="cardContent">
        <h3>
          <span className="country">Country:</span> {player.country}
        </h3>
        <h3>
          <span>No. of searches:</span> {player.searches}
        </h3>
      </div>
    </CardCon>
  );
};
export default PlayerCard;
