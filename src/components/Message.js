import React from "react";

export default ({
  msg,
  isNextMsg,
  lastMsg,
  classes,
  incomingMsgColor,
  outcomingMsgColor
}) => (
  <div
    style={{
      marginBottom: `${!isNextMsg ? "0" : lastMsg ? "10px" : "4px"}`,
      background: `${
        msg.incoming && incomingMsgColor
          ? incomingMsgColor
          : !msg.incoming && outcomingMsgColor
          ? outcomingMsgColor
          : ""
      }`
    }}
    className={`${classes.msg} ${msg.incoming ? classes.msgIncoming : ""}`}
  >
    {lastMsg ? (
      <div
        className={`${
          msg.incoming ? classes.lastMsgIncoming : classes.lastMsgOutcoming
        }`}
        style={{
          borderColor: `${
            msg.incoming
              ? `transparent ${incomingMsgColor} transparent transparent`
              : `transparent transparent transparent ${outcomingMsgColor}`
          }`
        }}
      ></div>
    ) : null}

    {msg.text}
  </div>
);
