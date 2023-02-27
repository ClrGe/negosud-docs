# City

```ts
const cityController = new CityController(client);
```

## Class Name

`CityController`

## Methods

* [Api City Id](../../doc/controllers/city.md#api-city-id)
* [Api City](../../doc/controllers/city.md#api-city)
* [Api City Add City](../../doc/controllers/city.md#api-city-add-city)
* [Api City Update City](../../doc/controllers/city.md#api-city-update-city)
* [Api City Delete City](../../doc/controllers/city.md#api-city-delete-city)


# Api City Id

```ts
async apiCityId(
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
  const { result, ...httpResponse } = await cityController.apiCityId();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Api City

```ts
async apiCity(
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
  const { result, ...httpResponse } = await cityController.apiCity();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Api City Add City

```ts
async apiCityAddCity(
  body: ApiCityAddCityRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ApiCityAddCityRequest`](../../doc/models/api-city-add-city-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const body: ApiCityAddCityRequest = {
  name: 'Rouen',
  zipCode: 76000,
  createdBy: 'createdBy6',
  updatedBy: 'updatedBy4',
  countryId: 'countryId2',
  country: 'country0',
  addresses: 'addresses0',
};

const contentType = null;
try {
  const { result, ...httpResponse } = await cityController.apiCityAddCity(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Api City Update City

```ts
async apiCityUpdateCity(
  body: ApiCityUpdateCityRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ApiCityUpdateCityRequest`](../../doc/models/api-city-update-city-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const body: ApiCityUpdateCityRequest = {
  id: 1,
  name: 'Rouen',
  zipCode: 76000,
  createdAt: '2023-02-27T09:58:13Z',
  updatedAt: '2023-02-27T09:58:13Z',
  createdBy: 'createdBy6',
  updatedBy: 'updatedBy4',
  countryId: 'countryId2',
  country: 'country0',
  addresses: 'addresses0',
};

const contentType = null;
try {
  const { result, ...httpResponse } = await cityController.apiCityUpdateCity(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Api City Delete City

:information_source: **Note** This endpoint does not require authentication.

```ts
async apiCityDeleteCity(
  body: ApiCityDeleteCityRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ApiCityDeleteCityRequest`](../../doc/models/api-city-delete-city-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const body: ApiCityDeleteCityRequest = {
  id: 1,
};

const contentType = null;
try {
  const { result, ...httpResponse } = await cityController.apiCityDeleteCity(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

