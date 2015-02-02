describe("/", function() {
  beforeEach(function() {
    browser.get('/');
  });

  it("has the title set to the name of the app", function() {
    expect(browser.getTitle()).toEqual('CoDye');
  });

  it("shows a list of highlight groups", function() {
    var g, groupList = element.all( by.repeater('group in groups') ),
        numGroups = groupList.count();

    expect(numGroups).toBe(11);

    groupList.each(function(element) {
      var picker = element(by.model('group.color'));
      //     label = element(by.css('label'));

      // label.getText().then(console.log);
      
      picker.getAttribute('type').then(function(attr) {
        expect(attr).toBe('color');
      });
    });
  });
});
