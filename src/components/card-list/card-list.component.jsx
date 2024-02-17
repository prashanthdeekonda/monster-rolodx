// name of the component in the folder be
// card-list.component.jsx
// card-list.jsx
// index.js
// based on your coding standards set by the team

import { Component } from "react";

class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div>
        {monsters.map((monster) => {
          return <h1 key={monster.id}>{monster.name}</h1>;
        })}
      </div>
    );
  }
}

export default CardList;
