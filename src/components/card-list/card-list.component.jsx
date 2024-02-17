// name of the component in the folder be
// card-list.component.jsx
// card-list.jsx
// index.js
// based on your coding standards set by the team

import { Component } from "react";
import Card from "../card/card.component";
import "./card-list.styles.css";

class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return <Card monster={monster} />;
          // return (
          //   <div className="card-container" key={id}>
          //     <img
          //       alt={`monster ${name}`}
          //       src={`https://robohash.org/${id}?set=set2&size=180x180`}
          //     />
          //     <h2>{name}</h2>
          //     <p>{email}</p>
          //   </div>
          // );
        })}
      </div>
    );
  }
}

export default CardList;
