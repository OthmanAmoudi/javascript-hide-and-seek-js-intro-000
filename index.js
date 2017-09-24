function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function increaseRankBy(n){
  var selector = document.querySelectorAll('.ranked-list li');
  for (let i=0;i<selector.length;i++){
    let number = parseInt(selector[i].textContent,10)
    selector[i].textContent = number + n;
  }
}
