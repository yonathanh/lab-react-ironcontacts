//  [imrc + Tab] =>	Import React / Component
//  [cc + Tab] =>	Class Component
import React, { Component } from "react";
import "./App.css";
import contacts from "./contacts.json";
import Card from "./components/Card";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: contacts.slice(0, 5)
    };
  }

  addRandom = () => {
    let tempContacts = [...this.state.contacts]; // using the spread operater to actually make a copy
    let randomNum = Math.floor(Math.random() * contacts.length);
    tempContacts.push(contacts[randomNum]); // we don't want to modify the original [EVER!]

    this.setState({
      contacts: tempContacts
    });
  };

  showCard = () => {
    return this.state.contacts.map((oneContact, index) => {
      return (
        <Card
          key={index}
          name={oneContact.name}
          pictureUrl={oneContact.pictureUrl}
          popularity={oneContact.popularity}
          deleteClickHandler={() => this.deleteCard(index)}
        />
      );
    });
  };

  sortName = () => {
    let tempContacts = [...this.state.contacts]; // using the spread operater to actually make a copy

    tempContacts = tempContacts.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    this.setState({
      contacts: tempContacts
    });
    this.showCard();
  };

  sortPopularity = () => {
    let tempContacts = [...this.state.contacts]; // using the spread operater to actually make a copy

    tempContacts = tempContacts.sort((a, b) => a.popularity - b.popularity);
    console.log(tempContacts);
    this.setState({
      contacts: tempContacts
    });
    this.showCard();
  };

  deleteCard = whichCardToDelete => {
    const tempContacts = [...this.state.contacts];
    tempContacts.splice(whichCardToDelete, 1);

    this.setState({
      contacts: tempContacts
    });
  };

  render() {
    return (
      <div className="App">
        <h1 className="App-title">Table and buttons React</h1>
        <button
          style={{ backgroundColor: "blue" }}
          onClick={() => this.addRandom()}
        >
          add rendom celeb
        </button>
        <button
          style={{ backgroundColor: "green" }}
          onClick={() => this.sortName()}
        >
          sort By Name
        </button>
        <button
          style={{ backgroundColor: "gray" }}
          onClick={() => this.sortPopularity()}
        >
          sort By popularity
        </button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>button</th>
            </tr>
          </thead>
          <tbody>{this.showCard()}</tbody>
        </table>
      </div>
    );
  }
}

export default App;
