
# Api Producer Add Producer Request

## Structure

`ApiProducerAddProducerRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Required | - |
| `details` | `string` | Required | - |
| `createdAt` | `string` | Required | - |
| `updatedAt` | `string \| null` | Required | - |
| `createdBy` | `string` | Required | - |
| `updatedBy` | `string` | Required | - |
| `bottles` | `string \| null` | Required | - |
| `region` | `string \| null` | Required | - |
| `address` | `string \| null` | Required | - |

## Example (as JSON)

```json
{
  "name": "Ponzi",
  "details": "Wine producer",
  "createdAt": "2023-02-25T16:49:03Z",
  "updatedAt": null,
  "createdBy": "negosud",
  "updatedBy": "negosud",
  "bottles": null,
  "region": null,
  "address": null
}
```

