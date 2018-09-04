const size = array => array.length

const addValue = (array, value) => array.push(value)

const isEmpty = array => array.length === 0

module.exports = {
  size,
  addValue,
  isEmpty
}
