// const feed = document.querySelector('.feed')

// if (navigator.standalone === true) {
//   feed.remove()
// }

const openRSS = feed => {
  window.open(`${window.origin}/${feed}`)
}
