let Jeu = function() {
  this.elt = document.createElement("div");
  this.elt.id = "jeu";
  this.elt.classList.add("jeu");
  document.body.appendChild(this.elt);
}
new Jeu();




let Player = function() {
  this.elt = document.createElement("div");
  this.elt.id = "player";
  this.elt.classList.add("player");
  jeu.appendChild(this.elt);
}
let player = new Player();

let playe = document.getElementById('player');
let reqID;


document.addEventListener("keydown", function(e){

  var keyCode = e.keyCode;
if (keyCode == 39) {
  rightAnimation();
}else if (keyCode == 37) {
  leftAnimation();
}

});
function rightAnimation(){
  playe.style.left = (playe.offsetLeft += 6) + "px";
  playe.style.transform = "scaleX(1)";
}
function stopAnimation(){
  reqID = window.cancelAnimationFrame(reqID);
}
function leftAnimation(){
  playe.style.left = (playe.offsetLeft -= 6) + "px";
  playe.style.transform = "scaleX(-1)";
  // reqID = window.requestAnimationFrame(leftAnimation);
}

let ennemie = function(id){
  this.elt = document.createElement("div");
  this.elt.id = id;
  this.elt.classList.add("ennemie");
  jeu.appendChild(this.elt);
}
let ennemie1 = new ennemie("ennemie1");
let ennemie2 = new ennemie("ennemie2");
let ennemie3 = new ennemie("ennemie3");
let ennemie4 = new ennemie("ennemie4");

// function DownAnimation(){
//   ennemi.style.top = (ennemi.offsetTop += 1) + "px";
//   reqID = window.requestAnimationFrame(DownAnimation);
// }
// function UpAnimation(){
//   ennemi.style.top = (ennemi.offsetTop -= 1) + "px";
//   reqID = window.requestAnimationFrame(UpAnimation);
// }


let ennemi = document.getElementById('ennemie1');


function LaunchAnimation(ennemie, pas){
  let position = 0;
  pas = (Math.random()* (8 - 2) + 2);
  if (pas > 0) {
    pas = -pas;
  }

  function animation(){
    if (position <= 0) {
      pas = -pas;
    }
    else if (position >= 400){
      pas = -pas;
    }
    position += pas;
    ennemie.style.top = position + "px";
    window.requestAnimationFrame(animation);
  }
  animation();
}

let ennemie1_elt = document.getElementById('ennemie1');
LaunchAnimation(ennemie1_elt);

let ennemie2_elt = document.getElementById('ennemie2');
LaunchAnimation(ennemie2_elt);

let ennemie3_elt = document.getElementById('ennemie3');
LaunchAnimation(ennemie3_elt);

let ennemie4_elt = document.getElementById('ennemie4');
LaunchAnimation(ennemie4_elt);

let goal = function(){
  this.elt = document.createElement("div");
  this.elt.id = "goal";
  this.elt.classList.add("goal");
  jeu.appendChild(this.elt);
}
new goal();

var move = document.getElementsByClassName('player');
