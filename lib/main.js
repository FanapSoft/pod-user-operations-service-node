/**
 * @namespace PodUserOperationsService
 */

// Pod Modules
const PodBaseService = require('pod-base-service');
const utils = require('pod-utilities');

// Project Modules
const schemas = require('./schemas');
const apiUrls = require('./urls');
const products = require('./products');

/**
 * PodUserOperationsService
 * @memberOf PodUserOperationsService
 */
class PodUserOperationsService extends PodBaseService {
  /**
   * @description This is the class constructor
   * @param {confObj} confObj
   */
  constructor (confObj) {
    if (!confObj) {
      confObj = {};
    }
    super(schemas, apiUrls, confObj, 'pod-user-operations-service', true);
    this.clientInfo = {};
    this.clientInfo.apiToken = confObj.apiToken || null;
    this.clientInfo.tokenIssuer = confObj.tokenIssuer || null;
    // this.clientInfo.scApiKey = confObj.scApiKey || null;
  }

  // #1 Access Token | API Token
  /**
   * @description This function gets the profile of a specific user
   * @param {getUserProfileObj} data
   * @returns {Promise}
   */
  getUserProfile (data) {
    let apiName = 'getUserProfile';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data = utils.trimNestedObject(data);

    data.token = data.token || this.clientInfo.apiToken;
    data.tokenIssuer = data.tokenIssuer || this.clientInfo.tokenIssuer || this.getDefaultTokenIssuer();

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    if (data.hasOwnProperty('scVoucherHash') && typeof data.scVoucherHash === 'string') {
      data.scVoucherHash = [data.scVoucherHash];
    }
    data.scProductId = products[apiName];

    headers._token_ = data.token;
    headers._token_issuer_ = data.tokenIssuer;

    delete data.token;
    delete data.tokenIssuer;

    return this.callService(apiName, headers, data, {}, true);
  }

  // #2 Access Token | API Token
  /**
   * @description This function sends and sms to the user with new profile values, if accepted user profile will change
   * @param {editProfileObj} data
   * @returns {Promise}
   */
  editProfileWithConfirmation (data) {
    let apiName = 'editProfileWithConfirmation';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data = utils.trimNestedObject(data);

    data.token = data.token || this.clientInfo.apiToken;
    data.tokenIssuer = data.tokenIssuer || this.clientInfo.tokenIssuer || this.getDefaultTokenIssuer();

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    if (data.hasOwnProperty('client_metadata')) {
      data.client_metadata = JSON.stringify(data.client_metadata);
    }
    if (data.birthDate && data.birthDate instanceof Date) {
      data.birthDate = utils.toShamsiDateString(data.birthDate);
    }

    if (data.hasOwnProperty('scVoucherHash') && typeof data.scVoucherHash === 'string') {
      data.scVoucherHash = [data.scVoucherHash];
    }
    data.scProductId = products[apiName];

    headers._token_ = data.token;
    headers._token_issuer_ = data.tokenIssuer;

    delete data._token_;
    delete data._token_issuer_;

    return this.callService(apiName, headers, data, {}, true);
  }

  // #3 Access Token | API Token
  /**
   * @description This function returns the list of a specific user
   * @param {getListAddressObj} data
   * @returns {Promise}
   */
  getListAddress (data) {
    let apiName = 'getListAddress';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data = utils.trimNestedObject(data);

    data.token = data.token || this.clientInfo.apiToken;
    data.tokenIssuer = data.tokenIssuer || this.clientInfo.tokenIssuer || this.getDefaultTokenIssuer();

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    if (data.hasOwnProperty('scVoucherHash') && typeof data.scVoucherHash === 'string') {
      data.scVoucherHash = [data.scVoucherHash];
    }
    data.scProductId = products[apiName];

    headers._token_ = data.token;
    headers._token_issuer_ = data.tokenIssuer;

    delete data.token;
    delete data.tokenIssuer;

    return this.callService(apiName, headers, data, {}, true);
  }

  // #4 Access Token | API Token
  /**
   * @description This function
   * @param {confirmEditProfileObj} data
   * @returns {Promise}
   */
  confirmEditProfile (data) {
    let apiName = 'confirmEditProfile';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data = utils.trimNestedObject(data);

    data.token = data.token || this.clientInfo.apiToken;
    data.tokenIssuer = data.tokenIssuer || this.clientInfo.tokenIssuer || this.getDefaultTokenIssuer();

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    if (data.hasOwnProperty('scVoucherHash') && typeof data.scVoucherHash === 'string') {
      data.scVoucherHash = [data.scVoucherHash];
    }
    data.scProductId = products[apiName];

    headers._token_ = data.token;
    headers._token_issuer_ = data.tokenIssuer;

    delete data.token;
    delete data.tokenIssuer;

    return this.callService(apiName, headers, data, {}, true);
  }
}

module.exports = PodUserOperationsService;
