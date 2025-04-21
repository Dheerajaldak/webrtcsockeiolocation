import { configureStore } from '@reduxjs/toolkit';
import mapReducer from "../MapPage/MapSlice.js"
const store = configureStore({
  reducer: {
    map:mapReducer,
  },
});
export default store;