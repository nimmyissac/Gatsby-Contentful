import React from "react";
import Link from "gatsby-link";

export default ({ data }) => {
  let player = data.allContentfulPlayer.edges[0].node;
  return (
    <div>
      <h1>{`Name: ${player.name}`}</h1>
      <h3>{`Game: ${player.games}`}</h3>
      <div>{`Games Played: ${player.gamesPlayed}`}</div>
      <div>{`Won: ${player.won}`}</div>
    </div>
  );
};

export const query = graphql`
    query PlayerQuery($name:String!) {
    allContentfulPlayer(filter:{name:{eq:$name}}) {
      edges {
        node {
          name,
          games,
          gamesPlayed,
          won,
        }
      }
    }
  }
`;
