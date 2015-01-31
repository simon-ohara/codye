describe('CodyeClient', function() {
  beforeEach( module('CodyeClient') );

  describe('HighlightController', function() {
    var subject, ctrl;

    beforeEach( inject(function($controller) {
      subject = {};
      ctrl = $controller('HighlightController', {$scope: subject});
    }));

    describe('groups model', function() {
      var i, groupNames, numGroupNames;

      beforeEach( function() {
        groupNames = ["comment", "string", "class-name", "regex", "keyword", "boolean", "function", "number", "operator", "ignore", "punctuation"];
        numGroupNames = groupNames.length;
      });

      it('creates a "groups" model with 10 groups', function() {
        expect(subject.groups.length).toEqual(numGroupNames);
      });

      it('each group has a name property', function() {
        for( i=0; i<numGroupNames; i++ ) {
          expect(subject.groups[i].name).toBe(groupNames[i]);
        }
      });

      it('each group has a color property', function() {
        for( i=0; i<numGroupNames; i++ ) {
          expect(subject.groups[i].color).toBeDefined();
        }
      });
    });

    describe("#styles method", function() {
      var i, numGroups, output, group;

      it("is a function", function() {
        expect(typeof subject.styles).toBe('function');
      });

      it("returns a string", function() {
        expect(typeof subject.styles()).toBe('string');
      });

      it("outputs css attributes for the text color for each of the groups", function() {
        numGroups = subject.groups.length;
        output = subject.styles();

        for( i=0; i<numGroups; i++ ) {
          group = subject.groups[i];
          expect(output).toContain("."+group.name+" { color: "+group.color+" }\n");
        }
      }); 

      it("outputs css attributes for the swatch color for each of the groups", function() {
        numGroups = subject.groups.length;
        output = subject.styles();

        for( i=0; i<numGroups; i++ ) {
          group = subject.groups[i];
          expect(output).toContain(".swatch-"+group.name+" { background-color: "+group.color+" }\n");
        }
      }); 
    });
  });
});
