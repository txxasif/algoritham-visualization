import {
  ANIMATION_SPEED_MS,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  END_COLOR,
} from "@/sortingHelper/important";
import Insertion_Sort from "@/sortingHelper/insertion";

export default function Insertion_Sort_Helper(barArray, bar) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const ani = Insertion_Sort(barArray);

      for (let i = 0; i < ani.length; i++) {
        const isChange = i % 3 !== 2;
        if (isChange) {
          const [barOne, barTwo] = ani[i];
          const barOneColor = bar[barOne].style;
          const barTwoColor = bar[barTwo].style;
          const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
          setTimeout(() => {
            barOneColor.backgroundColor = color;
            barTwoColor.backgroundColor = color;
          }, i * ANIMATION_SPEED_MS);
        } else {
          const [barr, barHeight] = ani[i];
          const newHeight = bar[barr].style;
          setTimeout(() => {
            newHeight.height = `${2 * barHeight}px`;

            if (i === ani.length - 1) {
              for (let val of bar) {
                setTimeout(() => {
                  val.style.backgroundColor = PRIMARY_COLOR;
                }, 2 * ANIMATION_SPEED_MS);
              }
              resolve("done");
            }
          }, i * ANIMATION_SPEED_MS);
        }
      }
    }, 60);
  });
}
