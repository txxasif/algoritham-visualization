const Insertion_Sort = (arr) => {
  var ani = [];
  var ar = arr;
  var n = arr.length;
  for (let i = 1; i < n; i++) {
    const key = ar[i];
    var j = i - 1;
    //ani.push([i,-1]);
    while (j >= 0 && key < ar[j]) {
      //new code
      ani.push([j + 1, j]);
      ani.push([j + 1, j]);
      ani.push([j + 1, ar[j]]);
      //new code ends here
      // ani.push([j+1,ar[j]]);
      ar[j + 1] = ar[j];
      j--;
    }
    ani.push([j + 1, i]);
    ani.push([j + 1, i]);
    ani.push([j + 1, key]);
    ar[j + 1] = key;
  }
  return ani;
};
export default Insertion_Sort;
