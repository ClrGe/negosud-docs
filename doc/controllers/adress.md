# Adress

```ts
const adressController = new AdressController(client);
```

## Class Name

`AdressController`

## Methods

* [Api Address Id](../../doc/controllers/adress.md#api-address-id)
* [Api Address](../../doc/controllers/adress.md#api-address)
* [Api Address Add Address](../../doc/controllers/adress.md#api-address-add-address)
* [Api Address Update Address](../../doc/controllers/adress.md#api-address-update-address)
* [Api Address Delete Address](../../doc/controllers/adress.md#api-address-delete-address)


# Api Address Id

```ts
async apiAddressId(
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
  const { result, ...httpResponse } = await adressController.apiAddressId();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Api Address

```ts
async apiAddress(
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
  const { result, ...httpResponse } = await adressController.apiAddress();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Api Address Add Address

```ts
async apiAddressAddAddress(
  body: ApiAddressAddAddressRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ApiAddressAddAddressRequest`](../../doc/models/api-address-add-address-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const body: ApiAddressAddAddressRequest = {
  id: 3,
};

const contentType = null;
try {
  const { result, ...httpResponse } = await adressController.apiAddressAddAddress(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Api Address Update Address

```ts
async apiAddressUpdateAddress(
  body: ApiAddressUpdateAddressRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ApiAddressUpdateAddressRequest`](../../doc/models/api-address-update-address-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const body: ApiAddressUpdateAddressRequest = {
  id: 3,
  addressLine1: '45 rue du truc',
  addressLine2: '45 rue du truc',
  createdAt: '2023-02-27T09:36:08Z',
  updatedAt: '2023-02-27T09:36:08Z',
  createdBy: 'negosud',
  updatedBy: 'negosud',
  supplierId: 'supplierId2',
  cityId: 'cityId2',
  userId: 'userId6',
  city: 'city4',
  user: 'user6',
  supplier: 'supplier8',
};

const contentType = null;
try {
  const { result, ...httpResponse } = await adressController.apiAddressUpdateAddress(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Api Address Delete Address

```ts
async apiAddressDeleteAddress(
  body: ApiAddressDeleteAddressRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ApiAddressDeleteAddressRequest`](../../doc/models/api-address-delete-address-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const body: ApiAddressDeleteAddressRequest = {
  id: 3,
};

const contentType = null;
try {
  const { result, ...httpResponse } = await adressController.apiAddressDeleteAddress(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

