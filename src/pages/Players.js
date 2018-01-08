import React from "react";
import Link from "gatsby-link";


export default ({ data }) =>{
  let _players = data.allContentfulPlayer.edges;
  let players = _players.map((edge, i) => {
    return (
      <li key={i}><Link to={'/player'+i}>{edge.node.name}</Link></li>
    )
  });
  return (
      <div style={{ margin: `0 auto`, maxWidth: 650, padding: `1.25rem 1rem` }}>
      <ul>
         {players}
      </ul>
      </div>
    );
    }

  export const query = graphql`
      query PlayersQuery{
      allContentfulPlayer {
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
