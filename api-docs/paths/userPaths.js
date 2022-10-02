module.exports = {
    '/users/register': {
        post: {
          tags: ["User"],
          summary: "Create User",
          description: "An endpoint to add User",
          requestBody: {
            required: true,
            content: {
              'multipart/form-data': {
                schema: {
                  type: 'object',
                  properties: {
                    name: {
                      type: 'string',
                    },
                    email: {
                      type: 'string',
                    },
                    password: {
                      type: 'string',
                    },
                    photo:{
                      type:'string',
                      format:'binary',
                    },
                    description:{
                      type:'string',
                    },
                  },
                  required: [
                    'name',
                    'email',
                    'password',
                    'photo',
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
          }
        }
},
    '/users/login': {
    post: {
      tags: ["User"],
      summary: "Login",
      description: "An endpoint to Login User",
      requestBody: {
        required: true,
        content: {
          'application/x-www-form-urlencoded': {
            schema: {
              type: 'object',
              properties: {
                email: {
                  type: 'string',
                },
                password: {
                  type: 'string',
                },
              },
              required: [
                'email',
                'password'
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
                message: 'Login success',
                token : ''
              }
            }
          }
        }
      }
    }
},
    '/users/':{
  get: {
    tags: ["User"],
    summary: "Get All User",
    description: "An endpoint to get All User",
    responses:{
      content: {
        'application/json': {
          example:{
              status: 200,
              message: 'Successfully get all User',
              list : [
                  {
                      id: 'abcd-efgh',
                      username: 'Abc123',
                      email: 'Abc@mail.com',
                      createdAt: '',
                      createdBy: '',
                  }
              ],
          },
          401:{
              content: {
                  'application/json': {
                    example: {
                      status: 401,
                      message: 'Cannot Access this Page'
                    }
                  }
                }
            }
        }       
    },
  },
  },
},
'/users/byid':{
  post: {
    tags: ["User"],
    summary: "Get User By ID",
    description: "An endpoint to get User by ID",
    requestBody: {
      required: true,
      content: {
        'application/x-www-form-urlencoded': {
          schema: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                description: 'User_ID'
              },
            },
            required: [
              'id'
            ]
          },
        }
      }
    },
    responses:{
      content: {
        'application/json': {
          example:{
              status: 200,
              message: 'Successfully get User',
              list : [
                  {
                      id: 'abcd-efgh',
                      username: 'Abc123',
                      email: 'Abc@mail.com',
                      createdAt: '',
                      createdBy: '',
                  }
              ],
          },
          401:{
              content: {
                  'application/json': {
                    example: {
                      status: 401,
                      message: 'Cannot Access this Page'
                    }
                  }
                }
            }
        }       
    },
  },
  },
  put: {
    tags: ["User"],
    summary: "Edit User By ID",
    description: "An endpoint to edit User by ID",
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
              name:{
                type:'string',
              }
            },
            required: [
              'id',
              'name'
            ]
          },
        }
      }
    },
    responses:{
      content: {
        'application/json': {
          example:{
              status: 200,
              message: 'Successfully get User',
              list : [
                  {
                      id: 'abcd-efgh',
                      username: 'Abc123',
                      email: 'Abc@mail.com',
                      createdAt: '',
                      createdBy: '',
                  }
              ],
          },
          401:{
              content: {
                  'application/json': {
                    example: {
                      status: 401,
                      message: 'Cannot Access this Page'
                    }
                  }
                }
            }
        }       
    },
  },
  },
  delete: {
    tags: ["User"],
    summary: "Delete User By ID",
    description: "An endpoint to Delete User by ID",
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
              'id'
            ]
          },
        }
      }
    },
    responses:{
      content: {
        'application/json': {
          example:{
              status: 200,
              message: 'Successfully get User',
              list : [
                  {
                      id: 'abcd-efgh',
                      username: 'Abc123',
                      email: 'Abc@mail.com',
                      createdAt: '',
                      createdBy: '',
                  }
              ],
          },
          401:{
              content: {
                  'application/json': {
                    example: {
                      status: 401,
                      message: 'Cannot Access this Page'
                    }
                  }
                }
            }
        }       
    },
  },
  },
},

}