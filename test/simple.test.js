// External Modules
const expect = require('chai').expect;

// Main Module
const PodUserOperationsService = require('../lib/main');

// Variable Initialization
let podUserOperations = new PodUserOperationsService();
let accessToken = 'ACCESS TOKEN'; // ACCESS TOKEN
let clientId = 'CLIENT ID'; // CLIENT ID
let clientSecret = 'CLIENT SECRET'; // CLIENT SECRET

describe.only('API: getUserProfile ', function () {
  this.timeout(10000);
  let correct = { _token_: accessToken };
  let additional = { _token_: accessToken, additional: 'additional' };
  let wrongToken = { _token_: 'Invalid token' };

  it('correct request', function (done) {
    podUserOperations.getUserProfile(correct)
      .then(function (result) {
        // console.log(result);
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('result');
        done();
      })
      .catch(function () {
        // console.log(error);
        done(new Error());
      });
  });

  it('incorrect request (validation error)', function (done) {
    podUserOperations.getUserProfile(additional)
      .then(function (result) {
        // console.log('========================>', result);
        done(new Error());
      })
      .catch(function (error) {
        // console.log('=============================>', error);
        expect(error).to.have.property('code', 887);
        done();
      });
  });

  it('incorrect request (invalid access token)', function (done) {
    podUserOperations.getUserProfile(wrongToken)
      .then(function (result) {
        // console.log('========================>', result);
        done(new Error());
      })
      .catch(function (error) {
        // console.log('=============================>', error);
        expect(error).to.have.property('code', 21);
        done();
      });
  });
});

describe('API: editProfileWithConfirmation ', function () {
  this.timeout(10000);
  let minimal = { _token_: accessToken, nickName: 'NICKNAME' };
  let all = {
    _token_: accessToken,
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
    fatherName: 'Mohammadamin'
  };
  let additional = { _token_: accessToken, additional: 'FIRSTNAME' };
  let wrongToken = { _token_: 'Invalid token', nickName: 'NICKNAME' };

  it('correct request minimal params', function (done) {
    podUserOperations.editProfileWithConfirmation(minimal)
      .then(function (result) {
        // console.log(result);
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('result');
        done();
      })
      .catch(function () {
        // console.log(error);
        done(new Error());
      });
  });

  it('correct request all params', function (done) {
    podUserOperations.editProfileWithConfirmation(all)
      .then(function (result) {
        // console.log(result);
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('result');
        done();
      })
      .catch(function () {
        // console.log(error);
        done(new Error());
      });
  });

  it('incorrect request (validation error)', function (done) {
    podUserOperations.editProfileWithConfirmation(additional)
      .then(function (result) {
        // console.log('========================>', result);
        done(new Error());
      })
      .catch(function (error) {
        // console.log('=============================>', error);
        expect(error).to.have.property('code', 887);
        done();
      });
  });

  it('incorrect request (invalid access token)', function (done) {
    podUserOperations.editProfileWithConfirmation(wrongToken)
      .then(function (result) {
        // console.log('========================>', result);
        done(new Error());
      })
      .catch(function (error) {
        // console.log('=============================>', error);
        expect(error).to.have.property('code', 21);
        done();
      });
  });
});
