"use client";
import React from "react";
import { ChangeBarsNumber } from "../redux-provider/slider/slider";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { useSelector } from "react-redux";
import { isSortingDoneSelector } from "@/store/barSlice/barSelector";
import { useTypewriter } from "react-simple-typewriter";
import { BarLoader } from "react-spinners";
export default function TopBar({ bubbleSort, mergeSort, quickSort }) {
  return (
    <div className="container w-[25%] border-r h-[90vh]  flex flex-col justify-center">
      <div className="w-full mb-4 space-y-5 opacity-80 ">
        <ChangeBarsNumber />
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
      </div>
    </div>
  );
}
