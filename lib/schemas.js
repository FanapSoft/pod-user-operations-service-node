module.exports = {
  moduleConfig: {
    type: 'object',
    properties: {
      apiToken: {
        notEmpty: []
      },
      tokenIssuer: {
        type: 'integer',
        enum: [0, 1]
      }
      /* scApiKey: {
        notEmpty: []
      } */
    },
    required: [],
    additionalProperties: false
  },

  // #1
  getUserProfile: {
    body: {
      type: 'object',
      properties: {
        token: {
          notEmpty: []
        },
        tokenIssuer: {
          type: 'integer',
          enum: [0, 1]
        },
        scVoucherHash: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          ]
        },
        scApiKey: {
          notEmpty: []
        },
        client_id: {
          notEmpty: []
        },
        client_secret: {
          notEmpty: []
        }
      },
      required: ['token', 'tokenIssuer'],
      additionalProperties: false
    }
  },

  // #2
  editProfileWithConfirmation: {
    body: {
      type: 'object',
      properties: {
        token: {
          notEmpty: []
        },
        tokenIssuer: {
          type: 'integer',
          enum: [0, 1]
        },
        scVoucherHash: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          ]
        },
        scApiKey: {
          notEmpty: []
        },
        firstName: {
          type: 'string'
        },
        lastName: {
          type: 'string'
        },
        nickName: {
          type: 'string'
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
          oneOf: [
            {
              instanceof: 'Date'
            },
            {
              shamsiDate: []
            }
          ]
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
          notEmpty: []
        },
        client_secret: {
          notEmpty: []
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
      required: ['token', 'tokenIssuer', 'nickName'],
      additionalProperties: false
    }
  },

  // #3
  getListAddress: {
    body: {
      type: 'object',
      properties: {
        token: {
          notEmpty: []
        },
        tokenIssuer: {
          type: 'integer',
          enum: [0, 1]
        },
        scVoucherHash: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          ]
        },
        scApiKey: {
          notEmpty: []
        },
        offset: {
          type: 'integer',
          minimum: 0
        },
        size: {
          type: 'integer',
          minimum: 1
        }
      },
      required: ['token', 'tokenIssuer', 'offset'],
      additionalProperties: false
    }
  },

  // #4
  confirmEditProfile: {
    body: {
      type: 'object',
      properties: {
        token: {
          notEmpty: []
        },
        tokenIssuer: {
          type: 'integer',
          enum: [0, 1]
        },
        scVoucherHash: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          ]
        },
        scApiKey: {
          notEmpty: []
        },
        cellphoneNumber: {
          mobile: []
        },
        code: {
          type: 'string'
        }
      },
      required: ['token', 'tokenIssuer', 'cellphoneNumber', 'code'],
      additionalProperties: false
    }
  }
};
