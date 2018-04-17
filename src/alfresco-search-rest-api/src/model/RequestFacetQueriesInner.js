/**
 * Alfresco Content Services REST API
 * **Search API**  Provides access to the search features of Alfresco Content Services.
 *
 * OpenAPI spec version: 1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoContentServicesRestApi) {
      root.AlfrescoContentServicesRestApi = {};
    }
    root.AlfrescoContentServicesRestApi.RequestFacetQueriesInner = factory(root.AlfrescoContentServicesRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The RequestFacetQueriesInner model module.
   * @module model/RequestFacetQueriesInner
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>RequestFacetQueriesInner</code>.
   * @alias module:model/RequestFacetQueriesInner
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>RequestFacetQueriesInner</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {any} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RequestFacetQueriesInner} obj Optional instance to populate.
   * @return {module:model/RequestFacetQueriesInner} The populated <code>RequestFacetQueriesInner</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('query')) {
        obj['query'] = ApiClient.convertToType(data['query'], 'String');
      }
      if (data.hasOwnProperty('label')) {
        obj['label'] = ApiClient.convertToType(data['label'], 'String');
      }
    }
    return obj;
  }

  /**
   * A facet query
   * @member {string} query
   */
  exports.prototype['query'] = undefined;
  /**
   * A label to include in place of the facet query
   * @member {string} label
   */
  exports.prototype['label'] = undefined;



  return exports;
}));


