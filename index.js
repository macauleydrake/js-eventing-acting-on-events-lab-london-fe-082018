var dodger = document.getElementById('dodger')
function moveDodgerRight(e) {
 
  if (e.which === 39)
  {
  var rightNumbers = dodger.style.right.replace('px', '')
  var right = parseInt(rightNumbers, 10)
  console.log(rightNumbers)
  if (right > 0) {
    console.log("inside right")
    dodger.style.right = "${right - 1}px"
  }}
}
document.addEventListener("keydown", (e)=>moveDodgerRight(e)
)
