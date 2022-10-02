module.exports = {
    '/tasks/create': {
        post: {
          tags: ["Tasks"],
          summary: "Create new Task in Goal",
          description: "An endpoint to create Goals",
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
                    title: {
                      type: 'string',
                    },
                    description: {
                        type: 'string',
                      },
                    is_finished: {
                      type: 'boolean',
                      enum: ['true','false']
                      },
                  },
                  required: [
                    'id',
                    'title',
                    'description',
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
    '/tasks/update': {
        put: {
          tags: ["Tasks"],
          summary: "Update Tasks",
          description: "An endpoint to update Tasks",
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
    '/tasks/delete': {
        delete: {
          tags: ["Tasks"],
          summary: "Delete Tasks",
          description: "An endpoint to delete Tasks",
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
                    task_id: {
                        type: 'string',
                      },
                  },
                  required: [
                    'id',
                    'task_id',
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