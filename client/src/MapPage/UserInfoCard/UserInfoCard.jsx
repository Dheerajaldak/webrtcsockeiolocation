import React from "react";
import { useSelector } from "react-redux";
import { calculateDistanceBetweenCoords } from "../../utils/location";
import ActionButton from "./ActionButton";

const Label = ({ fontSize, text }) => {
  return (
    <p className="text-gray-700" style={{ fontSize }}>
      {text}
    </p>
  );
};

const UserInfoCard = ({username, userLocation, socketId}) => {
  const myLocation=useSelector((state)=>state.map.myLocation)
  
  return (
    <div className="fixed top-20 left-1/7 transform -translate-x-1/2 bg-white rounded-lg shadow-xl px-6 py-4 z-50 w-[280px] animate-fade-in-up">
      <h2 className="text-lg font-semibold mb-2 text-gray-800">User Info</h2>
      <Label text={`Name: ${username}`} fontSize="16px" />
      
      <Label text={`Dist: ${calculateDistanceBetweenCoords(myLocation, userLocation)} km`} fontSize="16px" />
        <ActionButton socketId={socketId} username={username}/>
        </div>
  );
};

export default UserInfoCard;
