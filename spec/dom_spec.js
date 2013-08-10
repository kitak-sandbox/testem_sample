describe('dom', function() {
  it('should be div', function() {
    expect($('<div id="some-id"></div>')).toBe('div');
  });
  it('should be p', function() {
    expect($('<p></p>')).toBe('p');
  });
});
