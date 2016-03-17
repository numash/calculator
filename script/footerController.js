"use strict";

function drawFooter(number) {
    var footer = document.getElementById("footer");
    var ponyType = null;
    var ponyNumber = Math.floor(number);

    function setPonyType(ponyNumber) {
        if (ponyNumber >= 1) {
            if (ponyNumber > 12) {
                ponyType = "very happy";
            }
            else {
                ponyType = "happy";
            }
        }
        else {
            ponyType = "sad";
        }
    }

    function createPonyImg(imgName) {
        var img = document.createElement("img");
        img.src = "images/" + imgName + ".png";
        img.alt = imgName;
        img.align = "center";
        return img;
    }

    function showDescription(value) {
        var p = footer.children[0];
        p.innerHTML += value;
        p.style.visibility = "visible";
    }

    //start of the function
    eraseFooter();

    setPonyType(ponyNumber);

    switch (ponyType) {
        case "sad":
            {
                var img = createPonyImg("sadPony");
                showDescription(" no pony :(");
                footer.appendChild(img);
                break;
            }
        case "happy":
            {
                showDescription(" the number of ponies:");
                for (var i = 0; i < ponyNumber; i++) {
                    var img = createPonyImg("happyPony");
                    footer.appendChild(img);
                }
                break;
            }
        case "very happy":
            {
                var img = createPonyImg("veryHappyPony");
                showDescription(" so many ponies!");
                footer.appendChild(img);
                break;
            }
    }
}

function eraseFooter() {
    var footer = document.getElementById("footer");
    var p = footer.children[0]; //paragraph with description

    var childrenNum = footer.childElementCount;
    for (var i = childrenNum - 1; i > 0; i--) { //child[0] - <p>, not pony
        footer.removeChild(footer.children[i]);
    }

    p.innerHTML = "That is"; //came back to old value
    p.style.visibility = "hidden";
}
