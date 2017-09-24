function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function increaseRankBy(n){
  var selector = document.querySelector('.ranked-list li');
  for (let i=0;i<selector.length;i++){
    selector+= parseInt(n);
  }

}
