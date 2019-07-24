const PodUserOperationsService = require('../lib/main');

// Variable Initialization
let podUserOperations = new PodUserOperationsService();
let accessToken = 'ACCESS TOKEN';
// *****************************************************************
// function: getUserProfile
let getUserProfileData = {
  // ------ REQUIRED ------
  _token_: accessToken

  // ------ OPTIONAL ------
  // _token_issuer: 1
  // client_id: 'CLIENT ID'
  // client_secret: 'CLIENT SECRET'
};

podUserOperations.getUserProfile(getUserProfileData)
  .then(function (result) {
    console.log('function: getUserProfile ============>', result, '\n');
  })
  .catch(function (e) {
    console.log('error ============>', e);
  });

// *****************************************************************
// function: getUserProfile
let editProfileWithConfirmationData = {
  // ------ REQUIRED ------
  _token_: accessToken,
  nickName: 'NICKNAME'

  // ------ OPTIONAL ------
  // _token_issuer: 1,
  // firstName: 'FIRSTNAME',
  // lastName: 'LASTNAME',
  // email: 'EMAIL@EMAIL.COM',
  // phoneNumber: '33333333',
  // cellphoneNumber: '09151111111',
  // nationalCode: '1111221111',
  // gender: 'MAN_GENDER' | 'WOMAN_GENDER',
  // address: 'ADDRESS',
  // birthDate: 'YYYY/MM/DD',
  // country: 'COUNTRY',
  // state: 'STATE',
  // city: 'CITY',
  // postalcode: '9111111111',
  // sheba: '080570100611513898506001',
  // profileImage: 'PROFILEIMAGE',
  // client_id: 'CLIENTID',
  // client_secret: 'CLIENTSECRET',
  // client_metadata: { PROPERTY1: 'VALUE1', PROPERTY2: 'VALUE2'},
  // birthState: 'BIRTHSTATE',
  // identificationNumber: '11111',
  // fatherName: 'FATHERNAME'
};
podUserOperations.editProfileWithConfirmation(editProfileWithConfirmationData)
  .then(function (result) {
    console.log('function: editProfileWithConfirmationData ============>', result, '\n');
  })
  .catch(function (e) {
    console.log('error ============>', e);
  });
