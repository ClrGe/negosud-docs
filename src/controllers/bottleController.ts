/**
 * API_NEGOSUD.yamlLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import {
  ApiBottleAddBottleRequest,
  apiBottleAddBottleRequestSchema,
} from '../models/apiBottleAddBottleRequest';
import {
  ApiBottleDeleteBottleRequest,
  apiBottleDeleteBottleRequestSchema,
} from '../models/apiBottleDeleteBottleRequest';
import {
  ApiBottleMassAddBottleRequest,
  apiBottleMassAddBottleRequestSchema,
} from '../models/apiBottleMassAddBottleRequest';
import {
  ApiBottleMassDeleteBottleRequest,
  apiBottleMassDeleteBottleRequestSchema,
} from '../models/apiBottleMassDeleteBottleRequest';
import {
  ApiBottleMassUpdateBottleRequest,
  apiBottleMassUpdateBottleRequestSchema,
} from '../models/apiBottleMassUpdateBottleRequest';
import {
  ApiBottleUpdateBottleRequest,
  apiBottleUpdateBottleRequestSchema,
} from '../models/apiBottleUpdateBottleRequest';
import { array, string, unknown } from '../schema';
import { BaseController } from './baseController';

export class BottleController extends BaseController {
  /**
   * @return Response from the API call
   */
  async apiBottle(
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<unknown>> {
    const req = this.createRequest('GET', '/Bottle');
    req.authenticate(false);
    return req.callAsJson(unknown(), requestOptions);
  }

  /**
   * @param id
   * @return Response from the API call
   */
  async apiBottleId(
    id: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<unknown>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ id: [id, string()] });
    req.appendTemplatePath`/Bottle/ ${mapped.id}`;
    req.authenticate(false);
    return req.callAsJson(unknown(), requestOptions);
  }

  /**
   * @param body
   * @return Response from the API call
   */
  async apiBottleAddBottle(
    body: ApiBottleAddBottleRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<unknown>> {
    const req = this.createRequest('POST', '/Bottle/AddBottle');
    const mapped = req.prepareArgs({
      body: [body, apiBottleAddBottleRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    return req.callAsJson(unknown(), requestOptions);
  }

  /**
   * @param body
   * @return Response from the API call
   */
  async apiBottleMassAddBottle(
    body: ApiBottleMassAddBottleRequest[],
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<unknown>> {
    const req = this.createRequest('POST', '/Bottle/MassAddBottle');
    const mapped = req.prepareArgs({
      body: [body, array(apiBottleMassAddBottleRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    return req.callAsJson(unknown(), requestOptions);
  }

  /**
   * @param body
   * @return Response from the API call
   */
  async apiBottleUpdateBottle(
    body: ApiBottleUpdateBottleRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<unknown>> {
    const req = this.createRequest('POST', '/Bottle/UpdateBottle');
    const mapped = req.prepareArgs({
      body: [body, apiBottleUpdateBottleRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    return req.callAsJson(unknown(), requestOptions);
  }

  /**
   * @param body
   * @return Response from the API call
   */
  async apiBottleMassUpdateBottle(
    body: ApiBottleMassUpdateBottleRequest[],
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<unknown>> {
    const req = this.createRequest('POST', '/Bottle/MassUpdateBottle');
    const mapped = req.prepareArgs({
      body: [body, array(apiBottleMassUpdateBottleRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    return req.callAsJson(unknown(), requestOptions);
  }

  /**
   * @param body
   * @return Response from the API call
   */
  async apiBottleDeleteBottle(
    body: ApiBottleDeleteBottleRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<unknown>> {
    const req = this.createRequest('POST', '/Bottle/DeleteBottle');
    const mapped = req.prepareArgs({
      body: [body, apiBottleDeleteBottleRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    return req.callAsJson(unknown(), requestOptions);
  }

  /**
   * @param body
   * @return Response from the API call
   */
  async apiBottleMassDeleteBottle(
    body: ApiBottleMassDeleteBottleRequest[],
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<unknown>> {
    const req = this.createRequest('POST', '/Bottle/MassDeleteBottle');
    const mapped = req.prepareArgs({
      body: [body, array(apiBottleMassDeleteBottleRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    return req.callAsJson(unknown(), requestOptions);
  }
}