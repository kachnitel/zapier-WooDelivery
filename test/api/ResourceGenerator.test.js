const ResourceGenerator = require('../../api/ResourceGenerator');
const swagger = require('../../api/WooDelivery/Swagger');

describe('ResourceGenerator', () => {
  let resourceGenerator;

  beforeEach(() => {
    resourceGenerator = new ResourceGenerator();
  });

  describe('getResource', () => {
    it('should return the resource with the specified name', () => {
      // Arrange
      const resourceName = 'task';

      // Act
      const result = resourceGenerator.getResource(resourceName);

      // Assert
      expect(result).toBeDefined();
      expect(result.key).toEqual(resourceName);
    });

    it('should return undefined if the resource does not exist', () => {
      // Arrange
      const resourceName = 'nonExistentResource';

      // Act
      const result = resourceGenerator.getResource(resourceName);

      // Assert
      expect(result).toBeUndefined();
    });
  });

  describe('_generateResource', () => {
    it('should return the resource', () => {
      // Act
      const result = resourceGenerator.generateResource(
        'TaskModel',
        swagger.components.schemas.TaskModel
      );

      // Assert
      expect(result).toBeDefined();
      expect(result.key).toEqual('task');
      expect(result.noun).toEqual('Task');
      expect(result.sample).toBeDefined();
      expect(result.outputFields).toBeDefined();

      // TODO: test actions exist
      // get/list/search/create REVIEW what's on task at Swagger
    });
  });

  describe('generateActions', () => {
    it('should return the actions', () => {
      // Act
      const result = resourceGenerator.generateActions(
        'TaskModel'
      );

      // Assert
      expect(result).toBeDefined();
      expect(result['post_GetTasksRequest']).toBeDefined();
      expect(result['post_GetTasksRequest'].display.label).toEqual('Get Tasks');
      expect(result['post_GetTasksRequest'].operation.perform).toBeDefined();
      expect(result['post_NewTaskRequest']).toBeDefined();
    });
  });

  describe('_generateInputFields', () => {
    it('should return the input fields', () => {
      // Act
      const result = resourceGenerator._generateInputFields(
        'NewTaskRequest'
      );

      // Assert
      expect(result).toBeDefined();
      expect(result).toHaveLength(37);
      expect(result[0].key).toEqual('taskTypeId');
      expect(result[0].required).toEqual(true);
    });
  });

  describe('_generateOutputFields', () => {
    it('should return the output fields', () => {
      // Act
      const result = resourceGenerator._generateOutputFields(
        'TaskModel'
      );

      // Assert
      expect(result).toBeDefined();
      expect(result).toHaveLength(68);
    });
  });

  describe('_generateFields', () => {
    it('should return the fields', () => {
      // Act
      const result = resourceGenerator._generateFields(
        swagger.components.schemas.TaskModel.properties
      );

      // Assert
      expect(result).toBeDefined();
      expect(result).toHaveLength(68);
    });

    it('should return the fields with the correct keys', () => {
      // Act
      const result = resourceGenerator._generateFields(
        swagger.components.schemas.TaskModel.properties
      );

      // Assert
      expect(result).toBeDefined();
      expect(result[0].key).toEqual('id');
      expect(result[1].key).toEqual('guid');
      expect(result[2].key).toEqual('accountId');
      expect(result[15].key).toEqual('afterDateTime');
    });

    it('should return the fields with the correct types', () => {
      // Act
      const result = resourceGenerator._generateFields(
        swagger.components.schemas.TaskModel.properties
      );

      // Assert
      expect(result).toBeDefined();
      expect(result[0].type).toEqual('integer');
      expect(result[1].type).toEqual('string');
      expect(result[2].type).toEqual('integer');
      expect(result[15].type).toEqual('datetime');
    });

    it('should return the fields with the correct required values', () => {
      // Act
      const result = resourceGenerator._generateFields(
        swagger.components.schemas.NewTaskRequest.properties,
        swagger.components.schemas.NewTaskRequest.required
      );

      // Assert
      expect(result).toBeDefined();
      // Find id of taskTypeId
      const taskTypeIdIndex = result.findIndex(field => field.key === 'taskTypeId'); // 0
      expect(result[taskTypeIdIndex].required).toEqual(true);

      // Find id of taskDesc
      const taskDescIndex = result.findIndex(field => field.key === 'taskDesc');
      expect(result[taskDescIndex].required).toEqual(false);
    });
  });

  describe('_generateFieldType', () => {
    /**
     * Ensure that { type: 'string', format: 'date-time' } is converted to 'datetime'
     */
    it('should return the field type', () => {
      let field = { type: 'string', format: 'date-time' };
      let result = resourceGenerator._generateFieldType(field);
      expect(result).toEqual('datetime');

      field = { type: 'string', format: 'date' };
      result = resourceGenerator._generateFieldType(field);
      expect(result).toEqual('string');

      field = { type: 'string' };
      result = resourceGenerator._generateFieldType(field);
      expect(result).toEqual('string');
    });
  });


  describe('_generateSample', () => {
    it('should return the sample', () => {
      // Act
      const result = resourceGenerator._generateSample(swagger.components.schemas.TaskModel.properties);

      // Assert
      expect(result.id).toEqual(1);
      expect(result.guid).toEqual('guid value');
    });
  });

  describe('_generateNoun', () => {
    it('should return the noun', () => {
      // Act
      const result = resourceGenerator._generateNoun('TaskModel');

      // Assert
      expect(result).toEqual('Task');
    });
  });

  describe('_generateActionNoun', () => {
    it('should turn GetTasksRequest into Get Tasks', () => {
      // Act
      const result = resourceGenerator._generateActionNoun('GetTasksRequest');

      // Assert
      expect(result).toEqual('Get Tasks');
    });
  });
});
