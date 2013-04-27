'use strict';

angular.module('evalCalcApp')
    .controller('EvalCalcCtrl', ['$scope', 'EvalCalc', function ($scope, EvalCalc) {

        $scope.evaluatedExpressions = [];

        $scope.calc = function (expression) {
            var result = EvalCalc.calc(expression);
            $scope.evaluatedExpressions.unshift(result);
            $scope.expression = "";
        };

        $scope.deleteEvaluatedExpression = function (evaluatedExpression) {
            function indexOf(obj, array) {
                var arrayLength = array.length;
                for (var i = 0; i < arrayLength; i++) {
                    if (array[i] === obj) {
                        return i;
                    }
                }
                return -1;
            }

            var index = indexOf(evaluatedExpression, $scope.evaluatedExpressions);
            if (index >= 0) {
                $scope.evaluatedExpressions.splice(index, 1);
            }
        };

    }]);
