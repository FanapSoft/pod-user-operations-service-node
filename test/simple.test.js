// External Modules
const expect = require('chai').expect;

// Main Module
const PodUserOperationsService = require('../lib/main');

// Variable Initialization
let podUserOperations = new PodUserOperationsService({});

let accessToken = 'token'; // ACCESS TOKEN | API TOKEN
let clientId = 'CLIENT ID'; // CLIENT ID
let clientSecret = 'CLIENT SECRET'; // CLIENT SECRET

// #1
describe('API: getUserProfile ', function () {
  this.timeout(10000);
  let correct = { token: accessToken };
  let additional = { token: accessToken, additional: 'additional' };
  let wrongToken = { token: 'Invalid token' };

  it('correct request', function (done) {
    podUserOperations.getUserProfile(correct)
      .then(function (result) {
        console.log(JSON.stringify(result, null, 2));
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('result');
        done();
      })
      .catch(function (error) {
        console.log(error);
        done(new Error());
      });
  });

  it('incorrect request (validation error)', function (done) {
    podUserOperations.getUserProfile(additional)
      .then(function (result) {
        console.log(JSON.stringify(result, null, 2));
        done(new Error());
      })
      .catch(function (error) {
        console.log(JSON.stringify(error, null, 2));
        expect(error).to.have.property('code', 887);
        done();
      });
  });

  it('incorrect request (invalid access token)', function (done) {
    podUserOperations.getUserProfile(wrongToken)
      .then(function (result) {
        console.log(JSON.stringify(result, null, 2));
        done(new Error());
      })
      .catch(function (error) {
        console.log(JSON.stringify(error, null, 2));
        expect(error).to.have.property('code', 21);
        done();
      });
  });
});

// #2
describe('API: editProfileWithConfirmation ', function () {
  this.timeout(10000);
  let minimal = { token: accessToken, firstName: 'Ehsan', nickName: 'EshanSH' };
  let all = {
    token: accessToken,
    nickName: 'NICKNAME',
    firstName: 'Ehsan',
    lastName: 'Shekari',
    email: 'e.shekari@gmail.com',
    phoneNumber: '36628564',
    cellphoneNumber: '09155234338',
    nationalCode: '0945700113',
    gender: 'MAN_GENDER',
    address: 'Hafeziye',
    birthDate: '1366/04/20',
    country: 'iran',
    state: 'khorasan',
    city: 'mashhad',
    postalcode: '9189649178',
    sheba: '080570100611513898506001',
    profileImage: 'fake.jpg',
    client_id: clientId,
    client_secret: clientSecret,
    client_metadata: { name: 'NAME' },
    birthState: '1366/04/20',
    identificationNumber: '13028',
    fatherName: 'Mohammadamin',
    scVoucherHash: ['HASH#1']
  };
  let additional = { token: accessToken, additional: 'FIRSTNAME' };
  let wrongToken = { token: 'Invalid token', nickName: 'NICKNAME' };

  it('correct request minimal params', function (done) {
    podUserOperations.editProfileWithConfirmation(minimal)
      .then(function (result) {
        console.log(JSON.stringify(result, null, 2));
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('result');
        done();
      })
      .catch(function (error) {
        console.log(JSON.stringify(error, null, 2));
        done(new Error());
      });
  });

  xit('correct request all params', function (done) {
    podUserOperations.editProfileWithConfirmation(all)
      .then(function (result) {
        console.log(JSON.stringify(result, null, 2));
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('result');
        done();
      })
      .catch(function (error) {
        console.log(JSON.stringify(error, null, 2));
        done(new Error());
      });
  });

  xit('incorrect request (validation error)', function (done) {
    podUserOperations.editProfileWithConfirmation(additional)
      .then(function (result) {
        console.log(JSON.stringify(result, null, 2));
        done(new Error());
      })
      .catch(function (error) {
        console.log(JSON.stringify(error, null, 2));
        expect(error).to.have.property('code', 887);
        done();
      });
  });

  xit('incorrect request (invalid access token)', function (done) {
    podUserOperations.editProfileWithConfirmation(wrongToken)
      .then(function (result) {
        console.log(JSON.stringify(result, null, 2));
        done(new Error());
      })
      .catch(function (error) {
        console.log(JSON.stringify(error, null, 2));
        expect(error).to.have.property('code', 21);
        done();
      });
  });
});

// #3
describe('API: getListAddress ', function () {
  this.timeout(10000);
  let correct = { token: accessToken, offset: 0 };

  it('correct request', function (done) {
    podUserOperations.getListAddress(correct)
      .then(function (result) {
        console.log(JSON.stringify(result, null, 2));
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('result');
        done();
      })
      .catch(function (error) {
        console.log(error);
        done(new Error());
      });
  });
});

// #4
describe('API: confirmEditProfile ', function () {
  this.timeout(10000);
  let correct = { token: accessToken, code: '4009232', cellphoneNumber: '09153864790' };

  it('correct request', function (done) {
    podUserOperations.confirmEditProfile(correct)
      .then(function (result) {
        console.log(JSON.stringify(result, null, 2));
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('result');
        done();
      })
      .catch(function (error) {
        console.log(error);
        done(new Error());
      });
  });
});
