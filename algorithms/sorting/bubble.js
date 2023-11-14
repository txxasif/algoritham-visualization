import Bubble_Sort from "@/sortingHelper/bubble";
import {
  ANIMATION_SPEED_MS,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  END_COLOR,
} from "@/sortingHelper/important";

export function Bubble_Sort_Helper(barArray, bar) {
  return new Promise((resolve) => {
    const animation = Bubble_Sort(barArray);
    setTimeout(() => {
      for (let i = 0; i < animation.length; i++) {
        const isChanging = i % 3 !== 2;
        if (isChanging) {
          const [x, y] = animation[i];
          const barOne = bar[x].style;
          const barTwo = bar[y].style;
          const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
          setTimeout(() => {
            barOne.backgroundColor = color;
            barTwo.backgroundColor = color;
          }, i * ANIMATION_SPEED_MS);
        } else {
          setTimeout(() => {
            const [w, x, y, z, m] = animation[i];

            bar[w].style.height = `${2 * x}px`;
            bar[y].style.height = `${2 * z}px`;
            if (m === "last") {
              const s = bar[y].style;
              const color = END_COLOR;
              s.backgroundColor = color;
            }
            if (i === animation.length - 1) {
              const s = bar[0].style;
              s.backgroundColor = END_COLOR;
              resolve("done");
            }
          }, i * ANIMATION_SPEED_MS);
        }
      }
    }, 60);
  });
}
