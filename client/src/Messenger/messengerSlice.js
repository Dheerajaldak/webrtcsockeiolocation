import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  chatboxes: [],
  chatHistory: {},
};

export const messengerSlice = createSlice({
  name: "messenger",
  initialState,
  reducers: {
    addChatbox: (state, action) => {
      if (
        !state.chatboxes.find(
          (chatbox) => chatbox.socketId === action.payload.socketId
        )
      ) {
        state.chatboxes.push(action.payload);
      }
    },
    removeChatbox: (state, action) => {
      state.chatboxes = state.chatboxes.filter(
        (chatbox) => chatbox.socketId !== action.payload
      );
    },
  },
});

export const {addChatbox, removeChatbox}= messengerSlice.actions;
export default messengerSlice.reducer;
