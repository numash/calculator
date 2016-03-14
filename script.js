"use strict"

function screenWidth(){
    return document.body.clientWidth;
}

function prefferedSize(){
    return screenWidth()/3;
}

function setCalcSize(){
    var prefferedCalcSize = prefferedSize();
    
    var screen = document.getElementById("screen");
    screen.style.width = prefferedCalcSize+"px";
    
    var classList = document.getElementsByClassName("row");
    for (var i = 0; i<classList.length; i++){
        classList[i].style.width = prefferedCalcSize+"px";
    }
}

function setButtonsSettings(){
    var btnsList = document.getElementsByClassName("btn");
    for (var i = 0; i < btnsList.length; i++){
        var btnId = btnsList[i].id;
        $("#"+btnId).addClass("btn-default customBtn");
    }
}

function setSpecialButtonsSettings(){
    var btnsList = document.getElementsByClassName("spec");
    for (var i = 0; i < btnsList.length; i++){
        var btnId = btnsList[i].id;
        $("#"+btnId).hide();
    }
}

function setButtonsOnClick(){
    $("#btnAC").click(onACClick);
    $("#btnPoint").click(onPointClick);
    $("#btnDivide").click(onDivideClick);
    $("#btnMultiple").click(onMultipleClick);
    $("#btnMinus").click(onMinusClick);
    $("#btnPlus").click(onPlusClick);
    $("#btnEqual").click(onEqualClick);
    
    $("#btn0").click(onZeroClick);
    
    $("#btn1").click(onNumClick);
    $("#btn2").click(onNumClick);
    $("#btn3").click(onNumClick);
    $("#btn4").click(onNumClick);
    $("#btn5").click(onNumClick);
    $("#btn6").click(onNumClick);
    $("#btn7").click(onNumClick);
    $("#btn8").click(onNumClick);
    $("#btn9").click(onNumClick);
}

function onLoad(){
    reloadPage();
}

function reloadPage(){
    setCalcSize();
    setButtonsSettings();
    //setSpecialButtonsSettings();
    setButtonsOnClick();
    setScreenValue("0");
}

function showMenu(){
    $('.dropdown').addClass('open');
}

function hideMenu(){
    $('.dropdown').removeClass('open');
}

function menuAction(){
    if ($('.dropdown').hasClass("open")){
        hideMenu();
    } else {
        showMenu();
    }
}

function setScreenValue(val){
    var screen = document.getElementById("screen");
    screen.value = val;
}

function getScreenValue(){
    var screen = document.getElementById("screen");
    return screen.value;
}

function appendScreenValue(val){
    var screen = document.getElementById("screen");
    if (screen.value === "0"){
        screen.value = val;
    } else{
        screen.value += val;
    }
}

function onNumClick(event){
    var value = event.currentTarget.value;
    appendScreenValue(value);
}

function onZeroClick(){
    var screenValue = getScreenValue();
    if (!screenValue || screenValue === "0"){
        setScreenValue("0");
    } else{
        appendScreenValue("0");
    }
}

function onACClick(){
    setScreenValue("0");
}

function pointPermission(){
    var screenValue = getScreenValue();

    if (!screenValue){
        return true;
    }
    
    return screenValue.indexOf(".") === -1;
}

function onPointClick(){
    if(!pointPermission()){
        return;
    }
    
    if(!getScreenValue()){
        setScreenValue("0.");
    } else{
        appendScreenValue(".");
    }
}

function onPlusClick(){
    
}

function onMinusClick(){
    
}

function onDivideClick(){
    
}

function onMultipleClick(){
    
}

function onEqualClick(){
    
}

