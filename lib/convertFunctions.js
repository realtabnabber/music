
function convertGuitarToPiano(){
  var inputText = getInputText();
  var outputText = inputText + "AAAAAA!!!!!";
  setOutputText(outputText);
}

function getInputText(){
  return document.forms["theForm"].InputText.value;
}

function setOutputText(newText){
  document.forms["theForm"].OutputText.value = newText;
  
}
