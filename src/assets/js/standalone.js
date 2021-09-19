const feed = document.querySelector('.feed')

if (navigator.standalone === true) {
  feed.remove()
}
