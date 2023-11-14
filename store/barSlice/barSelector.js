import { createSelector } from "@reduxjs/toolkit";
const bars = (state) => state.bars;
export const barsSelector = createSelector([bars], (bars) => bars.bars);
export const numberOfBarsSelector = createSelector(
  [bars],
  (bars) => bars.numberOfBars
);
export const isSortingDoneSelector = createSelector(
  [bars],
  (bars) => bars.isSortingStarted
);
