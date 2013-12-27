var images = document.querySelector("#images");
var imgcount = 0;
var imagearr = ["http://www.pisceandelusions.org/mymedia/gallerycontent/photography/fog/spring_morning_enchantment_mb_large.jpg","http://www.pisceandelusions.org/mymedia/gallerycontent/photography/birds/many_eyes_of_a_peacock_mb_large.jpg", "http://www.pisceandelusions.org/mymedia/gallerycontent/photography/coastal/persistance_time_solitude_mb_large.jpg", "http://www.pisceandelusions.org/mymedia/gallerycontent/photography/sunrise/myrtle_beach_sunrise_mb_large.jpg"];
var interval = setInterval(changeImage, 1000);
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
    paus.classList.add("paus");
    
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
    paus.classList.toggle("paus");
    
    if (paus.className === "paus"){
        clearInterval(interval);
    }
    
    else {
        interval= setInterval (changeImage, 1000);
    }
};