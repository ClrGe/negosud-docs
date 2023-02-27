
# Api Storage Location Add Storage Location Request

## Structure

`ApiStorageLocationAddStorageLocationRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
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
  "name": "B",
  "createdAt": "2023-02-26T14:21:39Z",
  "updatedAt": null,
  "createdBy": "",
  "updatedBy": "",
  "bottleStorageLocations": null,
  "customerOrderLineStorageLocations": null
}
```

