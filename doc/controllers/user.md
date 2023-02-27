# User

```ts
const userController = new UserController(client);
```

## Class Name

`UserController`

## Methods

* [Api User Id](../../doc/controllers/user.md#api-user-id)
* [Api User](../../doc/controllers/user.md#api-user)
* [Api User Add User](../../doc/controllers/user.md#api-user-add-user)
* [Api User Update User](../../doc/controllers/user.md#api-user-update-user)
* [Api User Delete User](../../doc/controllers/user.md#api-user-delete-user)


# Api User Id

```ts
async apiUserId(
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await userController.apiUserId();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Api User

```ts
async apiUser(
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await userController.apiUser();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Api User Add User

```ts
async apiUserAddUser(
  body: ApiUserAddUserRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ApiUserAddUserRequest`](../../doc/models/api-user-add-user-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const body: ApiUserAddUserRequest = {
  firstName: 'Claire',
  lastName: 'G',
  email: 'c@g.c',
  password: 'AQAAAAIAAYagAAAAEItqzhsF0gvPuRPd2Fn9slQjkF9PEhSYzydFYK9Pecm37H++Jz4Tcle588EtlD84Dw==',
  createdAt: '2023-02-26T21:43:36Z',
  updatedAt: '2023-02-26T21:43:36Z',
  createdBy: 'createdBy6',
  updatedBy: 'updatedBy4',
  refreshToken: 'refreshToken4',
  refreshTokenExpiryTime: 'refreshTokenExpiryTime0',
  addresses: 'addresses0',
  role: '{"id":1}',
};

const contentType = null;
try {
  const { result, ...httpResponse } = await userController.apiUserAddUser(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Api User Update User

```ts
async apiUserUpdateUser(
  body: ApiUserUpdateUserRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ApiUserUpdateUserRequest`](../../doc/models/api-user-update-user-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const body: ApiUserUpdateUserRequest = {
  id: 10,
  firstName: 'Claire',
  lastName: 'G',
  email: 'c@g.com',
  password: '',
  createdAt: '2023-02-26T21:43:36Z',
  updatedAt: '2023-02-26T21:43:36Z',
  createdBy: 'createdBy6',
  updatedBy: 'updatedBy4',
  refreshToken: 'refreshToken4',
  refreshTokenExpiryTime: 'refreshTokenExpiryTime0',
  addresses: 'addresses0',
  role: '{"id":1}',
};

const contentType = null;
try {
  const { result, ...httpResponse } = await userController.apiUserUpdateUser(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Api User Delete User

```ts
async apiUserDeleteUser(
  body: ApiUserDeleteUserRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ApiUserDeleteUserRequest`](../../doc/models/api-user-delete-user-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const body: ApiUserDeleteUserRequest = {
  id: 10,
};

const contentType = null;
try {
  const { result, ...httpResponse } = await userController.apiUserDeleteUser(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

