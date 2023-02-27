/**
 * API_NEGOSUD.yamlLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { nullable, object, Schema, string } from '../schema';

export interface ApiCountryAddCountryRequest {
  name: string;
  createdAt: string;
  updatedAt: string | null;
  createdBy: string;
  updatedBy: string;
  cities: string | null;
  regions: string | null;
}

export const apiCountryAddCountryRequestSchema: Schema<ApiCountryAddCountryRequest> = object(
  {
    name: ['name', string()],
    createdAt: ['createdAt', string()],
    updatedAt: ['updatedAt', nullable(string())],
    createdBy: ['createdBy', string()],
    updatedBy: ['updatedBy', string()],
    cities: ['cities', nullable(string())],
    regions: ['regions', nullable(string())],
  }
);