# Customer Order

```ts
const customerOrderController = new CustomerOrderController(client);
```

## Class Name

`CustomerOrderController`

## Methods

* [Api Customer Order Id](../../doc/controllers/customer-order.md#api-customer-order-id)
* [Api Customer Order](../../doc/controllers/customer-order.md#api-customer-order)
* [Api Customer Order Update Customer Order](../../doc/controllers/customer-order.md#api-customer-order-update-customer-order)
* [Api Customer Order Add Customer Order](../../doc/controllers/customer-order.md#api-customer-order-add-customer-order)
* [Api Customer Order Delete Customer Order](../../doc/controllers/customer-order.md#api-customer-order-delete-customer-order)


# Api Customer Order Id

```ts
async apiCustomerOrderId(
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
  const { result, ...httpResponse } = await customerOrderController.apiCustomerOrderId();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Api Customer Order

```ts
async apiCustomerOrder(
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
  const { result, ...httpResponse } = await customerOrderController.apiCustomerOrder();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Api Customer Order Update Customer Order

```ts
async apiCustomerOrderUpdateCustomerOrder(
  body: ApiCustomerOrderUpdateCustomerOrderRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ApiCustomerOrderUpdateCustomerOrderRequest`](../../doc/models/api-customer-order-update-customer-order-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const body: ApiCustomerOrderUpdateCustomerOrderRequest = {
  id: 4,
  reference: 'Commande 01',
  description: 'VINS',
};

const contentType = null;
try {
  const { result, ...httpResponse } = await customerOrderController.apiCustomerOrderUpdateCustomerOrder(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Api Customer Order Add Customer Order

```ts
async apiCustomerOrderAddCustomerOrder(
  body: ApiCustomerOrderAddCustomerOrderRequest[],
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ApiCustomerOrderAddCustomerOrderRequest[]`](../../doc/models/api-customer-order-add-customer-order-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const body: ApiCustomerOrderAddCustomerOrderRequest[] = [];

const body0: ApiCustomerOrderAddCustomerOrderRequest = {
  reference: '',
  description: '',
  createdAt: '2023-02-27T09:41:24Z',
  updatedAt: '2023-02-27T09:41:24Z',
  cancelledAt: 'cancelledAt0',
  dateOrder: 'date_Order2',
  dateDelivery: 'date_Delivery4',
  createdBy: 'createdBy8',
  updatedBy: 'updatedBy4',
  cancelledBy: 'cancelledBy6',
  deliveryStatus: 'deliveryStatus2',
  deliveryAddress: 'deliveryAddress0',
  customer: 'customer4',
  lines: 'lines4',
};

body[0] = body0;

const contentType = null;
try {
  const { result, ...httpResponse } = await customerOrderController.apiCustomerOrderAddCustomerOrder(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Api Customer Order Delete Customer Order

```ts
async apiCustomerOrderDeleteCustomerOrder(
  body: ApiCustomerOrderDeleteCustomerOrderRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ApiCustomerOrderDeleteCustomerOrderRequest`](../../doc/models/api-customer-order-delete-customer-order-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const body: ApiCustomerOrderDeleteCustomerOrderRequest = {
  id: 4,
  reference: 'Commande 01',
  description: 'VINS',
  createdAt: '2023-02-27T09:41:24Z',
  updatedAt: '2023-02-27T09:41:24Z',
  cancelledAt: 'cancelledAt8',
  dateOrder: 'date_Order0',
  dateDelivery: 'date_Delivery2',
  createdBy: 'createdBy6',
  updatedBy: 'updatedBy4',
  cancelledBy: 'cancelledBy8',
  deliveryStatus: 'deliveryStatus0',
  deliveryAddress: 'deliveryAddress2',
  customer: 'customer4',
  lines: 'lines6',
};

const contentType = null;
try {
  const { result, ...httpResponse } = await customerOrderController.apiCustomerOrderDeleteCustomerOrder(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

