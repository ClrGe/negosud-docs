/**
 * API_NEGOSUD.yamlLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, Schema } from '../schema';

export interface ApiAddressAddAddressRequest {
  id: number;
}

export const apiAddressAddAddressRequestSchema: Schema<ApiAddressAddAddressRequest> = object(
  { id: ['id', number()] }
);