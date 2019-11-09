import React, { Component } from "react";

import ChatContainer from "./ChatContainer";

class App extends Component {
  state = {
    selectedContact: 3
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
