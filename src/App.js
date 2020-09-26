import React from 'react';
import contacts from './contacts.json';
import './App.css';

class ContactsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullList: contacts,
      firstFiveContacts: contacts.slice(0, 5),
    };
  }

  //method to add a random contact
  addRandomContact = (newContact) => {
    let rndmNum = Math.floor(Math.random() * contacts.length);
    const contactsCopy = [...this.state.firstFiveContacts];
    newContact = this.state.fullList[rndmNum];
    console.log(newContact);
    contactsCopy.push(newContact);
    console.log(contactsCopy);
    this.setState({
      firstFiveContacts: contactsCopy,
    });
    console.log(this.state.firstFiveContacts);
  };

  render() {
    const { firstFiveContacts } = this.state;
    return (
      <div id="App">
        <h1>IronContacts</h1>
        <button onClick={this.addRandomContact}>Add Random Contact</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {firstFiveContacts.map((contact) => {
              return (
                <tr key={contact.id}>
                  <th>
                    <img src={contact.pictureUrl} style={{ height: 100 }}></img>
                  </th>
                  <th>{contact.name}</th>
                  <th>{contact.popularity}</th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <ContactsList />
    </div>
  );
}

export default App;
