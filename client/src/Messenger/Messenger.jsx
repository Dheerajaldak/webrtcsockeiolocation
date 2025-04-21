import React from "react";
import Chatbox from "./Chatbox/Chatbox";

const DUMMY_CHATBOXES = [
  {
    username: "Dummy",
    socketId: 3213123,
    messages: [],
  },
  {
    username: "Test",
    socketId: 1234,
    messages: [],
  },
  
];

const Messenger = () => {
  return (
    <div className="fixed bottom-0  flex flex-wrap gap-4 p-4 z-50">
      {DUMMY_CHATBOXES.map((chatbox) => (
        <Chatbox key={chatbox.socketId} socketId={chatbox.socketId} />
      ))}
    </div>
  );
};

export default Messenger;
