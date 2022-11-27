
let aPlay = (e) => {
    let aKey = document.querySelector(".aKey");
    if (e.key === "a" ){
       aKey.play();
       aKey.currentTime = 0;
       document.querySelector(".animation").classList.add("keyTr"); 
       setTimeout(() => {
        document.querySelector(".animation").classList.remove("keyTr")
    }, 3);

} }

let sPlay = (e) => {
    var sKey = document.querySelector(".sKey");
    if (e.key === "s" ){
       sKey.play();
       sKey.currentTime = 0;
       document.querySelector(".animation1").classList.add("keyTr")
       setTimeout(() => {
        document.querySelector(".animation1").classList.remove("keyTr")
    }, 3);

       
} }

let dPlay = (e) => {
    var dKey = document.querySelector(".dKey");
    if (e.key === "d" ){
       dKey.play();
       dKey.currentTime = 0;
       document.querySelector(".animation2").classList.add("keyTr");
       setTimeout(() => {
        document.querySelector(".animation2").classList.remove("keyTr")
    }, 3);

       
} }
let fPlay = (e) => {
    var fKey = document.querySelector(".fKey");
    if (e.key === "f" ){
       fKey.play();
       fKey.currentTime = 0;
       document.querySelector(".animation3").classList.add("keyTr");
       setTimeout(() => {
        document.querySelector(".animation3").classList.remove("keyTr")
    }, 3);

} }
let gPlay = (e) => {
    var gKey = document.querySelector(".gKey");
    if (e.key === "g" ){
       gKey.play();
       gKey.currentTime = 0;
       document.querySelector(".animation4").classList.add("keyTr");
       setTimeout(() => {
        document.querySelector(".animation4").classList.remove("keyTr")
    }, 3);

} }
let hPlay = (e) => {
    var hKey = document.querySelector(".hKey");
    if (e.key === "h" ){
       hKey.play();
       hKey.currentTime = 0;
       document.querySelector(".animation5").classList.add("keyTr");
       setTimeout(() => {
        document.querySelector(".animation5").classList.remove("keyTr")
    }, 3);

} }
let jPlay = (e) => {
    var jKey = document.querySelector(".jKey");
    if (e.key === "j" ){
       jKey.play();
       jKey.currentTime = 0;
       document.querySelector(".animation6").classList.add("keyTr");
       setTimeout(() => {
        document.querySelector(".animation6").classList.remove("keyTr")
    }, 3);

} }

document.addEventListener("keypress", e => {
    aPlay(e);
    
    sPlay(e);
    dPlay(e);
    fPlay(e);
    gPlay(e);
    hPlay(e);
    jPlay(e);
} 
)
