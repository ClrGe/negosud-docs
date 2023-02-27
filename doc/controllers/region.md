# Region

```ts
const regionController = new RegionController(client);
```

## Class Name

`RegionController`

## Methods

* [Api Region Id](../../doc/controllers/region.md#api-region-id)
* [Api Region](../../doc/controllers/region.md#api-region)
* [Api Region Add Region](../../doc/controllers/region.md#api-region-add-region)
* [Api Region Update Region](../../doc/controllers/region.md#api-region-update-region)
* [Api Region Delete Region](../../doc/controllers/region.md#api-region-delete-region)


# Api Region Id

```ts
async apiRegionId(
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
  const { result, ...httpResponse } = await regionController.apiRegionId();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Api Region

```ts
async apiRegion(
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
  const { result, ...httpResponse } = await regionController.apiRegion();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Api Region Add Region

```ts
async apiRegionAddRegion(
  body: ApiRegionAddRegionRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ApiRegionAddRegionRequest`](../../doc/models/api-region-add-region-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const body: ApiRegionAddRegionRequest = {
  name: 'California',
  createdAt: '2023-02-25T16:52:36Z',
  updatedAt: 'updatedAt6',
  createdBy: 'negosud',
  updatedBy: 'negosud',
  countryId: 'countryId2',
  producers: 'producers2',
  country: 'country0',
};

const contentType = null;
try {
  const { result, ...httpResponse } = await regionController.apiRegionAddRegion(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Api Region Update Region

```ts
async apiRegionUpdateRegion(
  body: ApiRegionUpdateRegionRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ApiRegionUpdateRegionRequest`](../../doc/models/api-region-update-region-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const body: ApiRegionUpdateRegionRequest = {
  id: 1,
  name: 'California',
  createdAt: '2023-02-25T16:52:36Z',
  createdBy: 'negosud',
  updatedBy: 'negosud',
};

const contentType = null;
try {
  const { result, ...httpResponse } = await regionController.apiRegionUpdateRegion(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Api Region Delete Region

```ts
async apiRegionDeleteRegion(
  body: ApiRegionDeleteRegionRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ApiRegionDeleteRegionRequest`](../../doc/models/api-region-delete-region-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const body: ApiRegionDeleteRegionRequest = {
  id: 1,
};

const contentType = null;
try {
  const { result, ...httpResponse } = await regionController.apiRegionDeleteRegion(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

