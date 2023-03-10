/**
 * API_NEGOSUD.yamlLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

export interface ApiAuthenticationLoginRequest {
  email: string;
  password: string;
}

export const apiAuthenticationLoginRequestSchema: Schema<ApiAuthenticationLoginRequest> = object(
  { email: ['email', string()], password: ['password', string()] }
);
