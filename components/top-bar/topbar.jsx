"use client";
import React from "react";
import { ChangeBarsNumber } from "../redux-provider/slider/slider";
import { Button } from "../ui/button";
export default function TopBar({
  bubbleSort,
  mergeSort,
  quickSort,
  insertionSort,
  generateNewArray,
  selectionSort,
}) {
  return (
    <div className="container w-[25%] border-r h-[90vh]  flex flex-col justify-center">
      <div className="w-full mb-4 space-y-5 opacity-80 ">
        <ChangeBarsNumber />
        <Button
          onClick={generateNewArray}
          variant="secondary"
          className="rounded w-full"
        >
          Generate New Bars
        </Button>
      </div>

      <div className="space-y-3 mt-9">
        <Button className="w-full rounded-2xl" onClick={bubbleSort}>
          Bubble
        </Button>
        <Button className="w-full rounded-2xl" onClick={mergeSort}>
          Merge
        </Button>
        <Button className="w-full rounded-2xl" onClick={quickSort}>
          Quick
        </Button>
        <Button className="w-full rounded-2xl" onClick={insertionSort}>
          Insertion
        </Button>
        <Button className="w-full rounded-2xl" onClick={selectionSort}>
          Selection
        </Button>
      </div>
    </div>
  );
}
