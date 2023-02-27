# Producer

```ts
const producerController = new ProducerController(client);
```

## Class Name

`ProducerController`

## Methods

* [Api Producer](../../doc/controllers/producer.md#api-producer)
* [Api Producer Id](../../doc/controllers/producer.md#api-producer-id)
* [Api Producer Add Producer](../../doc/controllers/producer.md#api-producer-add-producer)
* [Api Producer Update Producer](../../doc/controllers/producer.md#api-producer-update-producer)
* [Api Producer Delete Producer](../../doc/controllers/producer.md#api-producer-delete-producer)


# Api Producer

```ts
async apiProducer(
  contentType: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contentType` | `string` | Header, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const contentType = 'application/json';
try {
  const { result, ...httpResponse } = await producerController.apiProducer(contentType);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Api Producer Id

```ts
async apiProducerId(
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
  const { result, ...httpResponse } = await producerController.apiProducerId();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Api Producer Add Producer

```ts
async apiProducerAddProducer(
  body: ApiProducerAddProducerRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ApiProducerAddProducerRequest`](../../doc/models/api-producer-add-producer-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const body: ApiProducerAddProducerRequest = {
  name: 'Ponzi',
  details: 'Wine producer',
  createdAt: '2023-02-25T16:49:03Z',
  updatedAt: 'updatedAt6',
  createdBy: 'negosud',
  updatedBy: 'negosud',
  bottles: 'bottles6',
  region: 'region2',
  address: 'address2',
};

const contentType = null;
try {
  const { result, ...httpResponse } = await producerController.apiProducerAddProducer(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Api Producer Update Producer

```ts
async apiProducerUpdateProducer(
  body: ApiProducerUpdateProducerRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ApiProducerUpdateProducerRequest`](../../doc/models/api-producer-update-producer-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const body: ApiProducerUpdateProducerRequest = {
  id: 4,
  name: 'Ponzi',
  details: 'Spécialiste des grands crus bordelais',
  createdAt: '2023-02-25T16:49:03Z',
  createdBy: 'negosud',
  updatedBy: 'negosud',
};

const contentType = null;
try {
  const { result, ...httpResponse } = await producerController.apiProducerUpdateProducer(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Api Producer Delete Producer

```ts
async apiProducerDeleteProducer(
  body: ApiProducerDeleteProducerRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ApiProducerDeleteProducerRequest`](../../doc/models/api-producer-delete-producer-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const body: ApiProducerDeleteProducerRequest = {
  id: 4,
};

const contentType = null;
try {
  const { result, ...httpResponse } = await producerController.apiProducerDeleteProducer(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

