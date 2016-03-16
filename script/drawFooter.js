"use strict";

function drawFooter(number){
    var footer = document.getElementById("footer");
    var ponyType = null;
    var ponyNumber = Math.floor(number);
    var balance = number - ponyNumber;
    
    function setPonyType(ponyNumber){
        if (ponyNumber >= 1){
            if (ponyNumber > 12){
                ponyType = "very happy";
            } else{
                ponyType = "happy";
            }
        } else {
            ponyType = "sad";
        }
    }
    
    function createPonyImg(imgName){
        var img = document.createElement("img");
        img.src = "images/" + imgName + ".png";
        img.alt = imgName;
        img.align = "center";
        return img;
    }
    
    function showDescription(){
        footer.children[0].style.visibility = "visible";
    }
    
    setPonyType(ponyNumber);
    
    switch(ponyType){
        case "sad":{
            var img = createPonyImg("sadPony");
            showDescription();
            footer.appendChild(img);
            break;
        }
        case "happy":{
            for (var i = 0; i < ponyNumber; i++){
                var img = createPonyImg("happyPony");
                showDescription();
                footer.appendChild(img);
            }
            break;
        }
        case "very happy":{
            var img = createPonyImg("veryHappyPony");
            showDescription();
            footer.appendChild(img);
            break;
        }
    }
}


