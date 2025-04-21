import React, { useState } from "react";
import { FiSend } from "react-icons/fi"; // React Icon for send button

const Chatbox = ({ socketId }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { text: newMessage, sender: "You" }]);
      setNewMessage("");
    }
  };

  return (
    <div className="flex flex-col border border-gray-300 rounded-lg shadow-md w-80 m-4 bg-white">
      <div className="bg-blue-500 text-white p-3 rounded-t-lg font-semibold">
        Chatbox - {socketId}
      </div>

      <div className="flex-1 p-3 overflow-y-auto h-64 space-y-2">
        {messages.length === 0 ? (
          <div className="text-gray-400 text-sm">No messages yet</div>
        ) : (
          messages.map((msg, index) => (
            <div
              key={index}
              className={`p-2 rounded-lg text-sm ${
                msg.sender === "You"
                  ? "bg-blue-100 self-end text-right"
                  : "bg-gray-100 self-start"
              }`}
            >
              <strong>{msg.sender}: </strong> {msg.text}
            </div>
          ))
        )}
      </div>

      <div className="flex items-center border-t border-gray-200 p-2">
        <input
          type="text"
          className="flex-1 p-2 text-sm border border-gray-300 rounded-l-md focus:outline-none"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          onClick={handleSend}
          className="bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-600 transition"
        >
          <FiSend />
        </button>
      </div>
    </div>
  );
};

export default Chatbox;
