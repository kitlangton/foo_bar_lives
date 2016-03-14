var combSort = function(array) {
  // Set the initial gap and shrink factor (usually 1.3 according to the wiki)
  var gap = array.length - 1;
  var shrinkFactor = 1.3;

  // set the swap checker
  var swapped = false;

  // the other loop
  while (gap > 1 || !swapped) {

    // set the swap to false
    swapped = false;

    // the inner loop through the array
    for (var i = 0; i + gap < array.length; ++i) {

      // swap if the later element is greater than the first
      if (array[i + gap] < array[i]) {

        // swap
        var temp = array[i + gap]
        array[i + gap] = array[i]
        array[i] = temp
        // mark swapped, for outer loop
        swapped = true
      }
    }

    // reduce the gap by the shrinkFactor
    gap = Math.max(Math.floor(gap / (shrinkFactor)), 1);
  }

  //return the final array
  return array;
};

