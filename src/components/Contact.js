import React from "react";

import {
  Badge,
  Avatar,
  ListItem,
  ListItemText,
  ListItemAvatar
} from "@material-ui/core";

export default ({
  onClick,
  contact,
  classes,
  isSelected,
  contactIndex,
  selectedContactColor
}) => {
  return (
    <ListItem
      className={`${isSelected ? classes.selectedContact : ""}`}
      style={{
        background: `${
          isSelected && selectedContactColor ? selectedContactColor : ""
        }`
      }}
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
