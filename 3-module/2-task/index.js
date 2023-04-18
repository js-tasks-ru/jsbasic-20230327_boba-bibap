let arr = [5, 3, 8, 1];

function filterRange(arr, a, b) {
  
   let result = [];

    return result = arr.filter(item => {
    if (item >= a && item <= b ) {
      return item
    }
  })
 
}

console.log(filterRange(arr,1,4))