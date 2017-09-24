function getFirstSelector(selector){
  return document.getElementByName(selector)[0];
}

function nestedTarget(){
  document.querySelector('#nested .target');
}
