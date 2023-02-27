/**
 * API_NEGOSUD.yamlLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, Schema, string } from '../schema';

export interface ApiCustomerOrderUpdateCustomerOrderRequest {
  id: number;
  reference: string;
  description: string;
}

export const apiCustomerOrderUpdateCustomerOrderRequestSchema: Schema<ApiCustomerOrderUpdateCustomerOrderRequest> = object(
  {
    id: ['id', number()],
    reference: ['reference', string()],
    description: ['description', string()],
  }
);
