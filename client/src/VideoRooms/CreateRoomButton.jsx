import React from 'react';
import { FcVideoCall } from "react-icons/fc";
const CreateRoomButton = () => {
  return (
    <button className="flex items-center gap-1 bg-cyan-900 hover:bg-teal-900 text-white px-4 py-2 rounded shadow transition duration-200 text-sm">
      <FcVideoCall className="text-3xl" />
      Video Call
    </button>
  );
};

export default CreateRoomButton;
