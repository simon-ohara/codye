(function() {
  var CodyeClient = angular.module('CodyeClient', []);

  CodyeClient.controller('HighlightController', ['$scope', function($scope) {
    var groups = [
      { name: "comment", color: "black" },
      { name: "string", color: "black" },
      { name: "class-name", color: "black" },
      { name: "regex", color: "black" },
      { name: "keyword", color: "black" },
      { name: "boolean", color: "black" },
      { name: "function", color: "black" },
      { name: "number", color: "black" },
      { name: "operator", color: "black" },
      { name: "ignore", color: "black" },
      { name: "punctuation", color: "black" } 
    ];

    $scope.groups = groups;

    $scope.styles = function() {
      var i, group, numGroups = groups.length, style = '';

      for( i=0; i<numGroups; i++ ) {
        group = groups[i];
        style += "." +group.name+" { color: "+group.color+" }\n"; 
        // style += ".swatch-" +group.name+" { background-color: "+group.color+" }\n"; 
      }

      return style;
    };

    $scope.$watch('groups', function() {
      document.getElementById('styles').innerHTML = $scope.styles();
    }, true);

    $scope.activate = function(event) {
      console.log(event);
    };
  }]);
})();
