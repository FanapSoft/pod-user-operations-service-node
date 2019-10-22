const PodUserOperationsService = require('pod-user-operations-service');

// Variable Initialization
let podUserOperations = new PodUserOperationsService({
  // apiToken: 'API TOKEN' - OPTIONAL
  // tokenIssuer: 0 | 1 - OPTIONAL
});
let token = 'TOKEN'; // Access Token | API Token

// *****************************************************************
// #1
// function: getUserProfile
let getUserProfileData = {
  // ------ REQUIRED ------
  token: token // Access Token | API Token

  // ------ OPTIONAL ------
  // client_id: 'CLIENT ID',
  // client_secret: 'CLIENT SECRET',
  // scVoucherHash: ['HASH#1', 'HASH#2']
  // tokenIssuer: 0 | 1
  // scApiKey: 'SC API KEY'
};

podUserOperations.getUserProfile(getUserProfileData)
  .then(function (result) {
    console.log('function: getUserProfile ============>', JSON.stringify(result, null, 2), '\n');
  })
  .catch(function (e) {
    console.log('error ============>', JSON.stringify(e, null, 2));
  });

// *****************************************************************
// #2
// function: getUserProfile
let editProfileWithConfirmationData = {
  // ------ REQUIRED ------
  token: token, // Access Token | API Token
  nickName: 'NICKNAME'

  // ------ OPTIONAL ------
  // firstName: 'FIRSTNAME',
  // lastName: 'LASTNAME',
  // email: 'EMAIL@EMAIL.COM',
  // phoneNumber: 'PHONE NUMBER',
  // cellphoneNumber: 'CELL PHONE NUMBER',
  // nationalCode: 'NATIONAL CODE',
  // gender: 'MAN_GENDER' | 'WOMAN_GENDER',
  // address: 'ADDRESS',
  // birthDate: 'YYYY/MM/DD',
  // country: 'COUNTRY',
  // state: 'STATE',
  // city: 'CITY',
  // postalcode: 'POSTAL CODE',
  // sheba: 'SHEBA WITHOUT IR',
  // profileImage: 'PROFILEIMAGE',
  // client_id: 'CLIENTID',
  // client_secret: 'CLIENTSECRET',
  // client_metadata: { PROPERTY1: 'VALUE1', PROPERTY2: 'VALUE2'},
  // birthState: 'BIRTHSTATE',
  // identificationNumber: 'IDENTIFICATION NUMBER',
  // fatherName: 'FATHER NAME'
  // scVoucherHash: ['HASH#1', 'HASH#2'],
  // tokenIssuer: 0 | 1
  // scApiKey: 'SC API KEY'
};
podUserOperations.editProfileWithConfirmation(editProfileWithConfirmationData)
  .then(function (result) {
    console.log('function: editProfileWithConfirmationData ============>', JSON.stringify(result, null, 2), '\n');
  })
  .catch(function (e) {
    console.log('error ============>', JSON.stringify(e, null, 2));
  });

// *****************************************************************
// #3
// function: getListAddress
let getListAddressData = {
  // ------ REQUIRED ------
  token: token,
  offset: 0

  // ------ OPTIONAL ------
  // size: 1
  // scVoucherHash: ['HASH#1', 'HASH#2'],
  // tokenIssuer: 0 | 1
  // scApiKey: 'SC API KEY' 
};
podUserOperations.getListAddress(getListAddressData)
  .then(function (result) {
    console.log('function: getListAddress ============>', JSON.stringify(result, null, 2), '\n');
  })
  .catch(function (e) {
    console.log('error ============>', JSON.stringify(e, null, 2));
  });

// *****************************************************************
// #4
// function: confirmEditProfile
let confirmEditProfileData = {
  // ------ REQUIRED ------
  token: token, // Access Token | API Token
  code: 'CODE',
  cellphoneNumber: 'MOBILE'

  // ------ OPTIONAL ------
  // scVoucherHash: ['HASH#1', 'HASH#2'],
  // tokenIssuer: 0 | 1
  // scApiKey: 'SC API KEY'
};

podUserOperations.getListAddress(confirmEditProfileData)
  .then(function (result) {
    console.log('function: getListAddress ============>', JSON.stringify(result, null, 2), '\n');
  })
  .catch(function (e) {
    console.log('error ============>', JSON.stringify(e, null, 2));
  });
