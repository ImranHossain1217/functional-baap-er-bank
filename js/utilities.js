function getInputFieldValueById(inputId) {
  const inputField = document.getElementById(inputId);
  const inputFieldStr = inputField.value;
  const inputFieldValue = parseFloat(inputFieldStr);
  inputField.value = "";
  return inputFieldValue;
}

function getElementValueById(elementId) {
  const element = document.getElementById(elementId);
  const elementValueStr = element.innerText;
  const elementValue = parseFloat(elementValueStr);
  return elementValue;
}
function setTextValueById(elementId, newValue) {
  const textElement = document.getElementById(elementId);
  return (textElement.innerText = newValue);
}
