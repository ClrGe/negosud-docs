/**
 * API_NEGOSUD.yamlLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import {
  ApiStorageLocationAddStorageLocationRequest,
  apiStorageLocationAddStorageLocationRequestSchema,
} from '../models/apiStorageLocationAddStorageLocationRequest';
import {
  ApiStorageLocationDeleteStorageLocationRequest,
  apiStorageLocationDeleteStorageLocationRequestSchema,
} from '../models/apiStorageLocationDeleteStorageLocationRequest';
import {
  ApiStorageLocationUpdateStorageLocationRequest,
  apiStorageLocationUpdateStorageLocationRequestSchema,
} from '../models/apiStorageLocationUpdateStorageLocationRequest';
import { unknown } from '../schema';
import { BaseController } from './baseController';

export class StorageLocationController extends BaseController {
  /**
   * @return Response from the API call
   */
  async apiStorageLocationId(
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<unknown>> {
    const req = this.createRequest('GET', '/StorageLocation/3691');
    return req.callAsJson(unknown(), requestOptions);
  }

  /**
   * @return Response from the API call
   */
  async apiStorageLocation(
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<unknown>> {
    const req = this.createRequest('GET', '/StorageLocation');
    return req.callAsJson(unknown(), requestOptions);
  }

  /**
   * @param body
   * @return Response from the API call
   */
  async apiStorageLocationAddStorageLocation(
    body: ApiStorageLocationAddStorageLocationRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<unknown>> {
    const req = this.createRequest(
      'POST',
      '/StorageLocation/AddStorageLocation'
    );
    const mapped = req.prepareArgs({
      body: [body, apiStorageLocationAddStorageLocationRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    return req.callAsJson(unknown(), requestOptions);
  }

  /**
   * @param body
   * @return Response from the API call
   */
  async apiStorageLocationUpdateStorageLocation(
    body: ApiStorageLocationUpdateStorageLocationRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<unknown>> {
    const req = this.createRequest(
      'POST',
      '/StorageLocation/UpdateStorageLocation'
    );
    const mapped = req.prepareArgs({
      body: [body, apiStorageLocationUpdateStorageLocationRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    return req.callAsJson(unknown(), requestOptions);
  }

  /**
   * @param body
   * @return Response from the API call
   */
  async apiStorageLocationDeleteStorageLocation(
    body: ApiStorageLocationDeleteStorageLocationRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<unknown>> {
    const req = this.createRequest(
      'POST',
      '/StorageLocation/DeleteStorageLocation'
    );
    const mapped = req.prepareArgs({
      body: [body, apiStorageLocationDeleteStorageLocationRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    return req.callAsJson(unknown(), requestOptions);
  }
}
