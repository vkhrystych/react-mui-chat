import React from "react";

export default ({ msg, isNextMsg, lastMsg, classes }) => {
  return (
    <div
      style={{
        marginBottom: `${!isNextMsg ? "0" : lastMsg ? "10px" : "4px"}`
      }}
      className={`${classes.msg} ${msg.incoming ? classes.msgIncoming : ""}`}
    >
      {lastMsg ? (
        <div
          className={`${
            msg.incoming ? classes.lastMsgIncoming : classes.lastMsgOutcoming
          }`}
        ></div>
      ) : null}

      {msg.text}
    </div>
  );
};
