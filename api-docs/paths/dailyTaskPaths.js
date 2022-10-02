module.exports = {
    '/daily/create': {
        post: {
          tags: ["Daily Task"],
          summary: "Create Daily Task",
          description: "An endpoint to create Daily Task",
          requestBody: {
            required: true,
            content: {
              'application/x-www-form-urlencoded': {
                schema: {
                  type: 'object',
                  properties: {
                    name: {
                        type: 'string',
                      },
                    is_finished: {
                      type: 'boolean',
                      enum: ['true','false']
                      },
                  },
                  required: [
                    'name',
                    'is_finished',
                  ]
                },
              }
            }
          },
          responses: {
            200: {
              content: {
                'application/json': {
                  example: {
                    status: 201,
                    message: 'Register success',
                  }
                }
              }
            }
          },
          security: [
            {
              token: []
            }
          ]
        }
    },
    '/daily/': {
      get: {
        tags: ["Daily Task"],
        summary: "Get Daily Task",
        description: "An endpoint to Get Daily Task",
        responses: {
          200: {
            content: {
              'application/json': {
                example: {
                  status: 201,
                  message: 'Register success',
                }
              }
            }
          }
        },
        security: [
          {
            token: []
          }
        ]
      }
  },
    '/daily/update': {
        put: {
          tags: ["Daily Task"],
          summary: "Update Daily Task",
          description: "An endpoint to update Daily Task",
          requestBody: {
            required: true,
            content: {
              'application/x-www-form-urlencoded': {
                schema: {
                  type: 'object',
                  properties: {
                    id: {
                        type: 'string',
                      },
                    is_finished: {
                      type: 'boolean',
                      enum: ['true','false']
                      },
                  },
                  required: [
                    'id',
                    'is_finished',
                  ]
                },
              }
            }
          },
          responses: {
            200: {
              content: {
                'application/json': {
                  example: {
                    status: 201,
                    message: 'Register success',
                  }
                }
              }
            }
          },
          security: [
            {
              token: []
            }
          ]
        }
    },
    '/daily/delete': {
        delete: {
          tags: ["Daily Task"],
          summary: "Delete Daily Task",
          description: "An endpoint to delete Daily Task",
          requestBody: {
            required: true,
            content: {
              'application/x-www-form-urlencoded': {
                schema: {
                  type: 'object',
                  properties: {
                    id: {
                        type: 'string',
                      },
                  },
                  required: [
                    'id',
                  ]
                },
              }
            }
          },
          responses: {
            200: {
              content: {
                'application/json': {
                  example: {
                    status: 201,
                    message: 'Register success',
                  }
                }
              }
            }
          },
          security: [
            {
              token: []
            }
          ]
        }
    },
}