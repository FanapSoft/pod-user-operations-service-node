// todo: add scApiKey

/**
 * @typedef {object} confObj
 * @property {string} [token] - Access token | API token
 * @property {integer} [tokenIssuer] - 0 | 1
 */

/**
 * @typedef {object} getUserProfileObj
 * @property {string} token - Access token | API token
 * @property {string} [client_id] - Your client ID, available in business panel
 * @property {string} [client_secret] - Your client secrect, available in business panel
 * @property {Array<string> | string} [scVoucherHash]
 * @property {string} [tokenIssuer] - Token Issuer
 */

/**
 * @typedef {object} editProfileObj
 * @property {string} token - Access token | API token
 * @property {string} nickname
 * @property {string} [firstname]
 * @property {string} [lastname]
 * @property {string} [email]
 * @property {string} [phoneNumber]
 * @property {string} [cellphoneNumber]
 * @property {string} [nationalCode]
 * @property {string} [gender]
 * @property {string} [address]
 * @property {string} [birthDate]
 * @property {string} [country]
 * @property {string} [state]
 * @property {string} [city]
 * @property {string} [postalcode]
 * @property {string} [sheba]
 * @property {string} [profileImage]
 * @property {string} [client_id] - Your client ID, available in business panel
 * @property {string} [client_secret] - Your client secrect, available in business panel
 * @property {string} [client_metadata]
 * @property {string} [birthState]
 * @property {string} [identificationNumber]
 * @property {string} [fatherName]
 * @property {Array<string> | string} [scVoucherHash]
 * @property {string} [tokenIssuer] - Token Issuer
 */

/**
 * @typedef {object} getListAddressObj
 * @property {string} token - Access token | API token
 * @property {string} nickname
 * @property {string} [offset] - integer equal or greater than 0
 * @property {string} [size] - integer equal or greater than 1
 * @property {Array<string> | string} [scVoucherHash]
 * @property {string} [tokenIssuer] - Token Issuer
 */
