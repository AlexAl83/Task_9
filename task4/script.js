const testTextField = document.getElementById('link');

testTextField.addEventListener('click', click);
function click(event) {
  this.textContent = prompt('Введите собственное значение');
  event.preventDefault();
}
