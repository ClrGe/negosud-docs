# Country

```ts
const countryController = new CountryController(client);
```

## Class Name

`CountryController`

## Methods

* [Api Country Id](../../doc/controllers/country.md#api-country-id)
* [Api Country](../../doc/controllers/country.md#api-country)
* [Api Country Add Country](../../doc/controllers/country.md#api-country-add-country)
* [Api Country Update Country](../../doc/controllers/country.md#api-country-update-country)
* [Api Country Delete Country](../../doc/controllers/country.md#api-country-delete-country)


# Api Country Id

```ts
async apiCountryId(
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
  const { result, ...httpResponse } = await countryController.apiCountryId();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Api Country

```ts
async apiCountry(
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
  const { result, ...httpResponse } = await countryController.apiCountry();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Api Country Add Country

```ts
async apiCountryAddCountry(
  body: ApiCountryAddCountryRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ApiCountryAddCountryRequest`](../../doc/models/api-country-add-country-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const body: ApiCountryAddCountryRequest = {
  name: 'Country',
  createdAt: '2023-02-25T16:52:15Z',
  updatedAt: 'updatedAt6',
  createdBy: 'negosud',
  updatedBy: 'negosud',
  cities: 'cities2',
  regions: 'regions6',
};

const contentType = null;
try {
  const { result, ...httpResponse } = await countryController.apiCountryAddCountry(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Api Country Update Country

```ts
async apiCountryUpdateCountry(
  body: ApiCountryUpdateCountryRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ApiCountryUpdateCountryRequest`](../../doc/models/api-country-update-country-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const body: ApiCountryUpdateCountryRequest = {
  id: 1,
  name: 'Albania',
  createdAt: '2023-02-25T16:52:15Z',
  updatedAt: 'updatedAt6',
  createdBy: 'negosud',
  updatedBy: 'neosud',
  cities: 'cities2',
  regions: 'regions6',
};

const contentType = null;
try {
  const { result, ...httpResponse } = await countryController.apiCountryUpdateCountry(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Api Country Delete Country

```ts
async apiCountryDeleteCountry(
  body: ApiCountryDeleteCountryRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ApiCountryDeleteCountryRequest`](../../doc/models/api-country-delete-country-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const body: ApiCountryDeleteCountryRequest = {
  id: 1,
};

const contentType = null;
try {
  const { result, ...httpResponse } = await countryController.apiCountryDeleteCountry(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

