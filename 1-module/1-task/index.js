function factorial(n) {

  if (n < 0) {
    return "Число должно быть больше 0"
  }

  let result = 1;

  while (n) {
    result *= n--;
  }

  return result;
}



