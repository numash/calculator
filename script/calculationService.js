"use strict";

function getCalculationService() {
    var calculationService = {};
    var bufferedValue = 0;
    var postponedOperation;

    calculationService.setBufferedValue = function(value) {
        bufferedValue = value;
    }

    calculationService.getBufferedValue = function() {
        return bufferedValue;
    }

    calculationService.reset = function() {
        bufferedValue = 0;
        postponedOperation = null;
    }

    calculationService.setPostponedOperation = function(operation) {
        postponedOperation = operation;
    }

    calculationService.getPostponedOperation = function() {
        return postponedOperation;
    }

    function calculate(secondOperand) {

        try {
            switch (postponedOperation) {
                case "+":
                    {
                        plusBufferedValue(secondOperand);
                        break;
                    }
                case "-":
                    {
                        minusBufferedValue(secondOperand);
                        break;
                    }
                case "*":
                    {
                        multipleBufferedValue(secondOperand);
                        break;
                    }
                case "/":
                    {
                        divideBufferedValue(secondOperand);
                        break;
                    }
                case "=":
                    {
                        bufferedValue = +secondOperand;
                        break;
                    }
                default:
                    {
                        throw new Error("unknown operation");
                    }
            }
        }
        catch (e) {
            calculationService.reset();
            return {
                value: null,
                isError: true,
                errorMessage: e.message
            };
        }

        return {
            value: bufferedValue,
            isError: false,
            errorMessage: null
        };
    }

    calculationService.applyPostponedOperation = function(operation, secondOperand) {
        var result;

        if (postponedOperation) {
            result = calculate(secondOperand);
        }
        else {
            bufferedValue = +secondOperand;
            result = {
                value: bufferedValue,
                isError: false,
                errorMessage: null
            };
        }
        postponedOperation = operation;
        return result;
    }

    function plusBufferedValue(value) {
        bufferedValue += (+value);
    }

    function minusBufferedValue(value) {
        bufferedValue -= (+value);
    }

    function multipleBufferedValue(value) {
        bufferedValue *= (+value);
    }

    function divideBufferedValue(value) {
        if (+value === 0) {
            throw new Error("Cannot divide by zero");
        }
        bufferedValue /= (+value);
    }

    return calculationService;
}