/**
 * API_NEGOSUD.yamlLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { nullable, object, Schema, string } from '../schema';

export interface ApiCustomerOrderAddCustomerOrderRequest {
  reference: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  cancelledAt: string | null;
  dateOrder: string | null;
  dateDelivery: string | null;
  createdBy: string | null;
  updatedBy: string | null;
  cancelledBy: string | null;
  deliveryStatus: string | null;
  deliveryAddress: string | null;
  customer: string | null;
  lines: string | null;
}

export const apiCustomerOrderAddCustomerOrderRequestSchema: Schema<ApiCustomerOrderAddCustomerOrderRequest> = object(
  {
    reference: ['reference', string()],
    description: ['description', string()],
    createdAt: ['createdAt', string()],
    updatedAt: ['updatedAt', string()],
    cancelledAt: ['cancelledAt', nullable(string())],
    dateOrder: ['date_Order', nullable(string())],
    dateDelivery: ['date_Delivery', nullable(string())],
    createdBy: ['createdBy', nullable(string())],
    updatedBy: ['updatedBy', nullable(string())],
    cancelledBy: ['cancelledBy', nullable(string())],
    deliveryStatus: ['deliveryStatus', nullable(string())],
    deliveryAddress: ['deliveryAddress', nullable(string())],
    customer: ['customer', nullable(string())],
    lines: ['lines', nullable(string())],
  }
);
