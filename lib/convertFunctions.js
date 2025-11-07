
function convertGuitarToPiano(){
  var inputText = getInputText();
  var outputText = inputText + "AAAAAA!!!!!";
  setOutputText(outputText);
}

function getInputText(){
  return document.forms["tnForm"].inputText.value;
}

function setOutputText(newText){
  document.forms["tnForm"].outputText.value = newText;
  
}

function selectAllInput() {
    document.forms["tnForm"].inputText.select();
}