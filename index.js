function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function increaseRankBy(n){
  var selector = document.querySelector('.ranked-list li');
  for (let i=0;i<selector.length;i++){
    var number = parseInt(selector[i].textContent,10)
    selector[i].textContent = num + n;
  }
}