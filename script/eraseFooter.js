"use strict";

function eraseFooter(){
    var footer = document.getElementById("footer");
    
    var childrenNum = footer.childElementCount;
    for (var i = childrenNum; i > 1; i--){      //child[0] - <p>, not pony
        footer.removeChild(footer.childNodes[i]);
    }
    
    footer.children[0].style.visibility = "hidden"; 
}
