import React, { Component } from "react";

import ChatContainer from "./ChatContainer";

import { messages } from "./mock-data";

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

  render() {
    const { selectedContact } = this.state;

    return (
      <div>
        <ChatContainer
          selectedContact={selectedContact}
          onContactClick={this.onContactClick}
        />
      </div>
    );
  }
}

export default App;
