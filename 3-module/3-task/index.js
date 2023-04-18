function camelize(str) {

  const arr = str.split("");

  const result = []

  for (let i = 0; i < arr.length; i++) {

    if (arr[i - 1] === "-") {
      result.push(arr[i].toUpperCase())
    } else if (arr[i] !== "-") {
      result.push(arr[i])
    }

  }

  return result.join("")

}


console.log(camelize(str));