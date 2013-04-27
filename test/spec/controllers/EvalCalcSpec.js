'use strict';

describe('Controller: EvalCalcCtrl', function () {

    var controller;
    var scope;

    beforeEach(function () {
        this.addMatchers({
            toBeAFunction: function () {
                return typeof this.actual == 'function';
            },
            toBeAnArray: function () {
                return toString.apply(this.actual) == '[object Array]';
            }


        });
    });

    beforeEach(module('evalCalcApp'));

    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        controller = $controller('EvalCalcCtrl', {
            $scope: scope
        });
    }));


    it("should be properly injected", function () {
        expect(controller).toBeDefined();
    });

    it("should provide a calc function", function () {
        expect(scope.calc).toBeDefined();
        expect(scope.calc).toBeAFunction();
    });

    describe("calc function", function () {


        it("should increase evaluatedExpressions Array size", function () {
            scope.calc(null);
            expect(scope.evaluatedExpressions.length).toBe(1);
            scope.calc(null);
            expect(scope.evaluatedExpressions.length).toBe(2);
        });

        it("should add the entered expression at the beginning of the evaluatedExpressions Array", function () {
            var expression = "hello";
            scope.calc(expression);
            expect(scope.evaluatedExpressions[0].expression).toBe(expression);
            expression = null;
            scope.calc(expression);
            expect(scope.evaluatedExpressions[0].expression).toBe(expression);
            expression = "throw new Error()";
            scope.calc(expression);
            expect(scope.evaluatedExpressions[0].expression).toBe(expression);
        });


    });

    it("should provide a deleteEvaluatedExpression function", function () {
        expect(scope.deleteEvaluatedExpression).toBeDefined();
        expect(scope.deleteEvaluatedExpression).toBeAFunction();
    });

    describe("deleteEvaluatedExpression function", function () {

        it("should decrease evaluatedExpressions Array size", function () {
            scope.calc(null);
            scope.calc(null);
            scope.calc(null);
            scope.deleteEvaluatedExpression(scope.evaluatedExpressions[2]);
            expect(scope.evaluatedExpressions.length).toBe(2);
            scope.deleteEvaluatedExpression(scope.evaluatedExpressions[1]);
            expect(scope.evaluatedExpressions.length).toBe(1);
            scope.deleteEvaluatedExpression(scope.evaluatedExpressions[0]);
            expect(scope.evaluatedExpressions.length).toBe(0);

        });

        it("should remove the right expression", function () {
            scope.calc("'A'");
            var expressionA = scope.evaluatedExpressions[0];
            scope.calc("'B'");
            var expressionB = scope.evaluatedExpressions[0];
            scope.calc("'C'");
            var expressionC = scope.evaluatedExpressions[0];
            scope.calc("'D'");
            var expressionD = scope.evaluatedExpressions[0];


            scope.deleteEvaluatedExpression(expressionA);
            expect(scope.evaluatedExpressions[0]).toBe(expressionD);
            expect(scope.evaluatedExpressions[1]).toBe(expressionC);
            expect(scope.evaluatedExpressions[2]).toBe(expressionB);

            scope.deleteEvaluatedExpression(expressionC);
            expect(scope.evaluatedExpressions[0]).toBe(expressionD);
            expect(scope.evaluatedExpressions[1]).toBe(expressionB);

            scope.deleteEvaluatedExpression(expressionD);
            expect(scope.evaluatedExpressions[0]).toBe(expressionB);


        });


        it("should not decrease evaluatedExpressions Array size if expression is unknown", function () {
            scope.calc(null);
            scope.calc(null);
            scope.calc(null);
            scope.deleteEvaluatedExpression("hello");
            expect(scope.evaluatedExpressions.length).toBe(3);
            scope.deleteEvaluatedExpression(null);
            expect(scope.evaluatedExpressions.length).toBe(3);
            scope.deleteEvaluatedExpression({expression: null, result: null});
            expect(scope.evaluatedExpressions.length).toBe(3);
        });

    });

    it("should publish an Array of executed expression", function () {
        expect(scope.evaluatedExpressions).toBeDefined();
        expect(scope.evaluatedExpressions).toBeAnArray();
    });

});
