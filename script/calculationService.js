"use strict";

function getCalculationService() {
    var calculationService = {};
    var bufferedValue = 0;
    var postponedOperation;

    calculationService.setbufferedValueValue = function(value) {
        bufferedValue = value;
    }

    calculationService.getbufferedValueValue = function(){
        return bufferedValue;
    }
    
    calculationService.reset = function(){
        bufferedValue = 0;
        postponedOperation = null;
    }
    
    calculationService.setPostponedOperation = function(operation){
        postponedOperation = operation;
    }
    
    calculationService.getPostponedOperation = function(){
        return postponedOperation;
    }
    
    function calculate(secondOperand){
        switch(postponedOperation){
            case "+":{
                plusbufferedValue(secondOperand);
                break;
            }
            case "-":{
                minusbufferedValue(secondOperand);
                break;
            }
            case "*":{
                multiplebufferedValue(secondOperand);
                break;
            }
            case "/":{
                dividebufferedValue(secondOperand);
                break;
            }
            case "=":{
                bufferedValue = +secondOperand;
                break;
            }
        }
    }
    
    calculationService.applyPostponedOperation = function(operation, secondOperand){
        if (postponedOperation){
            calculate(secondOperand);
        } else{
            bufferedValue = +secondOperand;
        }
        postponedOperation = operation;
        return bufferedValue;
    }
    
    function plusbufferedValue(value){
        bufferedValue += (+value);
    }
    
    function minusbufferedValue(value){
        bufferedValue -= (+value);
    }
    
    function multiplebufferedValue(value){
        bufferedValue *= (+value);
    }
    
    function dividebufferedValue(value){
        bufferedValue /= (+value);
    }

    return calculationService;
}