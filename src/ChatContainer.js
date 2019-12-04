import React, { Component } from "react";

import { withStyles } from "@material-ui/styles";

import moment from "moment";

import Contact from "./components/Contact";
import Message from "./components/Message";

import { List, Divider, TextField } from "@material-ui/core";

import sendIcon from "./assets/send.svg";
const primaryColor = "#2196f3";

const styles = {
  container: {
    display: "flex",
    height: "100vh",
    overflow: "hidden"
  },
  contacts: {
    display: "flex",
    width: "300px",
    flexShrink: "0",
    flexDirection: "column",
    borderRight: "1px solid #cecece"
  },
  contactsList: {
    display: "flex",
    overflowY: "auto",
    flexDirection: "column",
    paddingTop: "0"
  },
  contactsFilterContainer: {
    padding: "10px 16px"
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
    padding: "20px",
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
    position: "relative",
    alignSelf: "flex-end",
    display: "inline-flex",
    borderBottomRightRadius: "0",
    backgroundAttachment: "fixed",
    background: primaryColor
  },
  msgIncoming: {
    background: "#eee",
    color: "#000",
    alignSelf: "flex-start",
    borderBottomLeftRadius: "0"
  },
  lastMsgIncoming: {
    width: "0",
    height: "0",
    left: "-10px",
    bottom: "0px",
    borderStyle: "solid",
    position: "absolute",
    borderWidth: "15px 15px 0px 0px",
    borderColor: "transparent #eee transparent transparent"
  },
  lastMsgOutcoming: {
    width: "0",
    height: "0",
    right: "-10px",
    bottom: "0px",
    position: "absolute",
    borderStyle: "solid",
    borderWidth: "15px 0 0px 16px",
    borderColor: `transparent transparent transparent ${primaryColor}`
  },
  unreadMsgContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "13px"
  },
  unreadMsgText: {
    color: "palevioletred"
  },
  unreadMsgDivider: {
    width: "100%",
    margin: "10px 0px"
  },
  dateTxt: {
    alignSelf: "center",
    fontSize: "14px",
    color: "#686868",
    fontWeight: "600"
  },
  sendMsgContainer: {
    display: "flex",
    padding: "10px",
    alignItems: "center",
    border: "1px solid #cecece"
  },
  sendMsgBtn: {
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

class ChatContainer extends Component {
  state = {
    inputMsg: "",
    contactsFilter: "",
    msgDateFormat: "ddd, MMM DD, YYYY"
  };

  componentDidMount = () => {
    const { msgDateFormat } = this.props;

    if (msgDateFormat) this.setState({ msgDateFormat });

    if (this.firstUnreadMsg) {
      this.scrollToFirstUnreadMsg();
    } else {
      this.scrollToBottom();
    }
  };

  scrollToFirstUnreadMsg = () => {
    this.firstUnreadMsg.scrollIntoView();
  };

  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView();
  };

  onChangeField = (field, value) => this.setState({ [field]: value });

  onContactsFilterChange = value => {
    const { onContactsFilterChange } = this.props;

    this.onChangeField("contactsFilter", value);

    if (onContactsFilterChange) onContactsFilterChange(value);
  };

  render() {
    const { inputMsg, contactsFilter, msgDateFormat } = this.state;
    const {
      classes,
      contacts,
      chatStyles,
      onContactClick,
      onSendBtnClick,
      selectedContact,
      contactsFilterField
    } = this.props;

    let currentTime = null;

    return (
      <section className={classes.container}>
        <div
          className={classes.contacts}
          style={{
            width: `${chatStyles ? chatStyles.contactsColWidth : ""}`
          }}
        >
          {contactsFilterField ? (
            <div className={classes.contactsFilterContainer}>
              <TextField
                fullWidth
                value={contactsFilter}
                placeholder="Filter contacts..."
                onChange={e => this.onContactsFilterChange(e.target.value)}
              />
            </div>
          ) : null}

          <List className={classes.contactsList}>
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
                  selectedContactColor={`${
                    chatStyles ? chatStyles.selectedContactColor : ""
                  }`}
                />
              );
            })}
          </List>
        </div>

        <div className={classes.chatContainer}>
          <div className={classes.chat}>
            {selectedContact &&
            selectedContact.messages &&
            selectedContact.messages.length
              ? selectedContact.messages.map((msg, msgIndex) => {
                  const nextMsg = selectedContact.messages[msgIndex + 1];
                  const lastMsg =
                    !nextMsg || (nextMsg && msg.incoming !== nextMsg.incoming);

                  let firstUnreadMsgIndex;

                  if (firstUnreadMsgIndex === undefined && msg.unread)
                    firstUnreadMsgIndex = msgIndex;

                  const msgProps = {
                    msg,
                    key: msgIndex,
                    classes,
                    lastMsg,
                    isNextMsg: nextMsg,
                    outcomingMsgColor: `${
                      chatStyles ? chatStyles.outcomingMsgColor : ""
                    }`,
                    incomingMsgColor: `${
                      chatStyles ? chatStyles.incomingMsgColor : ""
                    }`
                  };

                  const timeWithDST = moment(msg.time);

                  const isNeedDate =
                    moment(currentTime).date() === timeWithDST.date();

                  currentTime = timeWithDST;

                  if (firstUnreadMsgIndex) {
                    return (
                      <div
                        key={msgIndex}
                        ref={el => (this.firstUnreadMsg = el)}
                        className={classes.unreadMsgContainer}
                      >
                        {!isNeedDate ? (
                          <p className={classes.dateTxt}>
                            {moment(msg.time).format(msgDateFormat)}
                          </p>
                        ) : null}

                        <span className={classes.unreadMsgText}>
                          Unread messages
                        </span>

                        <Divider className={classes.unreadMsgDivider} />

                        <Message {...msgProps} />
                      </div>
                    );
                  }

                  return (
                    <div style={{ display: "contents" }}>
                      {!isNeedDate ? (
                        <p className={classes.dateTxt}>
                          {moment(msg.time).format(msgDateFormat)}
                        </p>
                      ) : null}

                      <Message key={msgIndex} {...msgProps} />
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
              onChange={e => this.onChangeField("inputMsg", e.target.value)}
            />

            <div
              className={classes.sendMsgBtn}
              onClick={e => onSendBtnClick(e, inputMsg)}
            />
          </div>
        </div>
      </section>
    );
  }
}

export default withStyles(styles)(ChatContainer);
