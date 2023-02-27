/**
 * API_NEGOSUD.yamlLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import {
  ApiGrapeAddGrapeRequest,
  apiGrapeAddGrapeRequestSchema,
} from '../models/apiGrapeAddGrapeRequest';
import {
  ApiGrapeDeleteGrapeRequest,
  apiGrapeDeleteGrapeRequestSchema,
} from '../models/apiGrapeDeleteGrapeRequest';
import {
  ApiGrapeUpdateGrapeRequest,
  apiGrapeUpdateGrapeRequestSchema,
} from '../models/apiGrapeUpdateGrapeRequest';
import { unknown } from '../schema';
import { BaseController } from './baseController';

export class GrapeController extends BaseController {
  /**
   * @return Response from the API call
   */
  async apiGrapeId(
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<unknown>> {
    const req = this.createRequest('GET', '/Grape/3691');
    return req.callAsJson(unknown(), requestOptions);
  }

  /**
   * @return Response from the API call
   */
  async apiGrape(
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<unknown>> {
    const req = this.createRequest('GET', '/Grape');
    return req.callAsJson(unknown(), requestOptions);
  }

  /**
   * @param body
   * @return Response from the API call
   */
  async apiGrapeAddGrape(
    body: ApiGrapeAddGrapeRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<unknown>> {
    const req = this.createRequest('POST', '/Grape/AddGrape');
    const mapped = req.prepareArgs({
      body: [body, apiGrapeAddGrapeRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    return req.callAsJson(unknown(), requestOptions);
  }

  /**
   * @param body
   * @return Response from the API call
   */
  async apiGrapeUpdateGrape(
    body: ApiGrapeUpdateGrapeRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<unknown>> {
    const req = this.createRequest('POST', '/Grape/UpdateGrape');
    const mapped = req.prepareArgs({
      body: [body, apiGrapeUpdateGrapeRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    return req.callAsJson(unknown(), requestOptions);
  }

  /**
   * @param body
   * @return Response from the API call
   */
  async apiGrapeDeleteGrape(
    body: ApiGrapeDeleteGrapeRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<unknown>> {
    const req = this.createRequest('POST', '/Grape/DeleteGrape');
    const mapped = req.prepareArgs({
      body: [body, apiGrapeDeleteGrapeRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    return req.callAsJson(unknown(), requestOptions);
  }
}