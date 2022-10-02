module.exports = {
'/goals/search': {
        post: {
          tags: ["Goals"],
          summary: "Input keyword to search Goals",
          description: "An endpoint to search Goals",
          requestBody: {
            required: true,
            content: {
              'application/x-www-form-urlencoded': {
                schema: {
                  type: 'object',
                  properties: {
                    search: {
                      type: 'string',
                    },
                  },
                  required: [
                    'search',
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
'/goals/create': {
    post: {
      tags: ["Goals"],
      summary: "Create Goals",
      description: "An endpoint to create Goals",
      requestBody: {
        required: true,
        content: {
          'application/x-www-form-urlencoded': {
            schema: {
              type: 'object',
              properties: {
                title: {
                  type: 'string',
                },
                description: {
                    type: 'string',
                  },
                progress: {
                  type: 'string',
                  enum:['in progress','to do','done','incoming']
                  },
                deadline: {
                type: 'string',
                format:'date',
                example: "2021-01-30"
                  },
              },
              required: [
                'title',
                'description',
                'progress',
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
'/goals/':{
  get: {
    tags: ["Goals"],
    summary: "Get All Goals",
    description: "An endpoint to get All Goals",
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
'/goals/byid':{
  post: {
    tags: ["Goals"],
    summary: "Get Goal By ID",
    description: "An endpoint to get Goal by ID",
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
  put:{
    tags: ["Goals"],
    summary: "Update Goals",
    description: "An endpoint to update Goals",
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
              progress: {
                type: 'string',
                enum:['in progress','to do','done','incoming']
                },
            },
            required: [
              'id',
              'title',
              'description',
              'progress',
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
'/goals/addmember': {
  put: {
    tags: ["Goals"],
    summary: "Add New Member to Goals",
    description: "An endpoint to add new member to Goals",
    requestBody: {
      required: true,
      content: {
        'application/x-www-form-urlencoded': {
          schema: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                description: 'Goals ID'
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
'/goals/removemember': {
  put: {
    tags: ["Goals"],
    summary: "Remove Logged in Member from Goals",
    description: "An endpoint to add remove member from Goals",
    requestBody: {
      required: true,
      content: {
        'application/x-www-form-urlencoded': {
          schema: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                description: 'Goals ID'
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
'/goals/attachfile': {
  put: {
    tags: ["Goals"],
    summary: "Attach new File to Goals",
    description: "Attach new File to Goals",
    requestBody: {
      required: true,
      content: {
        'multipart/form-data': {
          schema: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                description: 'Goals ID'
              },
              attachment: {
                type: 'string',
                format:'binary',
                },
            },
            required: [
              'id',
              'attachment',
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
'/goals/removefile': {
  put: {
    tags: ["Goals"],
    summary: "Remove Attached file from Goals",
    description: "An endpoint to add remove attached file from Goals",
    requestBody: {
      required: true,
      content: {
        'application/x-www-form-urlencoded': {
          schema: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                description: 'Goals ID'
              },
              attachment_name:{
                type:'string'
              }
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

'/goals/delete': {
  delete: {
    tags: ["Goals"],
    summary: "Delete Goals",
    description: "An endpoint to add remove a Goal",
    requestBody: {
      required: true,
      content: {
        'application/x-www-form-urlencoded': {
          schema: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                description: 'Goals ID'
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
'/goals/searchbydate': {
  post: {
    tags: ["Goals"],
    summary: "Input keyword to search Goals between dates",
    description: "An endpoint to search Goals between dates",
    requestBody: {
      required: true,
      content: {
        'application/x-www-form-urlencoded': {
          schema: {
            type: 'object',
            properties: {
              firstday: {
                type: 'date',
                format:'date',
                example: "2021-01-30"
              },
              lastday: {
                type: 'date',
                format:'date',
                example: "2021-01-30"
              },
            },
            required: [
              'firstday',
              'lastday'
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
'/goals/searchbyprogress': {
  post: {
    tags: ["Goals"],
    summary: "Input keyword to search Goals between dates",
    description: "An endpoint to search Goals between dates",
    requestBody: {
      required: true,
      content: {
        'application/x-www-form-urlencoded': {
          schema: {
            type: 'object',
            properties: {
              progress: {
                type: 'string',
                enum:['in progress','to do','done','incoming']
                },
            },
            required: [
              'progress'
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
}