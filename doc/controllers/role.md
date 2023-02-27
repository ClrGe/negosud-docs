# Role

```ts
const roleController = new RoleController(client);
```

## Class Name

`RoleController`

## Methods

* [Api Role Id](../../doc/controllers/role.md#api-role-id)
* [Api Role](../../doc/controllers/role.md#api-role)
* [Api Role Update Role](../../doc/controllers/role.md#api-role-update-role)
* [Api Role Add Role](../../doc/controllers/role.md#api-role-add-role)
* [Api Role Delete Role](../../doc/controllers/role.md#api-role-delete-role)


# Api Role Id

```ts
async apiRoleId(
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
  const { result, ...httpResponse } = await roleController.apiRoleId();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Api Role

```ts
async apiRole(
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
  const { result, ...httpResponse } = await roleController.apiRole();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Api Role Update Role

```ts
async apiRoleUpdateRole(
  body: ApiRoleUpdateRoleRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ApiRoleUpdateRoleRequest`](../../doc/models/api-role-update-role-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const body: ApiRoleUpdateRoleRequest = {
  id: 1,
  name: 'Admin',
  createdAt: '2023-02-26T21:41:38Z',
  updatedAt: '2023-02-26T21:41:38Z',
  createdBy: 'createdBy6',
  updatedBy: 'updatedBy4',
  permissionRoles: 'permissionRoles6',
  users: 'users0',
};

const contentType = null;
try {
  const { result, ...httpResponse } = await roleController.apiRoleUpdateRole(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Api Role Add Role

```ts
async apiRoleAddRole(
  body: ApiRoleAddRoleRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ApiRoleAddRoleRequest`](../../doc/models/api-role-add-role-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const body: ApiRoleAddRoleRequest = {
  name: 'Admin',
  createdAt: '2023-02-26T21:41:38Z',
  updatedAt: '2023-02-26T21:41:38Z',
};

const contentType = null;
try {
  const { result, ...httpResponse } = await roleController.apiRoleAddRole(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Api Role Delete Role

```ts
async apiRoleDeleteRole(
  body: ApiRoleDeleteRoleRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ApiRoleDeleteRoleRequest`](../../doc/models/api-role-delete-role-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const body: ApiRoleDeleteRoleRequest = {
  id: 1,
};

const contentType = null;
try {
  const { result, ...httpResponse } = await roleController.apiRoleDeleteRole(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

