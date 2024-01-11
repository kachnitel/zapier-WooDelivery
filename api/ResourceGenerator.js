require('dotenv').config();
const Swagger = require('./Swagger');

class ResourceGenerator {
  constructor() {
    this._resources = [];
  }

  getResource(key) {
    if (!this._resources.length) {
      this.generate();
    }

    return this._resources.find(r => r.key === key);
  }

  /**
   * get https://api.woodelivery.com/swagger/v1/swagger.json and parse it
   * for each path, get the response schema and generate output fields
   */
  generate() {
    this.forEachKey(Swagger.components.schemas, (component, schema) => {
      // skip resources not ending in Model
      if (!component.endsWith('Model')) {
        return;
      }

      const resource = this.generateResource(component, schema);
      this._resources.push(resource);
    });

    return this._resources;
  }

  /**
   * generate a resource for a component
   */
  generateResource(component) {
    const schema = Swagger.components.schemas[component];

    const resource = {
      key: component.replace(/Model$/, '').toLowerCase(),
      noun: this._generateNoun(component),
      sample: this._generateSample(schema.properties),
      outputFields: this._generateOutputFields(schema)
      // get/list/search/create
    };

    return resource;
  }

  /**
   * Generate the actions for a component
   * Look into Swagger.paths[][].responses.2??.content.*.schema.$ref
   * If it is a reference to a schema, then it is an action (format "#/components/schemas/TaskModel")
   */
  generateActions(component) {
    const actions = {};

    this.forEachKey(Swagger.paths, (path, methods) => {
      this.forEachKey(methods, (method, methodSpec) => {
        const responses = methodSpec.responses;
        const requestData = methodSpec.requestBody;

        this.forEachKey(responses, (responseCode, responseSpec) => {
          if (responseCode > 299) {
            return;
          }

          let responseSpecSchema = responseSpec.content?.['application/json']?.schema;

          if (!responseSpecSchema) {
            return;
          }

          let ref = responseSpecSchema.$ref || responseSpecSchema.items?.$ref;

          if (!ref || !ref === `#/components/schemas/${component}`) {
            return;
          }

          // find matching request data
          let requestRef = requestData?.content['application/json']?.schema?.$ref;

          if (!requestRef) {
            return;
          }

          // get Model name from ref
          const requestModelName = requestRef.split('/').pop();
          const inputFields = this._generateInputFields(requestModelName);

          const action = {
            display: {
              label: `${method.toUpperCase()} ${requestModelName}`,
              description: `${method} a ${requestModelName}`
            },
            operation: {
              inputFields: inputFields,
              perform: this._generatePerform(path, method)
            }
          };

          actions[`${method}_${requestModelName}`] = action;
        });
      });
    });

    return actions;
  }

  _generateInputFields(modelName) {
    // find ref in components.schemas
    let schema = Swagger.components.schemas[modelName];

    if (!schema) {
      throw new Error(`Could not find schema for ${modelName}`);
    }

    const fields = this._generateFields(schema.properties);

    return fields;
  }

  _generateOutputFields(schema) {
    const fields = this._generateFields(schema.properties, schema.required);
    return fields;
  }

  /**
   * @param {object} properties
   * @param {array} required
   */
  _generateFields(properties, required = []) {
    const fields = [];
    this.forEachKey(properties, (key, property) => {
      const field = {
        key: key,
        label: key,
        type: this._generateFieldType(property),
        required: required.includes(key),
        helpText: property.description
      };

      fields.push(field);
    });

    return fields;
  }

  _generateFieldType(property) {
    if (property.type === 'string' && property.format === 'date-time') {
      return 'datetime';
    }

    if (property.type === 'array' && property.items?.$ref) {
      return 'string';
      // TODO: dynamic field with id of ref? or id and name object?
    }

    return property.type;
  }

  _generateSample(properties) {
    const sample = {};
    this.forEachKey(properties, (key, property) => {
      let sampleValue = null;

      if (property.type === 'string') {
        sampleValue = key + ' value';
      } else if (property.type === 'integer') {
        sampleValue = 1;
      } else if (property.type === 'boolean') {
        sampleValue = true;
      } else if (property.type === 'array') {
        sampleValue = [];
      } else if (property.type === 'object') {
        sampleValue = {};
      }

      sample[key] = sampleValue;
    });

    return sample;
  }

  _generateNoun(component) {
    return component.replace(/Model$/, '');
  }

  _generatePerform(path, method) {
    return {
      url: `${process.env.BASE_URL}${path}`,
      method: method.toUpperCase(),
      // removeMissingValuesFrom: { params: true }
    }
  }

  forEachKey(obj, callback) {
    Object.keys(obj).forEach(key => {
      if (undefined === obj[key]) {
        throw new Error(`Undefined value for key ${key}`);
      }
      callback(key, obj[key]);
    });
  }
}

module.exports = ResourceGenerator;
