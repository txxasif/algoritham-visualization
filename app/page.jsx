"use client";
import { Bubble_Sort_Helper } from "@/algorithms/sorting/bubble";
import Insertion_Sort_Helper from "@/algorithms/sorting/insertion";
import { Merge_Sort_Helper } from "@/algorithms/sorting/merge";
import Quick_Sort_Helper from "@/algorithms/sorting/quick";
import Selection_Sort_Helper from "@/algorithms/sorting/selection";
import { ChangeBarsNumber } from "@/components/redux-provider/slider/slider";
import TopBar from "@/components/top-bar/topbar";
import Bubble_Sort from "@/sortingHelper/bubble";
import {
  barsSelector,
  isSortingDoneSelector,
  numberOfBarsSelector,
} from "@/store/barSlice/barSelector";
import {
  setBarsOnInitialLoad,
  setSortingCheck,
} from "@/store/barSlice/barSlice";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BarLoader } from "react-spinners";
export default function Home() {
  const bars = useSelector(barsSelector);
  const numberOfBars = useSelector(numberOfBarsSelector);
  const dispatch = useDispatch();
  let lol;
  const PRIMARY_COLOR = "turquoise";
  const check = useSelector(isSortingDoneSelector);

  const bubbleSort = async (e) => {
    e.preventDefault();
    const barArray = [...bars];
    const bar = document.getElementsByClassName("array-bar");
    dispatch(setSortingCheck(true));
    await Promise.all([Bubble_Sort_Helper(barArray, bar)]).then(() => {
      dispatch(setSortingCheck(false));

      console.log("done");
    });
  };
  const mergeSort = async (e) => {
    e.preventDefault();
    const barArray = [...bars];
    const bar = document.getElementsByClassName("array-bar");
    dispatch(setSortingCheck(true));
    await Promise.all([Merge_Sort_Helper(barArray, bar)]).then(() => {
      dispatch(setSortingCheck(false));
      console.log("done");
    });
  };
  const quickSort = async (e) => {
    e.preventDefault();
    const barArray = [...bars];
    const bar = document.getElementsByClassName("array-bar");
    dispatch(setSortingCheck(true));
    await Promise.all([Quick_Sort_Helper(barArray, bar)]).then(() => {
      dispatch(setSortingCheck(false));
      console.log("done");
    });
  };
  const insertionSort = async (e) => {
    e.preventDefault();
    const barArray = [...bars];
    const bar = document.getElementsByClassName("array-bar");
    dispatch(setSortingCheck(true));
    await Promise.all([Insertion_Sort_Helper(barArray, bar)]).then(() => {
      dispatch(setSortingCheck(false));
      console.log("done");
    });
  };
  const selectionSort = async (e) => {
    e.preventDefault();
    const barArray = [...bars];
    const bar = document.getElementsByClassName("array-bar");
    dispatch(setSortingCheck(true));
    await Promise.all([Selection_Sort_Helper(barArray, bar)]).then(() => {
      dispatch(setSortingCheck(false));
      console.log("done");
    });
  };
  const generateNewArray = () => {
    dispatch(setBarsOnInitialLoad(numberOfBars));
  };
  useEffect(() => {
    dispatch(setBarsOnInitialLoad(numberOfBars));
  }, [numberOfBars]);

  return (
    <main className=" py-9 flex overflow-y-hidden ">
      <TopBar
        bubbleSort={bubbleSort}
        mergeSort={mergeSort}
        quickSort={quickSort}
        insertionSort={insertionSort}
        generateNewArray={generateNewArray}
        selectionSort={selectionSort}
      />

      <div className="container flex  flex-col space-y-4 w-full items-center  justify-center  ">
        {check ? <BarLoader width={200} color="#e5e5e5" /> : null}
        <div className="flex space-x-1  ">
          {bars.map((value, idx) => {
            return (
              <div
                className="array-bar"
                style={{
                  backgroundColor: PRIMARY_COLOR,
                  height: `${2 * value}px`,
                  width: "4px",
                }}
                key={idx}
              ></div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
