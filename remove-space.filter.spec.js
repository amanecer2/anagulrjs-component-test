// Be descriptive with titles here. The describe and it titles combined read like a sentence.
describe('removeSpaces filter', function() {

  let removeSpaces;

  /*get angular module*/
  beforeEach(module('removeSpaces'));
  
  /*inject the dependencies of the filter for every test*/
  beforeEach(inject(function($filter){
    removeSpaces = $filter('removeSpaces');
  }));


  // A simple test to verify the Users factory exists
  it('should exist', function() {
    expect(removeSpaces()).toBeUndefined();
  });

  it('should remove space', function() {
    expect(removeSpaces("shahar   ")).toBe('shahar');
  });

  it('should remove space and faild', function() {
    expect(removeSpaces("shahar   ")).toBe('shahar    ');
  });

});
