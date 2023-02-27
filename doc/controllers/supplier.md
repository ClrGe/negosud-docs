# Supplier

```ts
const supplierController = new SupplierController(client);
```

## Class Name

`SupplierController`

## Methods

* [Api Supplier](../../doc/controllers/supplier.md#api-supplier)
* [Api Supplier Id](../../doc/controllers/supplier.md#api-supplier-id)
* [Api Supplier Add Supplier](../../doc/controllers/supplier.md#api-supplier-add-supplier)
* [Api Supplier Update Supplier](../../doc/controllers/supplier.md#api-supplier-update-supplier)
* [Api Supplier Delete Supplier](../../doc/controllers/supplier.md#api-supplier-delete-supplier)


# Api Supplier

```ts
async apiSupplier(
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
  const { result, ...httpResponse } = await supplierController.apiSupplier();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Api Supplier Id

```ts
async apiSupplierId(
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
  const { result, ...httpResponse } = await supplierController.apiSupplierId();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Api Supplier Add Supplier

```ts
async apiSupplierAddSupplier(
  body: ApiSupplierAddSupplierRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ApiSupplierAddSupplierRequest`](../../doc/models/api-supplier-add-supplier-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const body: ApiSupplierAddSupplierRequest = {
  name: 'testadresse',
  details: 'testadresse',
  email: 'test@example.com',
  createdAt: '2023-02-26T17:33:47Z',
  updatedAt: 'updatedAt6',
  createdBy: 'negosud',
  updatedBy: 'negosud',
  bottleSuppliers: 'bottleSuppliers2',
  address: 'address2',
};

const contentType = null;
try {
  const { result, ...httpResponse } = await supplierController.apiSupplierAddSupplier(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Api Supplier Update Supplier

```ts
async apiSupplierUpdateSupplier(
  body: ApiSupplierUpdateSupplierRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ApiSupplierUpdateSupplierRequest`](../../doc/models/api-supplier-update-supplier-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const body: ApiSupplierUpdateSupplierRequest = {
  name: 'testadresse',
  details: 'testadresse',
  email: 'test@ex.c',
  createdAt: '2023-02-26T17:34:12Z',
  updatedAt: 'updatedAt6',
  createdBy: 'negosud',
  updatedBy: 'negosud',
  bottleSuppliers: 'bottleSuppliers2',
  address: 'address2',
};

const contentType = null;
try {
  const { result, ...httpResponse } = await supplierController.apiSupplierUpdateSupplier(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Api Supplier Delete Supplier

```ts
async apiSupplierDeleteSupplier(
  body: ApiSupplierDeleteSupplierRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ApiSupplierDeleteSupplierRequest`](../../doc/models/api-supplier-delete-supplier-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const body: ApiSupplierDeleteSupplierRequest = {
  id: 2,
};

const contentType = null;
try {
  const { result, ...httpResponse } = await supplierController.apiSupplierDeleteSupplier(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

