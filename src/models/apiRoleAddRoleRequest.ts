/**
 * API_NEGOSUD.yamlLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

export interface ApiRoleAddRoleRequest {
  name: string;
  createdAt: string;
  updatedAt: string;
}

export const apiRoleAddRoleRequestSchema: Schema<ApiRoleAddRoleRequest> = object(
  {
    name: ['name', string()],
    createdAt: ['createdAt', string()],
    updatedAt: ['updatedAt', string()],
  }
);
