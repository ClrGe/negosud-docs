# Grape

```ts
const grapeController = new GrapeController(client);
```

## Class Name

`GrapeController`

## Methods

* [Api Grape Id](../../doc/controllers/grape.md#api-grape-id)
* [Api Grape](../../doc/controllers/grape.md#api-grape)
* [Api Grape Add Grape](../../doc/controllers/grape.md#api-grape-add-grape)
* [Api Grape Update Grape](../../doc/controllers/grape.md#api-grape-update-grape)
* [Api Grape Delete Grape](../../doc/controllers/grape.md#api-grape-delete-grape)


# Api Grape Id

```ts
async apiGrapeId(
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
  const { result, ...httpResponse } = await grapeController.apiGrapeId();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Api Grape

```ts
async apiGrape(
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
  const { result, ...httpResponse } = await grapeController.apiGrape();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Api Grape Add Grape

```ts
async apiGrapeAddGrape(
  body: ApiGrapeAddGrapeRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ApiGrapeAddGrapeRequest`](../../doc/models/api-grape-add-grape-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const body: ApiGrapeAddGrapeRequest = {
  grapeType: 'Sauvignon',
  createdAt: '2023-02-27T09:47:10Z',
  updatedAt: '2023-02-27T09:47:10Z',
  createdBy: 'negosud',
  updatedBy: 'updatedBy4',
  bottleGrapes: 'bottleGrapes8',
};

const contentType = null;
try {
  const { result, ...httpResponse } = await grapeController.apiGrapeAddGrape(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Api Grape Update Grape

```ts
async apiGrapeUpdateGrape(
  body: ApiGrapeUpdateGrapeRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ApiGrapeUpdateGrapeRequest`](../../doc/models/api-grape-update-grape-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const body: ApiGrapeUpdateGrapeRequest = {
  id: 10,
  grapeType: 'Cabernet',
  createdAt: '2023-02-27T09:47:10Z',
  updatedAt: '2023-02-27T09:47:10Z',
  createdBy: 'negosud',
  updatedBy: 'updatedBy4',
  bottleGrapes: 'bottleGrapes8',
};

const contentType = null;
try {
  const { result, ...httpResponse } = await grapeController.apiGrapeUpdateGrape(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Api Grape Delete Grape

```ts
async apiGrapeDeleteGrape(
  body: ApiGrapeDeleteGrapeRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ApiGrapeDeleteGrapeRequest`](../../doc/models/api-grape-delete-grape-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const body: ApiGrapeDeleteGrapeRequest = {
  id: 1,
  grapeType: 'grapeType4',
  createdAt: '2023-02-27T09:47:10Z',
  updatedAt: '2023-02-27T09:47:10Z',
  createdBy: 'createdBy6',
  updatedBy: 'updatedBy4',
  bottleGrapes: 'bottleGrapes8',
};

const contentType = null;
try {
  const { result, ...httpResponse } = await grapeController.apiGrapeDeleteGrape(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

