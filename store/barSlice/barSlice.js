import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bars: [],
  isSortingStarted: false,
  numberOfBars: 30,
};
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const barReducer = createSlice({
  name: "bars",
  initialState,
  reducers: {
    setSortingCheck: (state, action) => {
      state.isSortingStarted = action.payload;
    },
    setBarsOnInitialLoad: (state, action) => {
      const array = [];
      if (state.numberOfBars > 30) {
        for (let i = 0; i < action.payload; i++) {
          let value = randomIntFromInterval(5, 200);
          array.push(value);
        }
      } else {
        for (let i = 0; i < action.payload; i++) {
          let value = randomIntFromInterval(5, 200);
          array.push(value);
        }
      }
      state.bars = array;
    },
    setBarsNumber: (state, action) => {
      state.numberOfBars = action.payload;
    },
  },
});
export const { setBarsOnInitialLoad, setBarsNumber, setSortingCheck } =
  barReducer.actions;
export default barReducer.reducer;
