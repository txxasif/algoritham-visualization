import SelectionSort from "@/sortingHelper/selection";
import {
  ANIMATION_SPEED_MS,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  END_COLOR,
} from "@/sortingHelper/important";
export default function Selection_Sort_Helper(barArray, bar) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const animation = SelectionSort(barArray);
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
        } else if (animation[i].length === 5) {
          setTimeout(() => {
            const [w, x, y, z, m] = animation[i];
            const barOneHeight = bar[w].style;
            const barTwoHeight = bar[y].style;
            barOneHeight.height = `${2 * x}px`;
            barTwoHeight.height = `${2 * z}px`;

            if (m === "last") {
              const s = bar[w].style;
              s.backgroundColor = END_COLOR;
            }

            if (i === animation.length - 1) {
              const s = bar[w - 1].style;
              s.backgroundColor = END_COLOR;
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
