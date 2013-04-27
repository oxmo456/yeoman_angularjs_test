'use strict';

angular.module('evalCalcApp')
    .factory('EvalCalc', [function () {

        return {
            calc: function (expression) {
                var evalResult;
                try {
                    evalResult = eval(expression);
                } catch (exception) {
                    evalResult = null;
                }
                return {result: evalResult, expression: expression};
            }
        };
    }]);
