/**
 * @namespace PodUserOperationsService
 */

// Pod Modules
const PodBaseService = require('pod-base-service');
const utils = require('pod-utilities');

// Project Modules
const schemas = require('./schemas');
const apiUrls = require('./urls');

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
    let validateResult = utils.validate(schemas.moduleConfig, confObj);
    if (!validateResult.status) {
      throw utils.invalidConfigParam('pod-user-operations-service');
    }
    super(schemas, apiUrls, confObj.serverType);
  }

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
      data = utils.clone(data); // Cloning the object because we are changing it in our function
    }

    data = utils.trimNestedObject(data);

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    headers._token_ = data._token_;
    headers._token_issuer_ = data._token_issuer_ || this.getDefaultTokenIssuer();
    delete data._token_;
    delete data._token_issuer_;

    return this.callService(apiName, headers, data);
  }

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
      data = utils.clone(data); // Cloning the object because we are changing it in our function
    }

    data = utils.trimNestedObject(data);

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    headers._token_ = data._token_;
    headers._token_issuer_ = data._token_issuer_ || this.getDefaultTokenIssuer();
    delete data._token_;
    delete data._token_issuer_;

    return this.callService(apiName, headers, data, true);
  }
}

module.exports = PodUserOperationsService;
