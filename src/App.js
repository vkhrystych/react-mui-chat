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
    overflow: "hidden",
    background: "#f9f9f9"
  },
  contacts: {
    display: "flex",
    flexDirection: "column",
    width: "300px",
    borderRight: "1px solid #cecece"
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

const Contact = ({ contact }) => {
  return (
    <ListItem button>
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
  render() {
    const { classes } = this.props;

    return (
      <section className={classes.container}>
        <List className={classes.contacts}>
          {contacts.map((contact, contactIndex) => {
            return <Contact key={contactIndex} contact={contact} />;
          })}
        </List>

        <div className={classes.chat}></div>
      </section>
    );
  }
}

export default withStyles(styles)(ChatContainer);
