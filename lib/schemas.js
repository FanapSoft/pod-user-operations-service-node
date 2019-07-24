module.exports = {
  moduleConfig: {
    type: 'object',
    properties: {
      serverType: {
        enum: ['production', 'sandbox']
      }
    },
    required: [],
    additionalProperties: false
  },
  getUserProfile: {
    body: {
      type: 'object',
      properties: {
        _token_: {
          type: 'string'
        },
        _token_issuer_: {
          type: 'integer'
          // enum: [0, 1]
        },
        client_id: {
          type: 'string'
        },
        client_secret: {
          type: 'string'
        }
      },
      required: ['_token_'], // _token_issuer_
      additionalProperties: false
    }
  },
  editProfileWithConfirmation: {
    body: {
      type: 'object',
      properties: {
        _token_: {
          notEmpty: []
          // type: 'string'
        },
        _token_issuer_: {
          type: 'integer'
          // enum: [0, 1]
        },
        firstName: {
          type: 'string'
        },
        lastName: {
          type: 'string'
        },
        nickName: {
          type: 'string'
          // notEmpty: [] // works for empty strings as well
        },
        email: {
          type: 'string',
          format: 'email'
        },
        phoneNumber: {
          phone: []
        },
        cellphoneNumber: {
          mobile: []
        },
        nationalCode: {
          nationalCode: []
        },
        gender: {
          enum: ['WOMAN_GENDER', 'MAN_GENDER']
        },
        address: {
          type: 'string'
        },
        birthDate: {
          shamsiDate: []
        },
        country: {
          type: 'string'
        },
        state: {
          type: 'string'
        },
        city: {
          type: 'string'
        },
        postalcode: {
          postalCode: []
        },
        sheba: {
          sheba: []
        },
        profileImage: {
          type: 'string'
        },
        client_id: {
          type: 'string'
        },
        client_secret: {
          type: 'string'
        },
        client_metadata: {
          type: 'object'
        },
        birthState: {
          type: 'string'
        },
        identificationNumber: {
          type: 'string'
        },
        fatherName: {
          type: 'string'
        }
      },
      required: ['_token_', 'nickName'], // _token_issuer_
      additionalProperties: false
    }
  }
};
