function getFirstSelector(selector){
  return document.getElementByTagName(selector)[0];
}

function nestedTarget(){
  document.querySelector('#nested .target');
}
