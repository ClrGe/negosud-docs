# Permission

```ts
const permissionController = new PermissionController(client);
```

## Class Name

`PermissionController`

## Methods

* [Api Permission Id](../../doc/controllers/permission.md#api-permission-id)
* [Api Permission](../../doc/controllers/permission.md#api-permission)
* [Api Permission Add Permission](../../doc/controllers/permission.md#api-permission-add-permission)
* [Api Permission Update Permission Id](../../doc/controllers/permission.md#api-permission-update-permission-id)
* [Api Permission Delete Permission Id](../../doc/controllers/permission.md#api-permission-delete-permission-id)


# Api Permission Id

```ts
async apiPermissionId(
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
  const { result, ...httpResponse } = await permissionController.apiPermissionId();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Api Permission

```ts
async apiPermission(
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
  const { result, ...httpResponse } = await permissionController.apiPermission();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Api Permission Add Permission

```ts
async apiPermissionAddPermission(
  body: ApiPermissionAddPermissionRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ApiPermissionAddPermissionRequest`](../../doc/models/api-permission-add-permission-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const body: ApiPermissionAddPermissionRequest = {
  name: 'CanEditAddress',
  createdAt: '2023-02-26T21:41:37Z',
  updatedAt: '2023-02-26T21:41:37Z',
  permissionRoles: 'permissionRoles6',
};

const contentType = null;
try {
  const { result, ...httpResponse } = await permissionController.apiPermissionAddPermission(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Api Permission Update Permission Id

```ts
async apiPermissionUpdatePermissionId(
  body: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | `string` | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const body = '	{\n		"id": 1,\n		"name": "CanEditAddress",\n		"createdAt": "2023-02-26T21:41:37Z",\n		"updatedAt": "2023-02-26T21:41:37Z",\n		"createdBy": null,\n		"updatedBy": null,\n		"permissionRoles": null\n	},';
const contentType = null;
try {
  const { result, ...httpResponse } = await permissionController.apiPermissionUpdatePermissionId(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Api Permission Delete Permission Id

```ts
async apiPermissionDeletePermissionId(
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
  const { result, ...httpResponse } = await permissionController.apiPermissionDeletePermissionId();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

