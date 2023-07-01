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
var q = new Audio("music(17).mp3")
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
var cc= new Audio("music(30).mp3");
const plasto = document.getElementById('p-r');

const musicarray = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,y,z,aa,bb,cc,];
var len = musicarray.length;
const playbtn = document.querySelector("#ply");
var count = 0;
function shuffle(){
    var x = Math.floor(Math.random()*len)+1;
    var z = 0;
    window.z = x;
}
function plae(){
    shuffle();
    musicarray[z].play();
    playbtn.disabled = true;

    musicarray[z].onended = function() {myFunction()};
    function myFunction(){
        plae();
        changebgcolor();
    }

}
var playstate = true;
function pause(){
    if(playstate == true){
        musicarray[z].pause();
        window.playstate = false;
        plasto.innerText = "Resume";
    }
    else{
        musicarray[z].play();
        window.playstate = true;
        plasto.innerText = "Pause";
    }
}
function stop(){
    musicarray[z].pause();
    musicarray[z].currentTime = 0;
    shuffle();
    playbtn.disabled = false;   
}
function volchange(){
    var voluog = document.getElementById('volume').value;
    var volu = parseInt(voluog)/1000;
    console.log(volu);
    musicarray[z].volume = volu;
}
function changebgcolor(){
    const backgroundimg = ["i1.jpg","i2.jpg","i3.jpg","i4.jpg","i5.jpg","i6.jpg","i7.jpg","i8.jpg"];
    var arraay = backgroundimg.length;
    var backgroundrandom = Math.floor(Math.random()* arraay);
    var bodyimg = ("url(" + backgroundimg[backgroundrandom] + ")");
    var rcause = document.querySelector(':root');
    rcause.style.setProperty('--daimf', bodyimg)
  }
function next(){
    musicarray[z].pause();
    musicarray[z].currentTime = 0;
    shuffle();
    plae();
    changebgcolor();
}
function fiveski(){
    var cur = musicarray[z].currentTime;
    musicarray[z].currentTime = cur+5;
}
function fivebac(){
    var cur = musicarray[z].currentTime;
    musicarray[z].currentTime = cur-5;
}
