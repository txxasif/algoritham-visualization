let animation = [];
const portion = (arr, l, h) => {
  let i = l,
    j = h,
    p = arr[l];

  while (i < j) {
    do {
      i++;
      //it's a do wile loop it always increase value without checking the condition.
      //that's why checking value if it's less than h
      //otherwise it will show a error
      if (i < h) {
        //time to change color
        animation.push([l, i]);
        //time to revert color
        animation.push([l, i]);
        //pussing some random value bacause we need to maintain sequence
        animation.push([-1, -1]);
      }
    } while (arr[i] < p);
    do {
      j--;
      //again it's do while so we need make sure that we aren't pushing any non-array index
      if (j >= 0 && j < h) {
        //time to change color
        animation.push([l, j]);
        //time to revert color
        animation.push([l, j]);
        //again maintaining the sequence that's why pushing random value
        animation.push([-1, -1]);
      }
    } while (arr[j] > p);
    if (i < j) {
      //time to change color
      animation.push([i, j]);
      //time to revert color
      animation.push([i, j]);
      //time to change height
      animation.push([i, arr[j], j, arr[i], "nothing"]);
      let x = arr[i];
      arr[i] = arr[j];
      arr[j] = x;
    }
  }
  //time to chanage color
  animation.push([l, j]);
  //time to revert color
  animation.push([l, j]);
  //time to cahenge height
  animation.push([l, arr[j], j, arr[l], "pivot"]);

  let y = arr[l];
  arr[l] = arr[j];
  arr[j] = y;
  return j;
};

const quickSort = (arr, l, h) => {
  if (l < h) {
    let mid = portion(arr, l, h);
    quickSort(arr, l, mid);
    quickSort(arr, mid + 1, h);
  }
};
const Quick_Sort = (arr) => {
  animation = [];
  quickSort(arr, 0, arr.length);
  return animation;
};

export default Quick_Sort;
