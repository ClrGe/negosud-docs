
# Api Customer Order Delete Customer Order Request

## Structure

`ApiCustomerOrderDeleteCustomerOrderRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Required | - |
| `reference` | `string` | Required | - |
| `description` | `string` | Required | - |
| `createdAt` | `string` | Required | - |
| `updatedAt` | `string` | Required | - |
| `cancelledAt` | `string \| null` | Required | - |
| `dateOrder` | `string \| null` | Required | - |
| `dateDelivery` | `string \| null` | Required | - |
| `createdBy` | `string \| null` | Required | - |
| `updatedBy` | `string \| null` | Required | - |
| `cancelledBy` | `string \| null` | Required | - |
| `deliveryStatus` | `string \| null` | Required | - |
| `deliveryAddress` | `string \| null` | Required | - |
| `customer` | `string \| null` | Required | - |
| `lines` | `string \| null` | Required | - |

## Example (as JSON)

```json
{
  "id": 4,
  "reference": "Commande 01",
  "description": "VINS",
  "createdAt": "2023-02-27T09:41:24Z",
  "updatedAt": "2023-02-27T09:41:24Z",
  "cancelledAt": null,
  "date_Order": null,
  "date_Delivery": null,
  "createdBy": null,
  "updatedBy": null,
  "cancelledBy": null,
  "deliveryStatus": null,
  "deliveryAddress": null,
  "customer": null,
  "lines": null
}
```

