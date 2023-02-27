
# Api Bottle Update Bottle Request

## Structure

`ApiBottleUpdateBottleRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Required | - |
| `fullName` | `string` | Required | - |
| `description` | `string` | Required | - |
| `volume` | `number` | Required | - |
| `picture` | `string` | Required | - |
| `yearProduced` | `number` | Required | - |
| `alcoholPercentage` | `number` | Required | - |
| `supplierPrice` | `number` | Required | - |
| `customerPrice` | `number` | Required | - |
| `wineType` | `string` | Required | - |
| `thresholdToOrder` | `string \| null` | Required | - |
| `quantityMinimumToOrder` | `string \| null` | Required | - |
| `createdAt` | `string` | Required | - |
| `updatedAt` | `string` | Required | - |
| `createdBy` | `string` | Required | - |
| `updatedBy` | `string` | Required | - |
| `vat` | `string \| null` | Required | - |
| `vatId` | `string \| null` | Required | - |
| `producerId` | `number` | Required | - |
| `wineLabelId` | `string \| null` | Required | - |
| `bottleStorageLocations` | `string[]` | Required | - |
| `supplierOrderLines` | `string \| null` | Required | - |
| `bottleGrapes` | `string[]` | Required | - |
| `bottleSuppliers` | `string[]` | Required | - |
| `producer` | `unknown` | Required | - |
| `wineLabel` | `string \| null` | Required | - |

## Example (as JSON)

```json
{
  "id": 3781,
  "fullName": "Grignolino",
  "description": "Rond et boisé, ce vin à tout type de plats, en particulier les viandes blanches. Produit selon des normes stricts et éthiques par des producteurs éco-responsables. Fruits cueillis à la main par nos partenaires vignerons. Pour tout conseil, veuillez nous contacter, nous mettrons nos expertise à votre service",
  "volume": 75,
  "picture": "https://i.postimg.cc/c4g3fY0Z/rose.png",
  "yearProduced": 1938,
  "alcoholPercentage": 12,
  "supplierPrice": 85,
  "customerPrice": 94,
  "wineType": "Rose",
  "thresholdToOrder": null,
  "quantityMinimumToOrder": null,
  "createdAt": "2023-02-26T22:44:05Z",
  "updatedAt": "2023-02-27T08:47:31Z",
  "createdBy": "negosud",
  "updatedBy": "negosud",
  "vat": null,
  "vatId": null,
  "producerId": 4,
  "wineLabelId": null,
  "bottleStorageLocations": [],
  "supplierOrderLines": null,
  "bottleGrapes": [],
  "bottleSuppliers": [],
  "producer": {
    "id": 4,
    "name": "Ponzi",
    "details": "Wine producer",
    "createdAt": "2023-02-25T16:49:03Z",
    "updatedAt": null,
    "createdBy": "negosud",
    "updatedBy": "negosud",
    "bottles": [
      null
    ],
    "region": null,
    "address": null
  },
  "wineLabel": null
}
```

