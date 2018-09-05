const size = array => array.length

const addValue = (array, value) => array.push(value)

const isEmpty = array => array.length === 0

const swap = (array, index1, index2) => {
  let aux = array[index1]
  array[index1] = array[index2]
  array[index2] = aux
}
module.exports = {
  size,
  addValue,
  isEmpty,
  swap
}
