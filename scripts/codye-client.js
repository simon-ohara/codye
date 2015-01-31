(function() {
  var CodyeClient = angular.module('CodyeClient', []);

  CodyeClient.controller('HighlightController', ['$scope', function($scope) {
    var groups = [
      { name: "comment", color: "rgb(150,150,150)" },
      { name: "string", color: "rgb(150,150,150)" },
      { name: "class-name", color: "rgb(150,150,150)" },
      { name: "regex", color: "rgb(150,150,150)" },
      { name: "keyword", color: "rgb(150,150,150)" },
      { name: "boolean", color: "rgb(150,150,150)" },
      { name: "function", color: "rgb(150,150,150)" },
      { name: "number", color: "rgb(150,150,150)" },
      { name: "operator", color: "rgb(150,150,150)" },
      { name: "ignore", color: "rgb(150,150,150)" },
      { name: "punctuation", color: "rgb(150,150,150)" } 
    ];

    $scope.groups = groups;

    $scope.styles = function() {
      var i, group, numGroups = groups.length, style = '';

      for( i=0; i<numGroups; i++ ) {
        group = groups[i];
        style += "." +group.name+" { color: "+group.color+" }\n"; 
        style += ".swatch-" +group.name+" { background-color: "+group.color+" }\n"; 
      }

      return style;
    };
  }]);
})();
