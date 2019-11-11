import React, { Component } from "react";

import ChatContainer from "./ChatContainer";

import { messages, contacts } from "./mock-data";

class App extends Component {
  state = {
    selectedContact: {
      index: 3,
      messages: messages
    }
  };

  onContactClick = contactIndex => {
    this.setState({ selectedContact: contactIndex });
  };

  onSendBtnClick = (e, msg) => {
    e.preventDefault();

    console.log(msg);
  };

  render() {
    const { selectedContact } = this.state;

    return (
      <div>
        <ChatContainer
          contacts={contacts}
          selectedContact={selectedContact}
          onContactClick={this.onContactClick}
          onSendBtnClick={this.onSendBtnClick}
        />
      </div>
    );
  }
}

export default App;
