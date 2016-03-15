"use strict";

function getCalculationService() {
    var calculationService = {};
    var operand = 0;
    var postponedOperation;

    calculationService.setOperandValue = function(value) {
        operand = value;
    }

    calculationService.getOperandValue = function(){
        return operand;
    }
    
    calculationService.reset = function(){
        operand = 0;
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
                plusOperand(secondOperand);
                break;
            }
            case "-":{
                minusOperand(secondOperand);
                break;
            }
            case "*":{
                multipleOperand(secondOperand);
                break;
            }
            case "/":{
                divideOperand(secondOperand);
                break;
            }
            case "=":{
                operand = +secondOperand;
                break;
            }
        }
    }
    
    calculationService.applyPostponedOperation = function(operation, secondOperand){
        if (postponedOperation){
            calculate(secondOperand);
        } else{
            operand = +secondOperand;
        }
        postponedOperation = operation;
        return operand;
    }
    
    function plusOperand(value){
        operand += (+value);
    }
    
    function minusOperand(value){
        operand -= (+value);
    }
    
    function multipleOperand(value){
        operand *= (+value);
    }
    
    function divideOperand(value){
        operand /= (+value);
    }

    return calculationService;
}