import Quick_Sort from "@/sortingHelper/quick";
import {
  ANIMATION_SPEED_MS,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  END_COLOR,
} from "@/sortingHelper/important";

export default function Quick_Sort_Helper(barArray, bar) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const ani = Quick_Sort(barArray);
      for (let i = 0; i < ani.length; i++) {
        const isColorChange = i % 3 !== 2;
        if (isColorChange) {
          const [barOne, barTwo] = ani[i];
          const barOneStyle = bar[barOne].style;
          const barTwoStyle = bar[barTwo].style;
          const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
          setTimeout(() => {
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
          }, i * ANIMATION_SPEED_MS);
        } else if (ani[i].length === 5) {
          setTimeout(() => {
            const [barOne, barOneHeight, barTwo, barTwoHeight, string] = ani[i];
            const one = bar[barOne].style;
            const two = bar[barTwo].style;
            one.height = `${2 * barOneHeight}px`;
            two.height = `${2 * barTwoHeight}px`;
            if (string === "pivot") {
              two.backgroundColor = END_COLOR;
            }
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
