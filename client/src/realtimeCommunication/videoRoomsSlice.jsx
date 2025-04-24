import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  inRoom: null,// if user will be in room - here we will saveing room id
  rooms: [],
};

export const videoRoomsSlice = createSlice({
  name: "videoRooms",
  initialState,
  reducers: {
    setInRoom: (state, action) => {
      state.inRoom = action.payload;
    },
    setRooms: (state, action) => {
      state.rooms = action.payload;
    },
    addRoom: (state, action) => {
      state.rooms.push(action.payload);
    },
    removeRoom: (state, action) => {
      state.rooms = state.rooms.filter((room) => room.id !== action.payload);
    },
  },
});

export const { setInRoom, setRooms, addRoom, removeRoom } =
  videoRoomsSlice.reducer;
export default videoRoomsSlice.reducer;
