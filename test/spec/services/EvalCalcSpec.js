'use strict';

describe('Service: EvalCalc', function () {
    var EvalCalc;

    beforeEach(module('evalCalcApp'));

    beforeEach(function () {
        this.addMatchers({
            toBeAFunction: function () {
                return typeof this.actual == 'function';
            }
        });
    });

    beforeEach(inject(function (_EvalCalc_) {
        EvalCalc = _EvalCalc_;
    }));


    it("should be properly injected", function () {
        expect(EvalCalc).toBeDefined();
    });


    it("should be have a calc method", function () {
        expect(EvalCalc.calc).toBeDefined();
        expect(EvalCalc.calc).toBeAFunction();
    });


    describe("calc method", function () {

        it("should never throw an exception", function () {
            function test() {
                EvalCalc.calc("throw new Error()");
                EvalCalc.calc("he.ll.o()");
            }

            expect(test).not.toThrow();
        });

        it("should always return an object", function () {
            var result = EvalCalc.calc(null);
            expect(result).toBeDefined();
            result = EvalCalc.calc("");
            expect(result).toBeDefined();
            result = EvalCalc.calc("hello");
            expect(result).toBeDefined();
            result = EvalCalc.calc("'hello'");
            expect(result).toBeDefined();
        });

        describe("returned object", function () {

            it("should have property expression containing the input expression", function () {
                var expression;
                var result;
                expression = null;
                result = EvalCalc.calc(expression);
                expect(result.expression).toBe(expression);
                expression = "hello()";
                result = EvalCalc.calc(expression);
                expect(result.expression).toBe(expression);
                expression = "'this is a string'";
                result = EvalCalc.calc(expression);
                expect(result.expression).toBe(expression);
                expression = "throw new Error()";
                result = EvalCalc.calc(expression);
                expect(result.expression).toBe(expression);
            });


            it("should have property result containing the result of evaluating the expression",
                function () {
                    var expression;
                    var result;

                    expression = "1 + 1";
                    result = EvalCalc.calc(expression);
                    expect(result.result).toBe(2);

                    expression = "100 - 200";
                    result = EvalCalc.calc(expression);

                    expect(result.result).toBe(-100);

                    expression = "'this is a string' + ' concatenated'";
                    result = EvalCalc.calc(expression);
                    expect(result.result).toBe("this is a string concatenated");
                });

            it("should have property result containing null if : the expression can't be evaluated or throw an exception",
                function () {
                    var expression;
                    var result;
                    expression = "throw new Error()";
                    result = EvalCalc.calc(expression);
                    expect(result.result).toBe(null);
                    expression = "monkey.hello()";
                    result = EvalCalc.calc(null);
                });


        });


    });


});
