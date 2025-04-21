import React from 'react'
import { IoChatboxEllipsesOutline } from "react-icons/io5";
const ChatButton = ({socketId, username}) => {
  const handleAddChatbox=()=>{

  };
    return (
    <div>
      <IoChatboxEllipsesOutline onClick={handleAddChatbox} size={30} />
    </div>
  )
}

export default ChatButton
