/**
 * API_NEGOSUD.yamlLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, Schema } from '../schema';

export interface ApiSupplierDeleteSupplierRequest {
  id: number;
}

export const apiSupplierDeleteSupplierRequestSchema: Schema<ApiSupplierDeleteSupplierRequest> = object(
  { id: ['id', number()] }
);
