function getFirstSelector(selector){
  return document.getElementId(selector)[0];
}

function nestedTarget(){
  document.querySelector('#nested .target');
}
