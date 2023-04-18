function getMinMax(str) {
  let newarr = str.split(" ").filter((item) => isFinite(item));
  let result = {
    min: Math.min(...newarr),
    max: Math.max(...newarr),
  };
  return result;
}
