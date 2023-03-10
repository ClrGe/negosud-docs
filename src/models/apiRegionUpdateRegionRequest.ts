/**
 * API_NEGOSUD.yamlLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, Schema, string } from '../schema';

export interface ApiRegionUpdateRegionRequest {
  id: number;
  name: string;
  createdAt: string;
  createdBy: string;
  updatedBy: string;
}

export const apiRegionUpdateRegionRequestSchema: Schema<ApiRegionUpdateRegionRequest> = object(
  {
    id: ['id', number()],
    name: ['name', string()],
    createdAt: ['createdAt', string()],
    createdBy: ['createdBy', string()],
    updatedBy: ['updatedBy', string()],
  }
);
