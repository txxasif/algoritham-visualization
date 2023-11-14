const Bubble_Sort = (arr) => {
  console.log(arr);
  var ar = arr;
  var animation = [];
  for (let i = 0; i < ar.length - 1; i++) {
    for (let j = 0; j < ar.length - i - 1; j++) {
      //time to change their color
      animation.push([j, j + 1]);
      //time to revert their color
      animation.push([j, j + 1]);
      if (ar[j] > ar[j + 1]) {
        //time to change height
        if (j === ar.length - i - 2) {
          animation.push([j, ar[j + 1], j + 1, ar[j], "last"]);
        } else {
          animation.push([j, ar[j + 1], j + 1, ar[j], "none"]);
        }
        var x = ar[j];
        ar[j] = ar[j + 1];
        ar[j + 1] = x;
      } else {
        //that line actually do nothing but to maintain the sequenc
        if (j === ar.length - i - 2) {
          //animation.push([j, ar[j + 1], j + 1, ar[j]], "last");
          animation.push([j, ar[j], j + 1, ar[j + 1], "last"]);
        } else {
          animation.push([j, ar[j], j + 1, ar[j + 1], "none"]);
        }
      }
    }
  }
  return animation;
};
export default Bubble_Sort;
