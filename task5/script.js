const inputText = document.getElementById('inputText');
const duplicateField = document.getElementById('duplicateField');
const btn = document.getElementById('btn');

inputText.addEventListener('input', () => {
  duplicateField.textContent = inputText.value;
});

btn.addEventListener('click', click);
function click(event) {
  console.log(inputText.value);
  inputText.value = '';
  duplicateField.textContent = '';
  event.preventDefault();
}
