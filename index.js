var dodger = document.getElementById('dodger')
function moveDodgerRight(e) {
 
  if (e.which === 39)
  {
     console.log(e)
  var rightNumbers = dodger.style.right.replace('px', '')
  var right = parseInt(rightNumbers, 10)
  }
  if (right > 0) {
    dodger.style.right = `${right - 1}px`
  }
}
document.addEventListener("keydown", (e)=>moveDodgerRight(e)
)
