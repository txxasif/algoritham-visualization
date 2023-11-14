let animation = [];
const SelectionSort = (arr) => {
  animation = [];
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    let min = i;
    for (let j = i + 1; j < len; j++) {
      animation.push([min, j]);
      animation.push([min, j]);
      animation.push([-1, -1]);
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    animation = animation.slice(0, -1);
    animation.push([i, arr[min], min, arr[i], "last"]);
    //  animation.push([])
    let tmp = arr[i];
    arr[i] = arr[min];
    arr[min] = tmp;
  }
  return animation;
};
export default SelectionSort;
