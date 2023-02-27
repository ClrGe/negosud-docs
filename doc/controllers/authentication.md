# Authentication

```ts
const authenticationController = new AuthenticationController(client);
```

## Class Name

`AuthenticationController`

## Methods

* [Api Authentication Login](../../doc/controllers/authentication.md#api-authentication-login)
* [Api Authentication Register](../../doc/controllers/authentication.md#api-authentication-register)


# Api Authentication Login

:information_source: **Note** This endpoint does not require authentication.

```ts
async apiAuthenticationLogin(
  body: ApiAuthenticationLoginRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ApiAuthenticationLoginRequest`](../../doc/models/api-authentication-login-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const body: ApiAuthenticationLoginRequest = {
  email: 'c@g.c',
  password: 'toto',
};

const contentType = null;
try {
  const { result, ...httpResponse } = await authenticationController.apiAuthenticationLogin(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Api Authentication Register

:information_source: **Note** This endpoint does not require authentication.

```ts
async apiAuthenticationRegister(
  body: ApiAuthenticationRegisterRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ApiAuthenticationRegisterRequest`](../../doc/models/api-authentication-register-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const body: ApiAuthenticationRegisterRequest = {
  firstName: 'Claire',
  lastName: 'G',
  email: 'c@g.c',
  password: '',
  role: '{"id":1}',
};

const contentType = null;
try {
  const { result, ...httpResponse } = await authenticationController.apiAuthenticationRegister(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

