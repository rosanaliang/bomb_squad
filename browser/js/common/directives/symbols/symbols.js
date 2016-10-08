app.directive('symbols', function () {

  return {
    restrict: 'E',
    templateUrl: 'js/common/directives/symbols/symbols.html',
    controller: 'SymbolsCtrl'
  };

});

app.controller('SymbolsCtrl', function ($scope, StrikeFactory) {

  $scope.symbols = [{
    id: 10,
    name: 'outline-star',
    unicode: '☆',
    pressOrder: 4,
    pressed: false
  }, {
    id: 12,
    name: 'copyright',
    unicode: '©',
    pressOrder: 1,
    pressed: false
  }, {
    id: 3,
    name: 'lambda',
    unicode: 'ƛ',
    pressOrder: 3,
    pressed: false
  }, {
    id: 14,
    name: 'mirrored-K',
    unicode: 'Ж',
    pressOrder: 2,
    pressed: false
  }];

  $scope.currentGame.once('value', function(snap){
    $scope.strikes = snap.val().strikes;
    console.log($scope.strikes);
  })

  $scope.buttonPress = function (symbol) {
    if (!symbol.pressed) {
      if (symbol.pressOrder === $scope.correctPressCount) {
        $scope.correctPressCount++;
        symbol.pressed = true;
      } else {
        StrikeFactory.strike($scope.strikes, $scope.currentGame);
      }
    }
  };

  $scope.correctPressCount = 1;


});