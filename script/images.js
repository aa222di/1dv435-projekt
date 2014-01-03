var images = document.querySelector("#images");
var imgcount = 0;
var imagearr = ["img/karlhattsned.png","img/Karlscen.png", "img/karlscenbackslick.png", "img/karlscenflera.png", "img/karlhatt.png"];
var interval = setInterval(changeImage, 5000);
var prev = document.querySelector("#prev");
var paus = document.querySelector("#paus");
var next = document.querySelector("#next");



function changeImage (){
    images.setAttribute("src", imagearr[imgcount]);
    imgcount += 1;
    
    if (imgcount > imagearr.length - 1){
        imgcount = 0;
    }
}

function changeImageOnclick (button){
    clearInterval(interval);
    //paus.classList.add("paus");
    
    if (button.value === "prev"){
        if(imgcount === 0){
         imgcount = imagearr.length -1;   
        }
        
        else{
            imgcount-= 1;
        }
    }
    
    else {
        if(imgcount === imagearr.length -1){
            imgcount = 0;
        }
        else {
            imgcount += 1;
        }
    }
    images.setAttribute("src", imagearr[imgcount]);
}

prev.onclick = function(){
    changeImageOnclick(this);
};

next.onclick = function(){
    changeImageOnclick(this);
};

paus.onclick = function(){
    //paus.classList.toggle("paus");
    
    //if (paus.className === "paus"){
        clearInterval(interval);
    //}
    
    /*else {
        interval= setInterval (changeImage, 1000);
    }*/
};