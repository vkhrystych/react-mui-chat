import React, { Component } from "react";

import { withStyles } from "@material-ui/styles";

import {
  List,
  Badge,
  Avatar,
  ListItem,
  TextField,
  ListItemText,
  ListItemAvatar
} from "@material-ui/core";

import sendIcon from "./assets/send.svg";
const primaryColor = "#2196f3";

const styles = {
  container: {
    display: "flex",
    height: "100vh",
    overflow: "hidden"
  },
  contacts: {
    width: "300px",
    display: "flex",
    flexShrink: "0",
    overflowY: "auto",
    flexDirection: "column",
    borderRight: "1px solid #cecece"
  },
  selectedContact: {
    color: "#fff",
    background: primaryColor,
    "& .MuiTypography-colorTextSecondary": {
      color: "#fff"
    }
  },
  chatContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column"
  },
  chat: {
    height: "100%",
    display: "flex",
    padding: "10px",
    overflowY: "auto",
    background: "#f9f9f9",
    flexDirection: "column",
    boxShadow:
      "inset 0px 10px 8px -10px rgba(214, 214, 214, 0.7), inset 0px -10px 8px -10px rgba(214, 214, 214, 0.7)"
  },
  msg: {
    color: "white",
    fontSize: "15px",
    maxWidth: "45%",
    padding: "5px 8px",
    borderRadius: "5px",
    marginBottom: "10px",
    position: "relative",
    alignSelf: "flex-end",
    display: "inline-flex",
    backgroundAttachment: "fixed",
    background: "linear-gradient(to bottom, #00D0EA 0%, #0085D1 100%)"
  },
  msgIncoming: {
    background: "#eee",
    color: "#000",
    alignSelf: "flex-start"
  },
  sendMsgContainer: {
    display: "flex",
    padding: "10px",
    alignItems: "center",
    border: "1px solid #cecece"
  },
  sendMsgBtn: {
    fill: "red",
    width: "20px",
    height: "20px",
    flexShrink: "0",
    marginLeft: "10px",
    background: `url(${sendIcon})`,
    "&:hover": {
      cursor: "pointer"
    }
  }
};

const Contact = ({ contact, contactIndex, classes, isSelected, onClick }) => {
  return (
    <ListItem
      className={`${isSelected ? classes.selectedContact : ""}`}
      button
      onClick={() => onClick(contactIndex)}
    >
      <ListItemAvatar>
        <Avatar alt={contact.name} src={contact.avatar} />
      </ListItemAvatar>

      <ListItemText
        primary={contact.name}
        secondary={contact.msg}
        secondaryTypographyProps={{
          style: {
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            width: "calc(100% - 12px)"
          }
        }}
      />

      {contact.msgCount ? (
        <Badge badgeContent={contact.msgCount} color="secondary"></Badge>
      ) : null}
    </ListItem>
  );
};

class ChatContainer extends Component {
  state = {
    inputMsg: ""
  };

  componentDidMount = () => {
    this.scrollToBottom();
  };

  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView();
  };

  onInputMsgChange = inputMsg => this.setState({ inputMsg });

  render() {
    const { inputMsg } = this.state;
    const { classes, contacts, selectedContact, onContactClick } = this.props;

    return (
      <section className={classes.container}>
        <List className={classes.contacts}>
          {contacts.map((contact, contactIndex) => {
            const isSelected = selectedContact.index === contactIndex;

            return (
              <Contact
                contact={contact}
                classes={classes}
                key={contactIndex}
                isSelected={isSelected}
                onClick={onContactClick}
                contactIndex={contactIndex}
              />
            );
          })}
        </List>

        <div className={classes.chatContainer}>
          <div className={classes.chat}>
            {selectedContact &&
            selectedContact.messages &&
            selectedContact.messages.length
              ? selectedContact.messages.map((msg, msgIndex) => {
                  return (
                    <div
                      key={msgIndex}
                      className={`${classes.msg} ${
                        msg.incoming ? classes.msgIncoming : ""
                      }`}
                    >
                      {msg.text}
                    </div>
                  );
                })
              : null}

            <div
              ref={el => {
                this.messagesEnd = el;
              }}
            />
          </div>

          <div className={classes.sendMsgContainer}>
            <TextField
              rows="2"
              fullWidth
              multiline
              rowsMax="10"
              value={inputMsg}
              placeholder="Enter your message"
              onChange={e => this.onInputMsgChange(e.target.value)}
            />

            <div className={classes.sendMsgBtn} />
          </div>
        </div>
      </section>
    );
  }
}

export default withStyles(styles)(ChatContainer);
