import React from 'react';
import "./Reply.css";
import iconReplay from "./images/icon-reply.svg";

function Reply(props) {
  return (
    <button className="replay-btn" style={props.style} onClick={props.replyFunc}><img src={iconReplay} alt="icon" />Replay</button>
  );
}

export default Reply