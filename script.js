let age

// adds an event listener to the button, calls function "checker" when pressed.
document.getElementById('button').addEventListener('click', checker)

function checker () {
  // obataining and converting user input to floating point number
  age = document.getElementById('input').value
  age = parseFloat(age)
  // checks if user input is more than 17, more than 13, or more than 5, and displays the assigned string, the thanks the user for their input.
  if (age >= 17) {
    document.getElementById('result').innerHTML = 'You can watch R rated movies.'
  } else if (age >= 13) {
    document.getElementById('result').innerHTML = 'You can watch PG rated movies.'
  } else if (age >= 5) {
    document.getElementById('result').innerHTML = 'You can watch G rated movies.'
  } else {
    document.getElementById('result').innerHTML = 'You are too young for most things.'
  }
  document.getElementById('thanks').innerHTML = 'Thanks for verifying your age.'
}
