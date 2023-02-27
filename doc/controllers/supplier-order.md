# Supplier Order

```ts
const supplierOrderController = new SupplierOrderController(client);
```

## Class Name

`SupplierOrderController`

## Methods

* [Api Supplier Order Add Supplier Order](../../doc/controllers/supplier-order.md#api-supplier-order-add-supplier-order)
* [Api Supplier Order Update Supplier Order](../../doc/controllers/supplier-order.md#api-supplier-order-update-supplier-order)
* [Api Supplier Order](../../doc/controllers/supplier-order.md#api-supplier-order)
* [Api Supplier Order Id](../../doc/controllers/supplier-order.md#api-supplier-order-id)
* [Api Supplier Order Delete Supplier Order](../../doc/controllers/supplier-order.md#api-supplier-order-delete-supplier-order)


# Api Supplier Order Add Supplier Order

```ts
async apiSupplierOrderAddSupplierOrder(
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
const body = 'null';
const contentType = null;
try {
  const { result, ...httpResponse } = await supplierOrderController.apiSupplierOrderAddSupplierOrder(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Api Supplier Order Update Supplier Order

```ts
async apiSupplierOrderUpdateSupplierOrder(
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
const body = 'null';
const contentType = null;
try {
  const { result, ...httpResponse } = await supplierOrderController.apiSupplierOrderUpdateSupplierOrder(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Api Supplier Order

```ts
async apiSupplierOrder(
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
  const { result, ...httpResponse } = await supplierOrderController.apiSupplierOrder();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Api Supplier Order Id

```ts
async apiSupplierOrderId(
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
  const { result, ...httpResponse } = await supplierOrderController.apiSupplierOrderId();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Api Supplier Order Delete Supplier Order

```ts
async apiSupplierOrderDeleteSupplierOrder(
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
  const { result, ...httpResponse } = await supplierOrderController.apiSupplierOrderDeleteSupplierOrder();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

