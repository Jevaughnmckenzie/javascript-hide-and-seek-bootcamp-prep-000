function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector("#nested .target");
}

function increaseRankBy(n){
  var list = document.querySelectorAll(".ranked-list");
  for (var i = 0; i < list.length; i++){
    list[i].innerHTML = (n + parseInt(list[i].innerHTML)).toString();
  }
}

function deepestChild() {
  var current = document.querySelector("#grand-node")
  var nextChild = null;

  while (true) {

    if (current.querySelector('div') == null) {
      return current;
    } else {
      current = current.querySelector('div');
    }
  }

}
