var dodger = document.getElementById('dodger')
function moveDodgerRight(e) {
  if (e.which === 39) {
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)
  }
  if (left > 0) {
    dodger.style.left = `${left + 1}px`
  }
}

document.addEventListener("keydown", (e)=>moveDodgerRight(e)
)
