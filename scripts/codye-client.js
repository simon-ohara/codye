(function() {
  var CodyeClient = angular.module('CodyeClient', []);

  CodyeClient.controller('HighlightController', ['$scope', function($scope) {
    var groups = [
      { name: 'comment', color: 'black' },
      { name: 'string', color: 'black' },
      { name: 'class-name', color: 'black' },
      { name: 'regex', color: 'black' },
      { name: 'keyword', color: 'black' },
      { name: 'boolean', color: 'black' },
      { name: 'function', color: 'black' },
      { name: 'number', color: 'black' },
      { name: 'operator', color: 'black' },
      { name: 'ignore', color: 'black' },
      { name: 'punctuation', color: 'black' }
    ]

    var buildStyleRules = function( group ) {
      return '.'
      + group.name
      + ' { color: '
      + group.color
      + ' }';
    };

    $scope.groups = groups;

    $scope.styles = function() {
      return groups.map( buildStyleRules ).join('\n');
    };

    $scope.$watch('groups', function() {
      document.getElementById('styles').innerHTML = $scope.styles();
    }, true);

    $scope.activate = function(event) {
      console.log(event);
    };
  }]);
})();
