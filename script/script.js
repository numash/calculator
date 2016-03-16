"use strict"

var calculationService = getCalculationService();

function setCalcSize(){
    var prefferedCalcSize = (document.body.clientWidth)/3;
    
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
        $("#"+btnId).addClass("customBtn");
        //button-default 
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
    $("#btnDivide").click(onOperatorClick);
    $("#btnMultiple").click(onOperatorClick);
    $("#btnMinus").click(onOperatorClick);
    $("#btnPlus").click(onOperatorClick);
    $("#btnEqual").click(onOperatorClick);
    
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

var isOperator = false;

function onNumClick(event){
    var value = event.currentTarget.value;
    if(!isOperator){
        appendScreenValue(value);
    } else{
        setScreenValue(value);
    }
    isOperator = false;
    eraseFooter();
}

function onZeroClick(){
    var screenValue = getScreenValue();
    if(!isOperator){
        if (!screenValue || screenValue === "0"){
        setScreenValue("0");
        } else{
            appendScreenValue("0");
        }
    } else{
        setScreenValue("0");
    }
    isOperator = false;
    eraseFooter();
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
    if (!isOperator){
        if(getScreenValue() === "0"){
            setScreenValue("0.");
        } else{
            appendScreenValue(".");
        }
    } else {
        setScreenValue("0.");
    }
    isOperator = false;
}

function onACClick(){
    setScreenValue("0");
    calculationService.reset();
    isOperator = false;
    eraseFooter();
}

function onOperatorClick(event){
    var value = event.currentTarget.value;
    if (isOperator){
        calculationService.setPostponedOperation(value); 
    } else{
        isOperator = true;
        var result = calculationService.applyPostponedOperation(value, getScreenValue());
        setScreenValue(result);
        drawFooter(result);
    }
}


