# Bottle

```ts
const bottleController = new BottleController(client);
```

## Class Name

`BottleController`

## Methods

* [Api Bottle](../../doc/controllers/bottle.md#api-bottle)
* [Api Bottle Id](../../doc/controllers/bottle.md#api-bottle-id)
* [Api Bottle Add Bottle](../../doc/controllers/bottle.md#api-bottle-add-bottle)
* [Api Bottle Mass Add Bottle](../../doc/controllers/bottle.md#api-bottle-mass-add-bottle)
* [Api Bottle Update Bottle](../../doc/controllers/bottle.md#api-bottle-update-bottle)
* [Api Bottle Mass Update Bottle](../../doc/controllers/bottle.md#api-bottle-mass-update-bottle)
* [Api Bottle Delete Bottle](../../doc/controllers/bottle.md#api-bottle-delete-bottle)
* [Api Bottle Mass Delete Bottle](../../doc/controllers/bottle.md#api-bottle-mass-delete-bottle)


# Api Bottle

:information_source: **Note** This endpoint does not require authentication.

```ts
async apiBottle(
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
  const { result, ...httpResponse } = await bottleController.apiBottle();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Api Bottle Id

:information_source: **Note** This endpoint does not require authentication.

```ts
async apiBottleId(
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const id = '_.id4';
try {
  const { result, ...httpResponse } = await bottleController.apiBottleId(id);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Api Bottle Add Bottle

```ts
async apiBottleAddBottle(
  body: ApiBottleAddBottleRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ApiBottleAddBottleRequest`](../../doc/models/api-bottle-add-bottle-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const bodyBottleStorageLocations: string[] = [];
const bodyBottleGrapes: string[] = [];
const bodyBottleSuppliers: string[] = [];
const body: ApiBottleAddBottleRequest = {
  fullName: 'Grignolino',
  description: 'Rond et boisé, ce vin à tout type de plats, en particulier les viandes blanches. Produit selon des normes stricts et éthiques par des producteurs éco-responsables. Fruits cueillis à la main par nos partenaires vignerons. Pour tout conseil, veuillez nous contacter, nous mettrons nos expertise à votre service',
  volume: 75,
  picture: 'https://i.postimg.cc/c4g3fY0Z/rose.png',
  yearProduced: 1938,
  alcoholPercentage: 12,
  supplierPrice: 85,
  customerPrice: 94,
  wineType: 'Rose',
  thresholdToOrder: 'thresholdToOrder2',
  quantityMinimumToOrder: 'quantityMinimumToOrder0',
  createdAt: '2023-02-26T22:44:05Z',
  updatedAt: '2023-02-26T22:44:05Z',
  createdBy: 'negosud',
  updatedBy: 'negosud',
  vat: 'vat0',
  vatId: 'vatId4',
  producerId: 4,
  wineLabelId: 'wineLabelId0',
  bottleStorageLocations: bodyBottleStorageLocations,
  supplierOrderLines: 'supplierOrderLines0',
  bottleGrapes: bodyBottleGrapes,
  bottleSuppliers: bodyBottleSuppliers,
  producer: '{"id":4,"name":"Ponzi","details":"Wine producer","createdAt":"2023-02-25T16:49:03Z","updatedAt":null,"createdBy":"negosud","updatedBy":"negosud","bottles":[null],"region":null,"address":null}',
  wineLabel: 'wineLabel8',
};

const contentType = null;
try {
  const { result, ...httpResponse } = await bottleController.apiBottleAddBottle(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Api Bottle Mass Add Bottle

```ts
async apiBottleMassAddBottle(
  body: ApiBottleMassAddBottleRequest[],
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ApiBottleMassAddBottleRequest[]`](../../doc/models/api-bottle-mass-add-bottle-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const body: ApiBottleMassAddBottleRequest[] = [];

const body0BottleStorageLocations: string[] = [];
const body0BottleGrapes: string[] = [];
const body0BottleSuppliers: string[] = [];
const body0: ApiBottleMassAddBottleRequest = {
  id: 3781,
  fullName: 'Grignolino',
  description: 'Rond et boisé, ce vin à tout type de plats, en particulier les viandes blanches. Produit selon des normes stricts et éthiques par des producteurs éco-responsables. Fruits cueillis à la main par nos partenaires vignerons. Pour tout conseil, veuillez nous contacter, nous mettrons nos expertise à votre service',
  volume: 75,
  picture: 'https://i.postimg.cc/c4g3fY0Z/rose.png',
  yearProduced: 1938,
  alcoholPercentage: 12,
  supplierPrice: 85,
  customerPrice: 94,
  wineType: 'Rose',
  thresholdToOrder: 'thresholdToOrder0',
  quantityMinimumToOrder: 'quantityMinimumToOrder2',
  createdAt: '2023-02-26T22:44:05Z',
  updatedAt: '2023-02-27T08:47:31Z',
  createdBy: 'negosud',
  updatedBy: 'negosud',
  vat: 'vat8',
  vatId: 'vatId2',
  producerId: 4,
  wineLabelId: 'wineLabelId2',
  bottleStorageLocations: body0BottleStorageLocations,
  supplierOrderLines: 'supplierOrderLines2',
  bottleGrapes: body0BottleGrapes,
  bottleSuppliers: body0BottleSuppliers,
  producer: '{"id":4,"name":"Ponzi","details":"Wine producer","createdAt":"2023-02-25T16:49:03Z","updatedAt":null,"createdBy":"negosud","updatedBy":"negosud","bottles":[null],"region":null,"address":null}',
  wineLabel: 'wineLabel6',
};

body[0] = body0;

const body1BottleStorageLocations: string[] = [];
const body1BottleGrapes: string[] = [];
const body1BottleSuppliers: string[] = [];
const body1: ApiBottleMassAddBottleRequest = {
  id: 3781,
  fullName: 'Grignolino',
  description: 'Rond et boisé, ce vin à tout type de plats, en particulier les viandes blanches. Produit selon des normes stricts et éthiques par des producteurs éco-responsables. Fruits cueillis à la main par nos partenaires vignerons. Pour tout conseil, veuillez nous contacter, nous mettrons nos expertise à votre service',
  volume: 75,
  picture: 'https://i.postimg.cc/c4g3fY0Z/rose.png',
  yearProduced: 1938,
  alcoholPercentage: 12,
  supplierPrice: 85,
  customerPrice: 94,
  wineType: 'Rose',
  thresholdToOrder: 'thresholdToOrder1',
  quantityMinimumToOrder: 'quantityMinimumToOrder1',
  createdAt: '2023-02-26T22:44:05Z',
  updatedAt: '2023-02-27T08:47:31Z',
  createdBy: 'negosud',
  updatedBy: 'negosud',
  vat: 'vat9',
  vatId: 'vatId3',
  producerId: 4,
  wineLabelId: 'wineLabelId1',
  bottleStorageLocations: body1BottleStorageLocations,
  supplierOrderLines: 'supplierOrderLines1',
  bottleGrapes: body1BottleGrapes,
  bottleSuppliers: body1BottleSuppliers,
  producer: '{"id":4,"name":"Ponzi","details":"Wine producer","createdAt":"2023-02-25T16:49:03Z","updatedAt":null,"createdBy":"negosud","updatedBy":"negosud","bottles":[null],"region":null,"address":null}',
  wineLabel: 'wineLabel7',
};

body[1] = body1;

const contentType = null;
try {
  const { result, ...httpResponse } = await bottleController.apiBottleMassAddBottle(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Api Bottle Update Bottle

```ts
async apiBottleUpdateBottle(
  body: ApiBottleUpdateBottleRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ApiBottleUpdateBottleRequest`](../../doc/models/api-bottle-update-bottle-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const bodyBottleStorageLocations: string[] = [];
const bodyBottleGrapes: string[] = [];
const bodyBottleSuppliers: string[] = [];
const body: ApiBottleUpdateBottleRequest = {
  id: 3781,
  fullName: 'Grignolino',
  description: 'Rond et boisé, ce vin à tout type de plats, en particulier les viandes blanches. Produit selon des normes stricts et éthiques par des producteurs éco-responsables. Fruits cueillis à la main par nos partenaires vignerons. Pour tout conseil, veuillez nous contacter, nous mettrons nos expertise à votre service',
  volume: 75,
  picture: 'https://i.postimg.cc/c4g3fY0Z/rose.png',
  yearProduced: 1938,
  alcoholPercentage: 12,
  supplierPrice: 85,
  customerPrice: 94,
  wineType: 'Rose',
  thresholdToOrder: 'thresholdToOrder2',
  quantityMinimumToOrder: 'quantityMinimumToOrder0',
  createdAt: '2023-02-26T22:44:05Z',
  updatedAt: '2023-02-27T08:47:31Z',
  createdBy: 'negosud',
  updatedBy: 'negosud',
  vat: 'vat0',
  vatId: 'vatId4',
  producerId: 4,
  wineLabelId: 'wineLabelId0',
  bottleStorageLocations: bodyBottleStorageLocations,
  supplierOrderLines: 'supplierOrderLines0',
  bottleGrapes: bodyBottleGrapes,
  bottleSuppliers: bodyBottleSuppliers,
  producer: '{"id":4,"name":"Ponzi","details":"Wine producer","createdAt":"2023-02-25T16:49:03Z","updatedAt":null,"createdBy":"negosud","updatedBy":"negosud","bottles":[null],"region":null,"address":null}',
  wineLabel: 'wineLabel8',
};

const contentType = null;
try {
  const { result, ...httpResponse } = await bottleController.apiBottleUpdateBottle(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Api Bottle Mass Update Bottle

```ts
async apiBottleMassUpdateBottle(
  body: ApiBottleMassUpdateBottleRequest[],
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ApiBottleMassUpdateBottleRequest[]`](../../doc/models/api-bottle-mass-update-bottle-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const body: ApiBottleMassUpdateBottleRequest[] = [];

const body0BottleStorageLocations: string[] = [];
const body0BottleGrapes: string[] = [];
const body0BottleSuppliers: string[] = [];
const body0: ApiBottleMassUpdateBottleRequest = {
  id: 3781,
  fullName: 'Grignolino',
  description: 'Rond et boisé, ce vin à tout type de plats, en particulier les viandes blanches. Produit selon des normes stricts et éthiques par des producteurs éco-responsables. Fruits cueillis à la main par nos partenaires vignerons. Pour tout conseil, veuillez nous contacter, nous mettrons nos expertise à votre service',
  volume: 75,
  picture: 'https://i.postimg.cc/c4g3fY0Z/rose.png',
  yearProduced: 1938,
  alcoholPercentage: 12,
  supplierPrice: 85,
  customerPrice: 94,
  wineType: 'Rose',
  thresholdToOrder: 'thresholdToOrder0',
  quantityMinimumToOrder: 'quantityMinimumToOrder2',
  createdAt: '2023-02-26T22:44:05Z',
  updatedAt: '2023-02-27T08:47:31Z',
  createdBy: 'negosud',
  updatedBy: 'negosud',
  vat: 'vat8',
  vatId: 'vatId2',
  producerId: 4,
  wineLabelId: 'wineLabelId2',
  bottleStorageLocations: body0BottleStorageLocations,
  supplierOrderLines: 'supplierOrderLines2',
  bottleGrapes: body0BottleGrapes,
  bottleSuppliers: body0BottleSuppliers,
  producer: '{"id":4,"name":"Ponzi","details":"Wine producer","createdAt":"2023-02-25T16:49:03Z","updatedAt":null,"createdBy":"negosud","updatedBy":"negosud","bottles":[null],"region":null,"address":null}',
  wineLabel: 'wineLabel6',
};

body[0] = body0;

const body1BottleStorageLocations: string[] = [];
const body1BottleGrapes: string[] = [];
const body1BottleSuppliers: string[] = [];
const body1: ApiBottleMassUpdateBottleRequest = {
  id: 3782,
  fullName: 'Grignolino',
  description: 'Rond et boisé, ce vin à tout type de plats, en particulier les viandes blanches. Produit selon des normes stricts et éthiques par des producteurs éco-responsables. Fruits cueillis à la main par nos partenaires vignerons. Pour tout conseil, veuillez nous contacter, nous mettrons nos expertise à votre service',
  volume: 75,
  picture: 'https://i.postimg.cc/c4g3fY0Z/rose.png',
  yearProduced: 1938,
  alcoholPercentage: 12,
  supplierPrice: 85,
  customerPrice: 94,
  wineType: 'Rose',
  thresholdToOrder: 'thresholdToOrder1',
  quantityMinimumToOrder: 'quantityMinimumToOrder1',
  createdAt: '2023-02-26T22:44:05Z',
  updatedAt: '2023-02-27T08:47:31Z',
  createdBy: 'negosud',
  updatedBy: 'negosud',
  vat: 'vat9',
  vatId: 'vatId3',
  producerId: 4,
  wineLabelId: 'wineLabelId1',
  bottleStorageLocations: body1BottleStorageLocations,
  supplierOrderLines: 'supplierOrderLines1',
  bottleGrapes: body1BottleGrapes,
  bottleSuppliers: body1BottleSuppliers,
  producer: '{"id":4,"name":"Ponzi","details":"Wine producer","createdAt":"2023-02-25T16:49:03Z","updatedAt":null,"createdBy":"negosud","updatedBy":"negosud","bottles":[null],"region":null,"address":null}',
  wineLabel: 'wineLabel7',
};

body[1] = body1;

const contentType = null;
try {
  const { result, ...httpResponse } = await bottleController.apiBottleMassUpdateBottle(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Api Bottle Delete Bottle

```ts
async apiBottleDeleteBottle(
  body: ApiBottleDeleteBottleRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ApiBottleDeleteBottleRequest`](../../doc/models/api-bottle-delete-bottle-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const bodyBottleStorageLocations: string[] = [];
const bodyBottleGrapes: string[] = [];
const bodyBottleSuppliers: string[] = [];
const body: ApiBottleDeleteBottleRequest = {
  id: 3781,
  fullName: 'Grignolino',
  description: 'Rond et boisé, ce vin à tout type de plats, en particulier les viandes blanches. Produit selon des normes stricts et éthiques par des producteurs éco-responsables. Fruits cueillis à la main par nos partenaires vignerons. Pour tout conseil, veuillez nous contacter, nous mettrons nos expertise à votre service',
  volume: 75,
  picture: 'https://i.postimg.cc/c4g3fY0Z/rose.png',
  yearProduced: 1938,
  alcoholPercentage: 12,
  supplierPrice: 85,
  customerPrice: 94,
  wineType: 'Rose',
  thresholdToOrder: 'thresholdToOrder2',
  quantityMinimumToOrder: 'quantityMinimumToOrder0',
  createdAt: '2023-02-26T22:44:05Z',
  updatedAt: '2023-02-27T08:47:31Z',
  createdBy: 'negosud',
  updatedBy: 'negosud',
  vat: 'vat0',
  vatId: 'vatId4',
  producerId: 4,
  wineLabelId: 'wineLabelId0',
  bottleStorageLocations: bodyBottleStorageLocations,
  supplierOrderLines: 'supplierOrderLines0',
  bottleGrapes: bodyBottleGrapes,
  bottleSuppliers: bodyBottleSuppliers,
  producer: '{"id":4,"name":"Ponzi","details":"Wine producer","createdAt":"2023-02-25T16:49:03Z","updatedAt":null,"createdBy":"negosud","updatedBy":"negosud","bottles":[null],"region":null,"address":null}',
  wineLabel: 'wineLabel8',
};

const contentType = null;
try {
  const { result, ...httpResponse } = await bottleController.apiBottleDeleteBottle(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Api Bottle Mass Delete Bottle

```ts
async apiBottleMassDeleteBottle(
  body: ApiBottleMassDeleteBottleRequest[],
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ApiBottleMassDeleteBottleRequest[]`](../../doc/models/api-bottle-mass-delete-bottle-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const body: ApiBottleMassDeleteBottleRequest[] = [];

const body0BottleStorageLocations: string[] = [];
const body0BottleGrapes: string[] = [];
const body0BottleSuppliers: string[] = [];
const body0: ApiBottleMassDeleteBottleRequest = {
  id: 3781,
  fullName: 'Grignolino',
  description: 'Rond et boisé, ce vin à tout type de plats, en particulier les viandes blanches. Produit selon des normes stricts et éthiques par des producteurs éco-responsables. Fruits cueillis à la main par nos partenaires vignerons. Pour tout conseil, veuillez nous contacter, nous mettrons nos expertise à votre service',
  volume: 75,
  picture: 'https://i.postimg.cc/c4g3fY0Z/rose.png',
  yearProduced: 1938,
  alcoholPercentage: 12,
  supplierPrice: 85,
  customerPrice: 94,
  wineType: 'Rose',
  thresholdToOrder: 'thresholdToOrder0',
  quantityMinimumToOrder: 'quantityMinimumToOrder2',
  createdAt: '2023-02-26T22:44:05Z',
  updatedAt: '2023-02-27T08:47:31Z',
  createdBy: 'negosud',
  updatedBy: 'negosud',
  vat: 'vat8',
  vatId: 'vatId2',
  producerId: 4,
  wineLabelId: 'wineLabelId2',
  bottleStorageLocations: body0BottleStorageLocations,
  supplierOrderLines: 'supplierOrderLines2',
  bottleGrapes: body0BottleGrapes,
  bottleSuppliers: body0BottleSuppliers,
  producer: '{"id":4,"name":"Ponzi","details":"Wine producer","createdAt":"2023-02-25T16:49:03Z","updatedAt":null,"createdBy":"negosud","updatedBy":"negosud","bottles":[null],"region":null,"address":null}',
  wineLabel: 'wineLabel6',
};

body[0] = body0;

const body1BottleStorageLocations: string[] = [];
const body1BottleGrapes: string[] = [];
const body1BottleSuppliers: string[] = [];
const body1: ApiBottleMassDeleteBottleRequest = {
  id: 3781,
  fullName: 'Grignolino',
  description: 'Rond et boisé, ce vin à tout type de plats, en particulier les viandes blanches. Produit selon des normes stricts et éthiques par des producteurs éco-responsables. Fruits cueillis à la main par nos partenaires vignerons. Pour tout conseil, veuillez nous contacter, nous mettrons nos expertise à votre service',
  volume: 75,
  picture: 'https://i.postimg.cc/c4g3fY0Z/rose.png',
  yearProduced: 1938,
  alcoholPercentage: 12,
  supplierPrice: 85,
  customerPrice: 94,
  wineType: 'Rose',
  thresholdToOrder: 'thresholdToOrder1',
  quantityMinimumToOrder: 'quantityMinimumToOrder1',
  createdAt: '2023-02-26T22:44:05Z',
  updatedAt: '2023-02-27T08:47:31Z',
  createdBy: 'negosud',
  updatedBy: 'negosud',
  vat: 'vat9',
  vatId: 'vatId3',
  producerId: 4,
  wineLabelId: 'wineLabelId1',
  bottleStorageLocations: body1BottleStorageLocations,
  supplierOrderLines: 'supplierOrderLines1',
  bottleGrapes: body1BottleGrapes,
  bottleSuppliers: body1BottleSuppliers,
  producer: '{"id":4,"name":"Ponzi","details":"Wine producer","createdAt":"2023-02-25T16:49:03Z","updatedAt":null,"createdBy":"negosud","updatedBy":"negosud","bottles":[null],"region":null,"address":null}',
  wineLabel: 'wineLabel7',
};

body[1] = body1;

const contentType = null;
try {
  const { result, ...httpResponse } = await bottleController.apiBottleMassDeleteBottle(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

