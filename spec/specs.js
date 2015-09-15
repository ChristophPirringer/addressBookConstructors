describe('contact', function() {
  it('creates a new contact with the given specs.', function() {
    var testContact = new Contact("Bill", "Gates");
    expect(testContact.firstName).to.equal("Bill");
    expect(testContact.lastName).to.equal("Gates");
    expect(testContact.addresses).to.eql([]);
  });
});
