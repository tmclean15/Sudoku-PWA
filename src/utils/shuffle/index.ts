/**
 * Shuffles an array in-place using the Fisher-Yates shuffling algorithm
 * @param array An array of any type and any length
 */
function shuffle(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

export default shuffle
