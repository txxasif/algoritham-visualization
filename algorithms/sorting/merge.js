import Merge_Sort from "@/sortingHelper/merge";
import {
  ANIMATION_SPEED_MS,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  END_COLOR,
} from "@/sortingHelper/important";

export function Merge_Sort_Helper(barArray, bar) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const animations = Merge_Sort(barArray);
      for (let i = 0; i < animations.length; i++) {
        const isColorChange = i % 3 !== 2;
        if (isColorChange) {
          const [barOneIdx, barTwoIdx] = animations[i];
          const barOneStyle = bar[barOneIdx].style;
          const barTwoStyle = bar[barTwoIdx].style;
          const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
          setTimeout(() => {
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
          }, i * ANIMATION_SPEED_MS);
        } else {
          setTimeout(() => {
            const [barOneIdx, newHeight] = animations[i];
            const barOneStyle = bar[barOneIdx].style;
            barOneStyle.height = `${2 * newHeight}px`;
            if (i === animations.length - 1) {
              resolve("done");
            }
          }, i * ANIMATION_SPEED_MS);
        }
      }
    }, 60);
  });
}
