# Storage Location

```ts
const storageLocationController = new StorageLocationController(client);
```

## Class Name

`StorageLocationController`

## Methods

* [Api Storage Location Id](../../doc/controllers/storage-location.md#api-storage-location-id)
* [Api Storage Location](../../doc/controllers/storage-location.md#api-storage-location)
* [Api Storage Location Add Storage Location](../../doc/controllers/storage-location.md#api-storage-location-add-storage-location)
* [Api Storage Location Update Storage Location](../../doc/controllers/storage-location.md#api-storage-location-update-storage-location)
* [Api Storage Location Delete Storage Location](../../doc/controllers/storage-location.md#api-storage-location-delete-storage-location)


# Api Storage Location Id

```ts
async apiStorageLocationId(
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
  const { result, ...httpResponse } = await storageLocationController.apiStorageLocationId();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Api Storage Location

```ts
async apiStorageLocation(
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
  const { result, ...httpResponse } = await storageLocationController.apiStorageLocation();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Api Storage Location Add Storage Location

```ts
async apiStorageLocationAddStorageLocation(
  body: ApiStorageLocationAddStorageLocationRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ApiStorageLocationAddStorageLocationRequest`](../../doc/models/api-storage-location-add-storage-location-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const body: ApiStorageLocationAddStorageLocationRequest = {
  name: 'B',
  createdAt: '2023-02-26T14:21:39Z',
  updatedAt: 'updatedAt6',
  createdBy: '',
  updatedBy: '',
  bottleStorageLocations: 'bottleStorageLocations8',
  customerOrderLineStorageLocations: 'customerOrderLineStorageLocations4',
};

const contentType = null;
try {
  const { result, ...httpResponse } = await storageLocationController.apiStorageLocationAddStorageLocation(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Api Storage Location Update Storage Location

```ts
async apiStorageLocationUpdateStorageLocation(
  body: ApiStorageLocationUpdateStorageLocationRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ApiStorageLocationUpdateStorageLocationRequest`](../../doc/models/api-storage-location-update-storage-location-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const body: ApiStorageLocationUpdateStorageLocationRequest = {
  id: 2,
  name: 'A',
  createdAt: '2023-02-26T14:21:39Z',
  updatedAt: 'updatedAt6',
  createdBy: '',
  updatedBy: '',
  bottleStorageLocations: 'bottleStorageLocations8',
  customerOrderLineStorageLocations: 'customerOrderLineStorageLocations4',
};

const contentType = null;
try {
  const { result, ...httpResponse } = await storageLocationController.apiStorageLocationUpdateStorageLocation(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Api Storage Location Delete Storage Location

```ts
async apiStorageLocationDeleteStorageLocation(
  body: ApiStorageLocationDeleteStorageLocationRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ApiStorageLocationDeleteStorageLocationRequest`](../../doc/models/api-storage-location-delete-storage-location-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const body: ApiStorageLocationDeleteStorageLocationRequest = {
  id: 2,
};

const contentType = null;
try {
  const { result, ...httpResponse } = await storageLocationController.apiStorageLocationDeleteStorageLocation(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

