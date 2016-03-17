describe("calculationService", function() {

    var calculationService;

    beforeEach(function() {
        calculationService = getCalculationService();
    });

    describe("calculate function", function() {

        it("returns the same number if operator was undefined", function() {

            var operand = 5;
            var expectedResult = 5;
            var actualResult = calculationService.applyPostponedOperation("*", operand).value;
            assert.equal(expectedResult, actualResult);

        });

        it("returns operation result", function() {

            calculationService.setBufferedValue(2);
            calculationService.setPostponedOperation("+");
            var secondOperand = 5;
            var expectedResult = 7;
            var actualResult = calculationService.applyPostponedOperation("=", secondOperand).value;
            assert.equal(expectedResult, actualResult);

        });

        it("returns right result even if operator is being set several times", function() {

            calculationService.setBufferedValue(2);
            calculationService.setPostponedOperation("+");
            calculationService.setPostponedOperation("/");
            calculationService.setPostponedOperation("*");

            var secondOperand = 5;
            var expectedResult = 10; //2*5
            var actualResult = calculationService.applyPostponedOperation("=", secondOperand).value;
            assert.equal(expectedResult, actualResult);

        });

        it("throws error when dividing by zero", function() {

            calculationService.setBufferedValue(2);
            calculationService.setPostponedOperation("/");
            var secondOperand = 0;
            var expectedResult = true;
            var actualResult = calculationService.applyPostponedOperation("=", secondOperand).isError;
            assert.equal(expectedResult, actualResult);

        });

    });
});