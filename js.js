//Loading the music add a line here and then add that var in musciarray
var a = new Audio("music(1).mp3");
var b = new Audio("music(2).mp3");
var c = new Audio("music(3).mp3");
var d = new Audio("music(4).mp3");
var e = new Audio("music(5).mp3");
var f = new Audio("music(6).mp3");
var g = new Audio("music(7).mp3");
var h = new Audio("music(8).mp3");
var i = new Audio("music(9).mp3");
var j = new Audio("music(10).mp3");
var k = new Audio("music(11).mp3");
var l = new Audio("music(12).mp3");
var m = new Audio("music(13).mp3");
var n = new Audio("music(14).mp3");
var o = new Audio("music(15).mp3");
var p = new Audio("music(16).mp3");
var q = new Audio("music(17).mp3");
var r = new Audio("music(18).mp3");
var s = new Audio("music(19).mp3");
var t = new Audio("music(20).mp3");
var u = new Audio("music(21).mp3");
var v = new Audio("music(22).mp3");
var w = new Audio("music(23).mp3");
var x = new Audio("music(24).mp3");
var y = new Audio("music(25).mp3");
var z = new Audio("music(26).mp3");
var aa = new Audio("music(27).mp3");
var bb = new Audio("music(28).mp3");



const disbutton = document.querySelector('#btn-play');
const paubutton = document.querySelector('#btn-pause');
const stobutton = document.querySelector('#btn-stop');
const disableButton = () => {
  console.log("va");
  disbutton.disabled = true;

};
const enableButton = () => {
    console.log("va");
    disbutton.disabled = false;
  
  };
disbutton.addEventListener('click', disableButton);
paubutton.addEventListener('click', enableButton);
stobutton.addEventListener('click', enableButton);


//musicarray
var musicarray = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,bb];
//shuffling musicarray
function shuffling(){
    let shuffled = musicarray
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
    musicarray = shuffled;
}
var  z = 0;
var ml = musicarray.length;
const pausem = document.getElementById("btn-pause");
const stopm = document.getElementById("btn-stop");
function plae() {
    
//pausing onclink of a button
    pausem.onclick = function(){
        musicarray[z].pause();
    }
//stoping onclick of a button
    stopm.onclick = function(){
        musicarray[z].pause();
        musicarray[z].currentTime = 0;

    }
//playing onclick play button
    musicarray[z].play();  
    musicarray[z].onended = function(){ 
        z = z+1;
        musicarray[z].play();
 
    };
}
