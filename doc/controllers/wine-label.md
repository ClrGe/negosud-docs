# Wine Label

```ts
const wineLabelController = new WineLabelController(client);
```

## Class Name

`WineLabelController`

## Methods

* [Api Wine Label Id](../../doc/controllers/wine-label.md#api-wine-label-id)
* [Api Wine Label](../../doc/controllers/wine-label.md#api-wine-label)
* [Api Wine Label Delete Wine Label](../../doc/controllers/wine-label.md#api-wine-label-delete-wine-label)
* [Api Wine Label Wine Label](../../doc/controllers/wine-label.md#api-wine-label-wine-label)
* [Api Wine Label Update Wine Label](../../doc/controllers/wine-label.md#api-wine-label-update-wine-label)


# Api Wine Label Id

```ts
async apiWineLabelId(
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
  const { result, ...httpResponse } = await wineLabelController.apiWineLabelId();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Api Wine Label

```ts
async apiWineLabel(
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
  const { result, ...httpResponse } = await wineLabelController.apiWineLabel();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Api Wine Label Delete Wine Label

```ts
async apiWineLabelDeleteWineLabel(
  body: ApiWineLabelDeleteWineLabelRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ApiWineLabelDeleteWineLabelRequest`](../../doc/models/api-wine-label-delete-wine-label-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const body: ApiWineLabelDeleteWineLabelRequest = {
  id: 1,
};

const contentType = null;
try {
  const { result, ...httpResponse } = await wineLabelController.apiWineLabelDeleteWineLabel(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Api Wine Label Wine Label

```ts
async apiWineLabelWineLabel(
  body: ApiWineLabelWineLabelRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ApiWineLabelWineLabelRequest`](../../doc/models/api-wine-label-wine-label-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const body: ApiWineLabelWineLabelRequest = {
  label: '',
  createdAt: '2023-02-27T09:55:08Z',
  updatedAt: '2023-02-27T09:55:08Z',
  createdBy: 'createdBy6',
  updatedBy: 'updatedBy4',
  bottles: 'bottles6',
};

const contentType = null;
try {
  const { result, ...httpResponse } = await wineLabelController.apiWineLabelWineLabel(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Api Wine Label Update Wine Label

```ts
async apiWineLabelUpdateWineLabel(
  body: ApiWineLabelUpdateWineLabelRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ApiWineLabelUpdateWineLabelRequest`](../../doc/models/api-wine-label-update-wine-label-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const body: ApiWineLabelUpdateWineLabelRequest = {
  id: 1,
  label: 'BIO',
  createdAt: '2023-02-27T09:55:08Z',
  updatedAt: '2023-02-27T09:55:08Z',
  createdBy: 'createdBy6',
  updatedBy: 'updatedBy4',
  bottles: 'bottles6',
};

const contentType = null;
try {
  const { result, ...httpResponse } = await wineLabelController.apiWineLabelUpdateWineLabel(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

