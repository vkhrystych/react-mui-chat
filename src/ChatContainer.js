import React, { Component } from "react";

import { withStyles } from "@material-ui/styles";

import {
  List,
  Badge,
  Avatar,
  ListItem,
  ListItemText,
  ListItemAvatar
} from "@material-ui/core";

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
    background: "#2196f3",
    "& .MuiTypography-colorTextSecondary": {
      color: "#fff"
    }
  },
  chat: {
    width: "100%",
    display: "flex",
    padding: "10px",
    overflowY: "auto",
    background: "#f9f9f9",
    flexDirection: "column"
  },
  msg: {
    color: "white",
    fontSize: "15px",
    maxWidth: "45%",
    padding: "8px 15px",
    borderRadius: "20px",
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
  }
};

const getAvatar = text => {
  return `https://api.adorable.io/avatars/50/${Math.floor(
    Math.random() * Math.floor(100)
  )}.png`;
};

const contacts = [
  {
    avatar: getAvatar(),
    name: "Vladyslav Khrystych",
    msgCount: 0,
    msg:
      "Here’s how to follow the summit and weekend festivities, featuring CEOs, actors, authors, scientists, and engineers."
  },
  {
    avatar: getAvatar(),
    name: "Frol Enazt",
    msgCount: 0,
    msg:
      "We’ll have climate activists and CEOs, actors and authors, scientists and engineers—plus a guy who can teach you to make the world's best paper airplane."
  },
  {
    avatar: getAvatar(),
    name: "Anton Syrovatka",
    msgCount: 3,
    msg:
      "In the meantime, you can catch up on everything that happened at last year’s inaugural event"
  },
  {
    avatar: getAvatar(),
    name: "Anastasiya Kurhan",
    msgCount: 5,
    msg: "Below is the full schedule of Friday’s summit."
  },
  {
    avatar: getAvatar(),
    name: "Artyom Sazonov",
    msgCount: 1,
    msg: "Jeff Weiner, CEO, LinkedIn, with Nicholas Thompson, WIRED"
  },
  {
    avatar: getAvatar(),
    name: "Vladyslav Khrystych",
    msgCount: 0,
    msg:
      "Here’s how to follow the summit and weekend festivities, featuring CEOs, actors, authors, scientists, and engineers."
  },
  {
    avatar: getAvatar(),
    name: "Frol Enazt",
    msgCount: 0,
    msg:
      "We’ll have climate activists and CEOs, actors and authors, scientists and engineers—plus a guy who can teach you to make the world's best paper airplane."
  },
  {
    avatar: getAvatar(),
    name: "Anton Syrovatka",
    msgCount: 3,
    msg:
      "In the meantime, you can catch up on everything that happened at last year’s inaugural event"
  },
  {
    avatar: getAvatar(),
    name: "Anastasiya Kurhan",
    msgCount: 5,
    msg: "Below is the full schedule of Friday’s summit."
  },
  {
    avatar: getAvatar(),
    name: "Artyom Sazonov",
    msgCount: 1,
    msg: "Jeff Weiner, CEO, LinkedIn, with Nicholas Thompson, WIRED"
  },
  {
    avatar: getAvatar(),
    name: "Vladyslav Khrystych",
    msgCount: 0,
    msg:
      "Here’s how to follow the summit and weekend festivities, featuring CEOs, actors, authors, scientists, and engineers."
  },
  {
    avatar: getAvatar(),
    name: "Frol Enazt",
    msgCount: 0,
    msg:
      "We’ll have climate activists and CEOs, actors and authors, scientists and engineers—plus a guy who can teach you to make the world's best paper airplane."
  },
  {
    avatar: getAvatar(),
    name: "Anton Syrovatka",
    msgCount: 3,
    msg:
      "In the meantime, you can catch up on everything that happened at last year’s inaugural event"
  },
  {
    avatar: getAvatar(),
    name: "Anastasiya Kurhan",
    msgCount: 5,
    msg: "Below is the full schedule of Friday’s summit."
  },
  {
    avatar: getAvatar(),
    name: "Artyom Sazonov",
    msgCount: 1,
    msg: "Jeff Weiner, CEO, LinkedIn, with Nicholas Thompson, WIRED"
  }
];

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
  componentDidMount = () => {
    this.scrollToBottom();
  };

  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView();
  };

  render() {
    const { classes, selectedContact, onContactClick } = this.props;

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
      </section>
    );
  }
}

export default withStyles(styles)(ChatContainer);
