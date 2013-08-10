describe('dom', function() {
  it('should be div', function() {
    expect($('<div id="some-id"></div>')).toBe('div');
    expect($('<p></p>')).toBe('p');
  });
});
