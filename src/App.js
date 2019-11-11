import React, { Component } from "react";

import ChatContainer from "./ChatContainer";

import { messages, contacts } from "./mock-data";

class App extends Component {
  state = {
    contacts: [],
    selectedContact: {
      index: 3,
      messages: messages
    }
  };

  componentDidMount = () => {
    this.setState({ contacts });
  };

  onContactClick = contactIndex => {
    this.setState({ selectedContact: contactIndex });
  };

  onSendBtnClick = (e, value) => {
    e.preventDefault();

    console.log(value);
  };

  onContactsFilterChange = value => {
    const filteredContacts = contacts.filter(contact => {
      const contactNameLC = contact.name.toLowerCase();
      const valueLC = value.toLowerCase();

      return contactNameLC.includes(valueLC);
    });

    this.setState({ contacts: filteredContacts });
  };

  render() {
    const { selectedContact } = this.state;

    return (
      <div>
        <ChatContainer
          contacts={this.state.contacts}
          selectedContact={selectedContact}
          onContactClick={this.onContactClick}
          onSendBtnClick={this.onSendBtnClick}
          onContactsFilterChange={this.onContactsFilterChange}
        />
      </div>
    );
  }
}

export default App;
