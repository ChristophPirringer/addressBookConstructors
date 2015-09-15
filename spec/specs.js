describe('contact', function() {
  it('creates a new contact with the given specs.', function() {
    var testContact = new Contact("Bill", "Gates");
    expect(testContact.firstName).to.equal("Bill");
    expect(testContact.lastName).to.equal("Gates");
    expect(testContact.addresses).to.eql([]);
  });

  it('returns the full name of a given contact.', function() {
    var testContact = new Contact("Bill", "Gates");
    expect(testContact.fullName()).to.eql("Bill Gates");
  });
});

describe('address', function() {
  it('creates a new address with the given specs.', function() {
    var testAddress = new Address("Thurlow Drive", "Portland", "Oregon");
    expect(testAddress.street).to.equal("Thurlow Drive");
    expect(testAddress.city).to.equal("Portland");
    expect(testAddress.state).to.equal("Oregon");
  });

  // it('returns the full name of a given contact.', function() {
  //   var testContact = new Contact("Bill", "Gates");
  //   expect(testContact.fullName()).to.eql("Bill Gates");
  // });
});
