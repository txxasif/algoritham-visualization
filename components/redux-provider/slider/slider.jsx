"use client";
import { Slider } from "@/components/ui/slider";
import {
  barsSelector,
  numberOfBarsSelector,
} from "@/store/barSlice/barSelector";
import { setBarsNumber } from "@/store/barSlice/barSlice";
import { useDispatch, useSelector } from "react-redux";
export function ChangeBarsNumber(props) {
  const dispatch = useDispatch();
  const bars = useSelector(barsSelector);
  const barsNumber = useSelector(numberOfBarsSelector);
  function handleChange(e) {
    console.log(bars.length, e[0]);
    dispatch(setBarsNumber(e[0]));
  }
  return (
    <Slider
      defaultValue={[barsNumber]}
      max={100}
      step={1}
      min={1}
      onValueChange={handleChange}
      className
      {...props}
    />
  );
}
