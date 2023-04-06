function sumSalary(salaries) {

  return Object.values(salaries).reduce((acc,val) => {
    if (isFinite(val)) {
      acc += val
    }
    return acc
  }, 0)

}
