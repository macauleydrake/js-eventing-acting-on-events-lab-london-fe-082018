var dodger = document.getElementById('dodger')
function moveDodgerRight() {
  
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)
  
  if (left > 0) {
    dodger.style.left = `${left + 1}px`
  }
}

document.addEventListener("keydown", (e)=>
if (e.which === 39) {
moveDodgerRight()}
)
