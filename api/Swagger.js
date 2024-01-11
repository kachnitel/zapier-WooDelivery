module.exports = {
  openapi: "3.0.1",
  info: {
    title: "WooDelivery API",
    termsOfService: "https://www.woodelivery.com/apis-terms-of-service/",
    version: "v1.0"
  },
  paths: {
    '/api/ping': {
      get: {
        tags: [
          "Api"
        ],
        parameters: [
          {
            name: "api_key",
            in: "query",
            schema: {
              type: "string",
              nullable: true
            }
          }
        ],
        responses: {
          200: {
            description: "Success"
          }
        }
      }
    },
    '/api/form/createtask': {
      post: {
        tags: [
          "Api"
        ],
        summary: "Create new delivery or pickup task",
        parameters: [
          {
            name: "api_key",
            in: "query",
            schema: {
              type: "string",
              nullable: true
            }
          }
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                '$ref': "#/components/schemas/NewTaskRequest"
              }
            },
            'text/json': {
              schema: {
                '$ref': "#/components/schemas/NewTaskRequest"
              }
            },
            'application/*+json': {
              schema: {
                '$ref': "#/components/schemas/NewTaskRequest"
              }
            }
          }
        },
        responses: {
          200: {
            description: "Success",
            content: {
              'text/plain': {
                schema: {
                  '$ref': "#/components/schemas/TaskModel"
                }
              },
              'application/json': {
                schema: {
                  '$ref': "#/components/schemas/TaskModel"
                }
              },
              'text/json': {
                schema: {
                  '$ref': "#/components/schemas/TaskModel"
                }
              }
            }
          }
        }
      }
    },
    '/api/form/updatetask': {
      post: {
        tags: [
          "Api"
        ],
        summary: "Update an existing task",
        parameters: [
          {
            name: "api_key",
            in: "query",
            schema: {
              type: "string",
              nullable: true
            }
          }
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                '$ref': "#/components/schemas/UpdateTaskRequest"
              }
            },
            'text/json': {
              schema: {
                '$ref': "#/components/schemas/UpdateTaskRequest"
              }
            },
            'application/*+json': {
              schema: {
                '$ref': "#/components/schemas/UpdateTaskRequest"
              }
            }
          }
        },
        responses: {
          200: {
            description: "Success",
            content: {
              'text/plain': {
                schema: {
                  '$ref': "#/components/schemas/TaskModel"
                }
              },
              'application/json': {
                schema: {
                  '$ref': "#/components/schemas/TaskModel"
                }
              },
              'text/json': {
                schema: {
                  '$ref': "#/components/schemas/TaskModel"
                }
              }
            }
          }
        }
      }
    },
    '/api/form/updatetaskstatus': {
      post: {
        tags: [
          "Api"
        ],
        summary: "Update an existing task status",
        parameters: [
          {
            name: "api_key",
            in: "query",
            schema: {
              type: "string",
              nullable: true
            }
          }
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                '$ref': "#/components/schemas/UpdateTaskStatusRequest"
              }
            },
            'text/json': {
              schema: {
                '$ref': "#/components/schemas/UpdateTaskStatusRequest"
              }
            },
            'application/*+json': {
              schema: {
                '$ref': "#/components/schemas/UpdateTaskStatusRequest"
              }
            }
          }
        },
        responses: {
          200: {
            description: "Success",
            content: {
              'text/plain': {
                schema: {
                  '$ref': "#/components/schemas/TaskModel"
                }
              },
              'application/json': {
                schema: {
                  '$ref': "#/components/schemas/TaskModel"
                }
              },
              'text/json': {
                schema: {
                  '$ref': "#/components/schemas/TaskModel"
                }
              }
            }
          }
        }
      }
    },
    '/api/form/assigntasktodriver': {
      post: {
        tags: [
          "Api"
        ],
        summary: "Assign tasks to drivers",
        parameters: [
          {
            name: "api_key",
            in: "query",
            schema: {
              type: "string",
              nullable: true
            }
          }
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                type: "array",
                items: {
                  '$ref': "#/components/schemas/AssignTaskToDriverRequest"
                },
                nullable: true
              }
            },
            'text/json': {
              schema: {
                type: "array",
                items: {
                  '$ref': "#/components/schemas/AssignTaskToDriverRequest"
                },
                nullable: true
              }
            },
            'application/*+json': {
              schema: {
                type: "array",
                items: {
                  '$ref': "#/components/schemas/AssignTaskToDriverRequest"
                },
                nullable: true
              }
            }
          }
        },
        responses: {
          200: {
            description: "Success",
            content: {
              'text/plain': {
                schema: {
                  '$ref': "#/components/schemas/TaskModel"
                }
              },
              'application/json': {
                schema: {
                  '$ref': "#/components/schemas/TaskModel"
                }
              },
              'text/json': {
                schema: {
                  '$ref': "#/components/schemas/TaskModel"
                }
              }
            }
          }
        }
      }
    },
    '/api/form/deletetask': {
      post: {
        tags: [
          "Api"
        ],
        summary: "Delete an existing task",
        parameters: [
          {
            name: "api_key",
            in: "query",
            schema: {
              type: "string",
              nullable: true
            }
          }
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                '$ref': "#/components/schemas/DeleteTaskStatusRequest"
              }
            },
            'text/json': {
              schema: {
                '$ref': "#/components/schemas/DeleteTaskStatusRequest"
              }
            },
            'application/*+json': {
              schema: {
                '$ref': "#/components/schemas/DeleteTaskStatusRequest"
              }
            }
          }
        },
        responses: {
          200: {
            description: "Success",
            content: {
              'text/plain': {
                schema: {
                  '$ref': "#/components/schemas/TaskModel"
                }
              },
              'application/json': {
                schema: {
                  '$ref': "#/components/schemas/TaskModel"
                }
              },
              'text/json': {
                schema: {
                  '$ref': "#/components/schemas/TaskModel"
                }
              }
            }
          }
        }
      }
    },
    '/api/form/gettask': {
      post: {
        tags: [
          "Api"
        ],
        summary: "Get single task by Id",
        parameters: [
          {
            name: "api_key",
            in: "query",
            schema: {
              type: "string",
              nullable: true
            }
          }
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                '$ref': "#/components/schemas/GetTaskRequest"
              }
            },
            'text/json': {
              schema: {
                '$ref': "#/components/schemas/GetTaskRequest"
              }
            },
            'application/*+json': {
              schema: {
                '$ref': "#/components/schemas/GetTaskRequest"
              }
            }
          }
        },
        responses: {
          200: {
            description: "Success",
            content: {
              'text/plain': {
                schema: {
                  type: "array",
                  items: {
                    '$ref': "#/components/schemas/TaskModel"
                  }
                }
              },
              'application/json': {
                schema: {
                  type: "array",
                  items: {
                    '$ref': "#/components/schemas/TaskModel"
                  }
                }
              },
              'text/json': {
                schema: {
                  type: "array",
                  items: {
                    '$ref': "#/components/schemas/TaskModel"
                  }
                }
              }
            }
          }
        }
      }
    },
    '/api/form/gettasks': {
      post: {
        tags: [
          "Api"
        ],
        summary: "Search for tasks",
        parameters: [
          {
            name: "api_key",
            in: "query",
            schema: {
              type: "string",
              nullable: true
            }
          }
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                '$ref': "#/components/schemas/GetTasksRequest"
              }
            },
            'text/json': {
              schema: {
                '$ref': "#/components/schemas/GetTasksRequest"
              }
            },
            'application/*+json': {
              schema: {
                '$ref': "#/components/schemas/GetTasksRequest"
              }
            }
          }
        },
        responses: {
          200: {
            description: "Success",
            content: {
              'text/plain': {
                schema: {
                  type: "array",
                  items: {
                    '$ref': "#/components/schemas/TaskModel"
                  }
                }
              },
              'application/json': {
                schema: {
                  type: "array",
                  items: {
                    '$ref': "#/components/schemas/TaskModel"
                  }
                }
              },
              'text/json': {
                schema: {
                  type: "array",
                  items: {
                    '$ref': "#/components/schemas/TaskModel"
                  }
                }
              }
            }
          }
        }
      }
    },
    '/api/form/createpackage': {
      post: {
        tags: [
          "Api"
        ],
        summary: "Add item or package to existing task",
        parameters: [
          {
            name: "api_key",
            in: "query",
            schema: {
              type: "string",
              nullable: true
            }
          }
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                '$ref': "#/components/schemas/NewPackageRequest"
              }
            },
            'text/json': {
              schema: {
                '$ref': "#/components/schemas/NewPackageRequest"
              }
            },
            'application/*+json': {
              schema: {
                '$ref': "#/components/schemas/NewPackageRequest"
              }
            }
          }
        },
        responses: {
          200: {
            description: "Success",
            content: {
              'text/plain': {
                schema: {
                  '$ref': "#/components/schemas/TaskPackageModel"
                }
              },
              'application/json': {
                schema: {
                  '$ref': "#/components/schemas/TaskPackageModel"
                }
              },
              'text/json': {
                schema: {
                  '$ref': "#/components/schemas/TaskPackageModel"
                }
              }
            }
          }
        }
      }
    },
    '/api/form/updatepackage': {
      post: {
        tags: [
          "Api"
        ],
        summary: "Update an existing item or package",
        parameters: [
          {
            name: "api_key",
            in: "query",
            schema: {
              type: "string",
              nullable: true
            }
          }
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                '$ref': "#/components/schemas/UpdatePackageRequest"
              }
            },
            'text/json': {
              schema: {
                '$ref': "#/components/schemas/UpdatePackageRequest"
              }
            },
            'application/*+json': {
              schema: {
                '$ref': "#/components/schemas/UpdatePackageRequest"
              }
            }
          }
        },
        responses: {
          200: {
            description: "Success",
            content: {
              'text/plain': {
                schema: {
                  '$ref': "#/components/schemas/TaskPackageModel"
                }
              },
              'application/json': {
                schema: {
                  '$ref': "#/components/schemas/TaskPackageModel"
                }
              },
              'text/json': {
                schema: {
                  '$ref': "#/components/schemas/TaskPackageModel"
                }
              }
            }
          }
        }
      }
    },
    '/api/form/deletepackage': {
      post: {
        tags: [
          "Api"
        ],
        summary: "Delete an existing task",
        parameters: [
          {
            name: "api_key",
            in: "query",
            schema: {
              type: "string",
              nullable: true
            }
          }
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                '$ref': "#/components/schemas/DeletePackageRequest"
              }
            },
            'text/json': {
              schema: {
                '$ref': "#/components/schemas/DeletePackageRequest"
              }
            },
            'application/*+json': {
              schema: {
                '$ref': "#/components/schemas/DeletePackageRequest"
              }
            }
          }
        },
        responses: {
          200: {
            description: "Success",
            content: {
              'text/plain': {
                schema: {
                  '$ref': "#/components/schemas/TaskPackageModel"
                }
              },
              'application/json': {
                schema: {
                  '$ref': "#/components/schemas/TaskPackageModel"
                }
              },
              'text/json': {
                schema: {
                  '$ref': "#/components/schemas/TaskPackageModel"
                }
              }
            }
          }
        }
      }
    },
    '/api/form/getpackage': {
      post: {
        tags: [
          "Api"
        ],
        summary: "Get an existing item or package by Id",
        parameters: [
          {
            name: "api_key",
            in: "query",
            schema: {
              type: "string",
              nullable: true
            }
          }
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                '$ref': "#/components/schemas/GetPackageRequest"
              }
            },
            'text/json': {
              schema: {
                '$ref': "#/components/schemas/GetPackageRequest"
              }
            },
            'application/*+json': {
              schema: {
                '$ref': "#/components/schemas/GetPackageRequest"
              }
            }
          }
        },
        responses: {
          200: {
            description: "Success",
            content: {
              'text/plain': {
                schema: {
                  type: "array",
                  items: {
                    '$ref': "#/components/schemas/TaskPackageModel"
                  }
                }
              },
              'application/json': {
                schema: {
                  type: "array",
                  items: {
                    '$ref': "#/components/schemas/TaskPackageModel"
                  }
                }
              },
              'text/json': {
                schema: {
                  type: "array",
                  items: {
                    '$ref': "#/components/schemas/TaskPackageModel"
                  }
                }
              }
            }
          }
        }
      }
    },
    '/api/form/getpackages': {
      post: {
        tags: [
          "Api"
        ],
        summary: "Get existing items or packages by task Id",
        parameters: [
          {
            name: "api_key",
            in: "query",
            schema: {
              type: "string",
              nullable: true
            }
          }
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                '$ref': "#/components/schemas/GetPackagesRequest"
              }
            },
            'text/json': {
              schema: {
                '$ref': "#/components/schemas/GetPackagesRequest"
              }
            },
            'application/*+json': {
              schema: {
                '$ref': "#/components/schemas/GetPackagesRequest"
              }
            }
          }
        },
        responses: {
          200: {
            description: "Success",
            content: {
              'text/plain': {
                schema: {
                  type: "array",
                  items: {
                    '$ref': "#/components/schemas/TaskPackageModel"
                  }
                }
              },
              'application/json': {
                schema: {
                  type: "array",
                  items: {
                    '$ref': "#/components/schemas/TaskPackageModel"
                  }
                }
              },
              'text/json': {
                schema: {
                  type: "array",
                  items: {
                    '$ref': "#/components/schemas/TaskPackageModel"
                  }
                }
              }
            }
          }
        }
      }
    },
    '/api/form/gettaskhistory': {
      post: {
        tags: [
          "Api"
        ],
        summary: "Get status change history by task Id",
        parameters: [
          {
            name: "api_key",
            in: "query",
            schema: {
              type: "string",
              nullable: true
            }
          }
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                '$ref': "#/components/schemas/TaskHistoryRequest"
              }
            },
            'text/json': {
              schema: {
                '$ref': "#/components/schemas/TaskHistoryRequest"
              }
            },
            'application/*+json': {
              schema: {
                '$ref': "#/components/schemas/TaskHistoryRequest"
              }
            }
          }
        },
        responses: {
          200: {
            description: "Success",
            content: {
              'text/plain': {
                schema: {
                  type: "array",
                  items: {
                    '$ref': "#/components/schemas/TaskHistoryResponse"
                  }
                }
              },
              'application/json': {
                schema: {
                  type: "array",
                  items: {
                    '$ref': "#/components/schemas/TaskHistoryResponse"
                  }
                }
              },
              'text/json': {
                schema: {
                  type: "array",
                  items: {
                    '$ref': "#/components/schemas/TaskHistoryResponse"
                  }
                }
              }
            }
          }
        }
      }
    },
    '/api/form/getfiles': {
      post: {
        tags: [
          "Api"
        ],
        summary: "Get proof of delivery files by task Id",
        parameters: [
          {
            name: "api_key",
            in: "query",
            schema: {
              type: "string",
              nullable: true
            }
          }
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                '$ref': "#/components/schemas/GetAttachmentsRequest"
              }
            },
            'text/json': {
              schema: {
                '$ref': "#/components/schemas/GetAttachmentsRequest"
              }
            },
            'application/*+json': {
              schema: {
                '$ref': "#/components/schemas/GetAttachmentsRequest"
              }
            }
          }
        },
        responses: {
          200: {
            description: "Success",
            content: {
              'text/plain': {
                schema: {
                  type: "array",
                  items: {
                    '$ref': "#/components/schemas/TaskFileModel"
                  }
                }
              },
              'application/json': {
                schema: {
                  type: "array",
                  items: {
                    '$ref': "#/components/schemas/TaskFileModel"
                  }
                }
              },
              'text/json': {
                schema: {
                  type: "array",
                  items: {
                    '$ref': "#/components/schemas/TaskFileModel"
                  }
                }
              }
            }
          }
        }
      }
    },
    '/api/form/getdrivers': {
      post: {
        tags: [
          "Api"
        ],
        summary: "Get all available drivers",
        parameters: [
          {
            name: "api_key",
            in: "query",
            schema: {
              type: "string",
              nullable: true
            }
          }
        ],
        responses: {
          200: {
            description: "Success",
            content: {
              'text/plain': {
                schema: {
                  type: "array",
                  items: {
                    '$ref': "#/components/schemas/DriverModel"
                  }
                }
              },
              'application/json': {
                schema: {
                  type: "array",
                  items: {
                    '$ref': "#/components/schemas/DriverModel"
                  }
                }
              },
              'text/json': {
                schema: {
                  type: "array",
                  items: {
                    '$ref': "#/components/schemas/DriverModel"
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  components: {
    schemas: {
      NewTaskPackageRequest: {
        type: "object",
        properties: {
          productId: {
            type: "string",
            description: "Product Id or item Id",
            nullable: true
          },
          productDesc: {
            type: "string",
            description: "Short description of the item",
            nullable: true
          },
          orderId: {
            type: "string",
            description: "Order Id",
            nullable: true
          },
          quantity: {
            type: "integer",
            description: "Shipping Quantity",
            format: "int32",
            nullable: true
          },
          weight: {
            type: "number",
            description: "Total Weight",
            format: "double",
            nullable: true
          },
          price: {
            type: "number",
            description: "Line Total",
            format: "double",
            nullable: true
          },
          packageTypeId: {
            type: "integer",
            description: "Package type Id. Example: 1 - Each",
            format: "int32",
            nullable: true
          },
          labelId: {
            type: "string",
            description: "Label or barcode",
            nullable: true
          },
          field1: {
            type: "string",
            description: "Custom Field 1",
            nullable: true
          },
          field2: {
            type: "string",
            description: "Custom Field 2",
            nullable: true
          },
          field3: {
            type: "string",
            description: "Custom Field 3",
            nullable: true
          },
          field4: {
            type: "string",
            description: "Custom Field 4",
            nullable: true
          },
          field5: {
            type: "string",
            description: "Custom Field 5",
            nullable: true
          }
        },
        additionalProperties: false
      },
      NewTaskRequest: {
        required: [
          "destinationAddress",
          "taskTypeId"
        ],
        type: "object",
        properties: {
          taskTypeId: {
            type: "integer",
            description: "1: Delivery; 2: Pickup; 3: Appointment; 4: Field Workforce; 5: In-store Pickup; 6: Curbside Pickup; 7: Drive-thru Pickup;",
            format: "int32",
            default: 1
          },
          taskDesc: {
            type: "string",
            description: "Short description of the task. Example: Deliver mike to customer",
            nullable: true
          },
          externalKey: {
            type: "string",
            description: "External order Id or barcode",
            nullable: true
          },
          merchantId: {
            type: "string",
            description: "Merchant account Id if known",
            nullable: true
          },
          assignedToTeamId: {
            type: "integer",
            description: "Team Id",
            format: "int32",
            nullable: true
          },
          assignedToDriverUserId: {
            type: "string",
            description: "Driver user Id",
            nullable: true
          },
          afterDateTime: {
            type: "string",
            description: "Delivery start time. The date and time are in UTC (Coordinated Universal Time) format.",
            format: "date-time",
            nullable: true
          },
          beforeDateTime: {
            type: "string",
            description: "Delivery due time. The date and time are in UTC (Coordinated Universal Time) format.",
            format: "date-time",
            nullable: true
          },
          dispatchAddress: {
            type: "string",
            description: "Dispatch / pickup location address (optional)",
            nullable: true
          },
          dispatchBuilding: {
            type: "string",
            description: "Dispatch / pickup location details (optional)",
            nullable: true
          },
          dispatchNotes: {
            type: "string",
            description: "Dispatch / pickup location instructions (optional)",
            nullable: true
          },
          dispatchCoordinates: {
            type: "string",
            description: "Dispatch / pickup location GPS coordinates (optional). The latitude, followed by a comma, followed by the Longitude, for example: -33.8754116,151.2076118",
            nullable: true
          },
          requesterName: {
            type: "string",
            description: "Requester / sender's name",
            nullable: true
          },
          requesterEmail: {
            type: "string",
            description: "Requester / sender's email",
            nullable: true
          },
          requesterPhone: {
            type: "string",
            description: "Requester / sender's phone number",
            nullable: true
          },
          destinationAddress: {
            type: "string",
            description: "Destination location address"
          },
          destinationBuilding: {
            type: "string",
            description: "Destination location details",
            nullable: true
          },
          destinationCoordinates: {
            type: "string",
            description: "Destination location GPS coordinates (optional). The latitude, followed by a comma, followed by the Longitude, for example: -33.8754116,151.2076118",
            nullable: true
          },
          destinationNotes: {
            type: "string",
            description: "Destination delivery instructions",
            nullable: true
          },
          recipientName: {
            type: "string",
            description: "Destination recipient name",
            nullable: true
          },
          recipientEmail: {
            type: "string",
            description: "Destination recipient email",
            nullable: true
          },
          recipientPhone: {
            type: "string",
            description: "Destination recipient phone",
            nullable: true
          },
          serviceTime: {
            type: "string",
            description: "Service time (in minutes)  (optional)",
            default: "5",
            nullable: true
          },
          requirements: {
            type: "string",
            description: "Set if task requires mandatory POD. Enter 'S' to enable mandatory signature on the new tasks. Multiple POD requirements can be linked by comma e.g. 'S,P' means requires both signature and photos",
            nullable: true
          },
          priority: {
            type: "integer",
            description: "Delivery priority Id. Example: 10 - Urgent; 20 - Normal; 30 - Low",
            format: "int32",
            default: 20,
            nullable: true
          },
          alert: {
            type: "string",
            description: "Set if disable any email or SMS alert on task",
            nullable: true
          },
          amountDue: {
            type: "number",
            description: "Due amount. This can be used for cash on delivery option.",
            format: "double",
            nullable: true
          },
          deliveryFee: {
            type: "number",
            description: "Shipping fee of this task",
            format: "double",
            nullable: true
          },
          capacity: {
            type: "integer",
            description: "Optional task capacity in any unit you prefer (quantity, meters, etc. default value is 1). Units used to fill the driver-vehicle capacity.",
            format: "int32",
            default: 1,
            nullable: true
          },
          serviceId: {
            type: "integer",
            description: "Service Id or pricing template Id (optional)",
            format: "int32",
            nullable: true
          },
          templateId: {
            type: "integer",
            description: "Template Id for custom task form or POD form (optional)",
            format: "int32",
            nullable: true
          },
          tag1: {
            type: "string",
            description: "Custom field 1",
            nullable: true
          },
          tag2: {
            type: "string",
            description: "Custom field 2",
            nullable: true
          },
          tag3: {
            type: "string",
            description: "Custom field 3",
            nullable: true
          },
          tag4: {
            type: "string",
            description: "Custom field 4",
            nullable: true
          },
          tag5: {
            type: "string",
            description: "Custom field 5",
            nullable: true
          },
          packages: {
            type: "array",
            items: {
              '$ref': "#/components/schemas/NewTaskPackageRequest"
            },
            description: "Create multiple items/packages under this task (optional)",
            nullable: true
          }
        },
        additionalProperties: false
      },
      TaskModel: {
        type: "object",
        properties: {
          id: {
            type: "integer",
            format: "int32"
          },
          guid: {
            type: "string",
            nullable: true
          },
          accountId: {
            type: "integer",
            format: "int32",
            nullable: true
          },
          typeId: {
            type: "integer",
            format: "int32",
            nullable: true
          },
          typeDesc: {
            type: "string",
            nullable: true
          },
          statusId: {
            type: "integer",
            format: "int32",
            nullable: true
          },
          statusDesc: {
            type: "string",
            nullable: true
          },
          statusColour: {
            type: "string",
            nullable: true
          },
          statusIcon: {
            type: "string",
            nullable: true
          },
          taskDesc: {
            type: "string",
            nullable: true
          },
          externalKey: {
            type: "string",
            nullable: true
          },
          assignedToTeamId: {
            type: "integer",
            format: "int32",
            nullable: true
          },
          assignedToDriverUserId: {
            type: "string",
            nullable: true
          },
          createdDateTime: {
            type: "string",
            format: "date-time",
            nullable: true
          },
          modifiedDateTime: {
            type: "string",
            format: "date-time",
            nullable: true
          },
          afterDateTime: {
            type: "string",
            format: "date-time",
            nullable: true
          },
          beforeDateTime: {
            type: "string",
            format: "date-time",
            nullable: true
          },
          dispatchBranchId: {
            type: "integer",
            format: "int32",
            nullable: true
          },
          dispatchAddress: {
            type: "string",
            nullable: true
          },
          dispatchBuilding: {
            type: "string",
            nullable: true
          },
          dispatchNotes: {
            type: "string",
            nullable: true
          },
          dispatchCoordinates: {
            type: "string",
            nullable: true
          },
          requesterName: {
            type: "string",
            nullable: true
          },
          requesterEmail: {
            type: "string",
            nullable: true
          },
          requesterPhone: {
            type: "string",
            nullable: true
          },
          destinationAddress: {
            type: "string",
            nullable: true
          },
          destinationBuilding: {
            type: "string",
            nullable: true
          },
          destinationCoordinates: {
            type: "string",
            nullable: true
          },
          destinationNotes: {
            type: "string",
            nullable: true
          },
          recipientId: {
            type: "integer",
            format: "int32",
            nullable: true
          },
          recipientName: {
            type: "string",
            nullable: true
          },
          recipientEmail: {
            type: "string",
            nullable: true
          },
          recipientPhone: {
            type: "string",
            nullable: true
          },
          serviceTime: {
            type: "string",
            nullable: true
          },
          requirements: {
            type: "string",
            nullable: true
          },
          priority: {
            type: "integer",
            format: "int32",
            nullable: true
          },
          alert: {
            type: "string",
            nullable: true
          },
          amountDue: {
            type: "number",
            format: "double",
            nullable: true
          },
          deliveryFee: {
            type: "number",
            format: "double",
            nullable: true
          },
          tag1: {
            type: "string",
            nullable: true
          },
          tag2: {
            type: "string",
            nullable: true
          },
          tag3: {
            type: "string",
            nullable: true
          },
          tag4: {
            type: "string",
            nullable: true
          },
          tag5: {
            type: "string",
            nullable: true
          },
          completedRecipientName: {
            type: "string",
            nullable: true
          },
          completedCode: {
            type: "string",
            nullable: true
          },
          completedCoordinates: {
            type: "string",
            nullable: true
          },
          completedNotes: {
            type: "string",
            nullable: true
          },
          completedDateTime: {
            type: "string",
            format: "date-time",
            nullable: true
          },
          taskFailedReason: {
            type: "string",
            nullable: true
          },
          routeSortId: {
            type: "integer",
            format: "int32",
            nullable: true
          },
          driverName: {
            type: "string",
            nullable: true
          },
          lineCount: {
            type: "integer",
            format: "int32",
            nullable: true
          },
          totalQty: {
            type: "integer",
            format: "int32",
            nullable: true
          },
          totalAmount: {
            type: "number",
            format: "double",
            nullable: true
          },
          totalWeight: {
            type: "number",
            format: "double",
            nullable: true
          },
          merchantId: {
            type: "string",
            nullable: true
          },
          merchantName: {
            type: "string",
            nullable: true
          },
          templateId: {
            type: "integer",
            format: "int32",
            nullable: true
          },
          templateName: {
            type: "string",
            nullable: true
          },
          distance: {
            type: "integer",
            format: "int32",
            nullable: true
          },
          capacity: {
            type: "integer",
            format: "int32",
            nullable: true
          },
          serviceId: {
            type: "integer",
            format: "int32",
            nullable: true
          },
          serviceName: {
            type: "string",
            nullable: true
          },
          eta: {
            type: "string",
            format: "date-time",
            nullable: true
          },
          teamName: {
            type: "string",
            nullable: true
          },
          templateData: {
            type: "string",
            nullable: true
          },
          syncStatusId: {
            type: "integer",
            format: "int32",
            nullable: true
          }
        },
        additionalProperties: false
      },
      UpdateTaskRequest: {
        required: [
          "taskGuid"
        ],
        type: "object",
        properties: {
          taskGuid: {
            type: "string",
            description: "Task Id"
          },
          taskStatusId: {
            type: "integer",
            description: "Task status Id. 10:Unassigned 15:Assigning 20:Assigned 25:Processed 28:Loaded 30:Transit 40:Arrived 45:Awaiting Collection 50:Completed 51:Failed 52:Returned 90:Cancelled",
            format: "int32",
            nullable: true
          },
          taskTypeId: {
            type: "integer",
            description: "1: Delivery; 2: Pickup; 3: Appointment; 4: Field Workforce; 5: In-store Pickup; 6: Curbside Pickup; 7: Drive-thru Pickup;",
            format: "int32",
            default: 1,
            nullable: true
          },
          taskDesc: {
            type: "string",
            description: "Short description of the task. Example: Delivery mike to customer",
            nullable: true
          },
          externalKey: {
            type: "string",
            description: "External order Id or barcode",
            nullable: true
          },
          merchantId: {
            type: "string",
            description: "Merchant account Id if known",
            nullable: true
          },
          assignedToTeamId: {
            type: "integer",
            description: "Team Id",
            format: "int32",
            nullable: true
          },
          assignedToDriverUserId: {
            type: "string",
            description: "Driver user Id",
            nullable: true
          },
          afterDateTime: {
            type: "string",
            description: "Delivery start time. The date and time are in UTC (Coordinated Universal Time) format.",
            format: "date-time",
            nullable: true
          },
          beforeDateTime: {
            type: "string",
            description: "Delivery due time. The date and time are in UTC (Coordinated Universal Time) format.",
            format: "date-time",
            nullable: true
          },
          dispatchAddress: {
            type: "string",
            description: "Dispatch / pickup location address (optional)",
            nullable: true
          },
          dispatchBuilding: {
            type: "string",
            description: "Dispatch / pickup location details (optional)",
            nullable: true
          },
          dispatchNotes: {
            type: "string",
            description: "Dispatch / pickup location instructions (optional)",
            nullable: true
          },
          dispatchCoordinates: {
            type: "string",
            description: "Dispatch / pickup location GPS coordinates (optional). The latitude, followed by a comma, followed by the Longitude, for example: -33.8754116,151.2076118",
            nullable: true
          },
          requesterName: {
            type: "string",
            description: "Requester / sender's name",
            nullable: true
          },
          requesterEmail: {
            type: "string",
            description: "Requester / sender's email",
            nullable: true
          },
          requesterPhone: {
            type: "string",
            description: "Requester / sender's phone number",
            nullable: true
          },
          destinationAddress: {
            type: "string",
            description: "Destination location address",
            nullable: true
          },
          destinationBuilding: {
            type: "string",
            description: "Destination location details",
            nullable: true
          },
          destinationCoordinates: {
            type: "string",
            description: "Destination location GPS coordinates (optional). The latitude, followed by a comma, followed by the Longitude, for example: -33.8754116,151.2076118",
            nullable: true
          },
          destinationNotes: {
            type: "string",
            description: "Destination delivery instructions",
            nullable: true
          },
          recipientName: {
            type: "string",
            description: "Destination recipient name",
            nullable: true
          },
          recipientEmail: {
            type: "string",
            description: "Destination recipient email",
            nullable: true
          },
          recipientPhone: {
            type: "string",
            description: "Destination recipient phone",
            nullable: true
          },
          serviceTime: {
            type: "string",
            description: "Service time (in minutes)  (optional)",
            nullable: true
          },
          requirements: {
            type: "string",
            description: "Set if task requires mandatory POD. Enter 'S' to enable mandatory signature on the new tasks. Multiple POD requirements can be linked by comma e.g. 'S,P' means requires both signature and photos",
            nullable: true
          },
          priority: {
            type: "integer",
            description: "Delivery priority Id. Example: 10 - Urgent; 20 - Normal; 30 - Low",
            format: "int32",
            nullable: true
          },
          alert: {
            type: "string",
            description: "Set if disable any email or SMS alert on task",
            nullable: true
          },
          amountDue: {
            type: "number",
            description: "Due amount. This can be used for cash on delivery option.",
            format: "double",
            nullable: true
          },
          deliveryFee: {
            type: "number",
            description: "Shipping fee of this task",
            format: "double",
            nullable: true
          },
          capacity: {
            type: "integer",
            description: "Optional task capacity in any unit you prefer (quantity, meters, etc. default value is 1). Units used to fill the driver-vehicle capacity.",
            format: "int32",
            default: 1,
            nullable: true
          },
          serviceId: {
            type: "integer",
            description: "Service Id or pricing template Id (optional)",
            format: "int32",
            nullable: true
          },
          templateId: {
            type: "integer",
            description: "Template Id for custom task form or POD form (optional)",
            format: "int32",
            nullable: true
          },
          tag1: {
            type: "string",
            description: "Custom field 1",
            nullable: true
          },
          tag2: {
            type: "string",
            description: "Custom field 2",
            nullable: true
          },
          tag3: {
            type: "string",
            description: "Custom field 3",
            nullable: true
          },
          tag4: {
            type: "string",
            description: "Custom field 4",
            nullable: true
          },
          tag5: {
            type: "string",
            description: "Custom field 5",
            nullable: true
          }
        },
        additionalProperties: false
      },
      UpdateTaskStatusRequest: {
        required: [
          "statusId",
          "taskGuid"
        ],
        type: "object",
        properties: {
          taskGuid: {
            type: "string",
            description: "Task Id"
          },
          statusId: {
            type: "integer",
            description: "Task status Id. 10:Unassigned 15:Assigning 20:Assigned 25:Processed 28:Loaded 30:Transit 40:Arrived 45:Awaiting Collection 50:Completed 51:Failed 52:Returned 90:Cancelled",
            format: "int32"
          }
        },
        additionalProperties: false
      },
      AssignTaskToDriverRequest: {
        required: [
          "driverUserId",
          "taskGuid"
        ],
        type: "object",
        properties: {
          taskGuid: {
            type: "string",
            description: "Task Id"
          },
          driverUserId: {
            type: "string",
            description: "Driver user id, username, or email e.g. john@gmail.com"
          }
        },
        additionalProperties: false
      },
      DeleteTaskStatusRequest: {
        required: [
          "taskGuid"
        ],
        type: "object",
        properties: {
          taskGuid: {
            type: "string",
            description: "Task Id"
          }
        },
        additionalProperties: false
      },
      GetTaskRequest: {
        required: [
          "taskGuid"
        ],
        type: "object",
        properties: {
          taskGuid: {
            type: "string",
            description: "Task Id"
          }
        },
        additionalProperties: false
      },
      GetTasksRequest: {
        required: [
          "deliveryDueDate"
        ],
        type: "object",
        properties: {
          taskStatusId: {
            type: "string",
            description: "Task status Id. 10:Unassigned 15:Assigning 20:Assigned 25:Processed 28:Loaded 30:Transit 40:Arrived 45:Awaiting Collection 50:Completed 51:Failed 52:Returned 90:Cancelled",
            nullable: true
          },
          driverUserId: {
            type: "string",
            description: "Driver user Id who is allocated with this task",
            nullable: true
          },
          merchantId: {
            type: "string",
            description: "Merchant Id",
            nullable: true
          },
          externalKey: {
            type: "string",
            description: "External order Id or barcode",
            nullable: true
          },
          deliveryStartDate: {
            type: "string",
            description: "Delivery start/after date (UTC Time). The maximum date range is 30 days.",
            format: "date-time",
            nullable: true
          },
          deliveryDueDate: {
            type: "string",
            description: "Delivery before/due date (UTC Time). This field is mandatory. The maximum date range is 30 days.",
            format: "date-time"
          }
        },
        additionalProperties: false
      },
      NewPackageRequest: {
        required: [
          "productId",
          "taskGuid"
        ],
        type: "object",
        properties: {
          taskGuid: {
            type: "string",
            description: "Task Id"
          },
          productId: {
            type: "string",
            description: "Product Id or item Id"
          },
          productDesc: {
            type: "string",
            description: "Short description of the item",
            nullable: true
          },
          orderId: {
            type: "string",
            description: "Order Id",
            nullable: true
          },
          quantity: {
            type: "integer",
            description: "Shipping Quantity",
            format: "int32",
            nullable: true
          },
          weight: {
            type: "number",
            description: "Total Weight",
            format: "double",
            nullable: true
          },
          price: {
            type: "number",
            description: "Line Total",
            format: "double",
            nullable: true
          },
          packageTypeId: {
            type: "integer",
            description: "Package type Id. Example: 1 - Each",
            format: "int32",
            nullable: true
          },
          labelId: {
            type: "string",
            description: "Label or barcode",
            nullable: true
          },
          field1: {
            type: "string",
            description: "Custom Field 1",
            nullable: true
          },
          field2: {
            type: "string",
            description: "Custom Field 2",
            nullable: true
          },
          field3: {
            type: "string",
            description: "Custom Field 3",
            nullable: true
          },
          field4: {
            type: "string",
            description: "Custom Field 4",
            nullable: true
          },
          field5: {
            type: "string",
            description: "Custom Field 5",
            nullable: true
          }
        },
        additionalProperties: false
      },
      TaskPackageModel: {
        type: "object",
        properties: {
          id: {
            type: "integer",
            format: "int32"
          },
          taskId: {
            type: "integer",
            format: "int32"
          },
          orderId: {
            type: "string",
            nullable: true
          },
          productId: {
            type: "string",
            nullable: true
          },
          productDesc: {
            type: "string",
            nullable: true
          },
          quantity: {
            type: "integer",
            format: "int32",
            nullable: true
          },
          weight: {
            type: "number",
            format: "double",
            nullable: true
          },
          price: {
            type: "number",
            format: "double",
            nullable: true
          },
          packageTypeId: {
            type: "integer",
            format: "int32",
            nullable: true
          },
          packageTypeDesc: {
            type: "string",
            nullable: true
          },
          labelId: {
            type: "string",
            nullable: true
          },
          field1: {
            type: "string",
            nullable: true
          },
          field2: {
            type: "string",
            nullable: true
          },
          field3: {
            type: "string",
            nullable: true
          },
          field4: {
            type: "string",
            nullable: true
          },
          field5: {
            type: "string",
            nullable: true
          }
        },
        additionalProperties: false
      },
      UpdatePackageRequest: {
        required: [
          "packageId",
          "taskGuid"
        ],
        type: "object",
        properties: {
          packageId: {
            type: "integer",
            description: "Package Id",
            format: "int32"
          },
          taskGuid: {
            type: "string",
            description: "Task Id"
          },
          productId: {
            type: "string",
            description: "Product Id or item Id",
            nullable: true
          },
          productDesc: {
            type: "string",
            description: "Short description of the item",
            nullable: true
          },
          orderId: {
            type: "string",
            description: "Order Id",
            nullable: true
          },
          quantity: {
            type: "integer",
            description: "Shipping Quantity",
            format: "int32",
            nullable: true
          },
          weight: {
            type: "number",
            description: "Total Weight",
            format: "double",
            nullable: true
          },
          price: {
            type: "number",
            description: "Line Total",
            format: "double",
            nullable: true
          },
          packageTypeId: {
            type: "integer",
            description: "Package type Id. Example: 1 - Each",
            format: "int32",
            nullable: true
          },
          labelId: {
            type: "string",
            description: "Label or barcode",
            nullable: true
          },
          field1: {
            type: "string",
            description: "Custom Field 1",
            nullable: true
          },
          field2: {
            type: "string",
            description: "Custom Field 2",
            nullable: true
          },
          field3: {
            type: "string",
            description: "Custom Field 3",
            nullable: true
          },
          field4: {
            type: "string",
            description: "Custom Field 4",
            nullable: true
          },
          field5: {
            type: "string",
            description: "Custom Field 5",
            nullable: true
          }
        },
        additionalProperties: false
      },
      DeletePackageRequest: {
        required: [
          "packageId",
          "taskGuid"
        ],
        type: "object",
        properties: {
          taskGuid: {
            type: "string",
            description: "Task Id"
          },
          packageId: {
            type: "integer",
            description: "Package Id",
            format: "int32"
          }
        },
        additionalProperties: false
      },
      GetPackageRequest: {
        required: [
          "packageId",
          "taskGuid"
        ],
        type: "object",
        properties: {
          taskGuid: {
            type: "string",
            description: "Task Id"
          },
          packageId: {
            type: "integer",
            description: "Package Id",
            format: "int32"
          }
        },
        additionalProperties: false
      },
      GetPackagesRequest: {
        required: [
          "taskGuid"
        ],
        type: "object",
        properties: {
          taskGuid: {
            type: "string",
            description: "Task Id"
          }
        },
        additionalProperties: false
      },
      TaskHistoryRequest: {
        required: [
          "taskGuid"
        ],
        type: "object",
        properties: {
          taskGuid: {
            type: "string",
            description: "Task Id"
          }
        },
        additionalProperties: false
      },
      TaskHistoryResponse: {
        type: "object",
        properties: {
          historyId: {
            type: "integer",
            description: "History Id",
            format: "int32"
          },
          timeStamp: {
            type: "string",
            description: "History Time Stamp (UTC)",
            format: "date-time",
            nullable: true
          },
          statusId: {
            type: "integer",
            description: "Status Id",
            format: "int32",
            nullable: true
          },
          statusDesc: {
            type: "string",
            description: "Status Description",
            nullable: true
          }
        },
        additionalProperties: false
      },
      GetAttachmentsRequest: {
        required: [
          "taskGuid"
        ],
        type: "object",
        properties: {
          taskGuid: {
            type: "string",
            description: "Task Id"
          }
        },
        additionalProperties: false
      },
      TaskFileModel: {
        type: "object",
        properties: {
          id: {
            type: "integer",
            format: "int32"
          },
          taskId: {
            type: "integer",
            format: "int32"
          },
          typeId: {
            type: "integer",
            format: "int32"
          },
          fileGuid: {
            type: "string",
            nullable: true
          },
          fileName: {
            type: "string",
            nullable: true
          },
          fileDesc: {
            type: "string",
            nullable: true
          },
          contentType: {
            type: "string",
            nullable: true
          },
          createdUserId: {
            type: "string",
            nullable: true
          },
          createdDateTime: {
            type: "string",
            format: "date-time",
            nullable: true
          },
          data: {
            type: "string",
            nullable: true
          }
        },
        additionalProperties: false
      },
      DriverModel: {
        type: "object",
        properties: {
          id: {
            type: "string",
            nullable: true
          },
          email: {
            type: "string",
            nullable: true
          },
          phoneNumber: {
            type: "string",
            nullable: true
          },
          userName: {
            type: "string",
            nullable: true
          },
          firstName: {
            type: "string",
            nullable: true
          },
          lastName: {
            type: "string",
            nullable: true
          },
          position: {
            type: "string",
            nullable: true
          },
          timeZone: {
            type: "string",
            nullable: true
          },
          telephone: {
            type: "string",
            nullable: true
          },
          profileImage: {
            type: "string",
            nullable: true
          },
          address: {
            type: "string",
            nullable: true
          },
          businessNumber: {
            type: "string",
            nullable: true
          },
          teamName: {
            type: "string",
            nullable: true
          },
          transportTypeId: {
            type: "integer",
            format: "int32",
            nullable: true
          },
          transportDesc: {
            type: "string",
            nullable: true
          },
          transportLicensePlate: {
            type: "string",
            nullable: true
          },
          isOnDuty: {
            type: "integer",
            format: "int32",
            nullable: true
          },
          capacity: {
            type: "integer",
            format: "int32",
            nullable: true
          },
          statusId: {
            type: "integer",
            format: "int32"
          },
          statusDesc: {
            type: "string",
            nullable: true
          },
          numActiveTask: {
            type: "integer",
            format: "int32",
            nullable: true
          }
        },
        additionalProperties: false
      }
    },
    securitySchemes: {
      Bearer: {
        type: "apiKey",
        description: "JWT Authorization header using the bearer scheme",
        name: "Authorization",
        in: "header"
      }
    }
  },
  security: [
    {
      Bearer: []
    }
  ]
}
