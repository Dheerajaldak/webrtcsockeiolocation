import React from "react";
import { useSelector } from "react-redux";
import CreateRoomButton from "./CreateRoomButton";

const RoomsList = () => {
  const rooms = useSelector((store) => store.videoRooms.rooms);
  return (
    <div className="">
      <CreateRoomButton />
    </div>
  );
};
const VideoRooms = () => {
  return (
    <div>
      <RoomsList />
    </div>
  );
};

export default VideoRooms;
