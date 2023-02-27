
# Api Storage Location Update Storage Location Request

## Structure

`ApiStorageLocationUpdateStorageLocationRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Required | - |
| `name` | `string` | Required | - |
| `createdAt` | `string` | Required | - |
| `updatedAt` | `string \| null` | Required | - |
| `createdBy` | `string` | Required | - |
| `updatedBy` | `string` | Required | - |
| `bottleStorageLocations` | `string \| null` | Required | - |
| `customerOrderLineStorageLocations` | `string \| null` | Required | - |

## Example (as JSON)

```json
{
  "id": 2,
  "name": "A",
  "createdAt": "2023-02-26T14:21:39Z",
  "updatedAt": null,
  "createdBy": "",
  "updatedBy": "",
  "bottleStorageLocations": null,
  "customerOrderLineStorageLocations": null
}
```

