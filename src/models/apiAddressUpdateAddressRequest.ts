/**
 * API_NEGOSUD.yamlLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { nullable, number, object, Schema, string } from '../schema';

export interface ApiAddressUpdateAddressRequest {
  id: number;
  addressLine1: string;
  addressLine2: string;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string;
  supplierId: string | null;
  cityId: string | null;
  userId: string | null;
  city: string | null;
  user: string | null;
  supplier: string | null;
}

export const apiAddressUpdateAddressRequestSchema: Schema<ApiAddressUpdateAddressRequest> = object(
  {
    id: ['id', number()],
    addressLine1: ['addressLine1', string()],
    addressLine2: ['addressLine2', string()],
    createdAt: ['createdAt', string()],
    updatedAt: ['updatedAt', string()],
    createdBy: ['createdBy', string()],
    updatedBy: ['updatedBy', string()],
    supplierId: ['supplierId', nullable(string())],
    cityId: ['cityId', nullable(string())],
    userId: ['userId', nullable(string())],
    city: ['city', nullable(string())],
    user: ['user', nullable(string())],
    supplier: ['supplier', nullable(string())],
  }
);
