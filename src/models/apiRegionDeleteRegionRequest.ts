/**
 * API_NEGOSUD.yamlLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, Schema } from '../schema';

export interface ApiRegionDeleteRegionRequest {
  id: number;
}

export const apiRegionDeleteRegionRequestSchema: Schema<ApiRegionDeleteRegionRequest> = object(
  { id: ['id', number()] }
);
