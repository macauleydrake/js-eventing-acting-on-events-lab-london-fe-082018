var dodger = document.getElementById('dodger')
function moveDodgerRight(e) {
 
  if (e.which === 39)
  {
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(rightNumbers, 10)
  }
  if (right > 0) {
    dodger.style.left = "${right - 1}px"
  }
}
document.addEventListener("keydown", (e)=>moveDodgerRight(e)
)
