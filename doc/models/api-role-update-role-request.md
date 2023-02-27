
# Api Role Update Role Request

## Structure

`ApiRoleUpdateRoleRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Required | - |
| `name` | `string` | Required | - |
| `createdAt` | `string` | Required | - |
| `updatedAt` | `string` | Required | - |
| `createdBy` | `string \| null` | Required | - |
| `updatedBy` | `string \| null` | Required | - |
| `permissionRoles` | `string \| null` | Required | - |
| `users` | `string \| null` | Required | - |

## Example (as JSON)

```json
{
  "id": 1,
  "name": "Admin",
  "createdAt": "2023-02-26T21:41:38Z",
  "updatedAt": "2023-02-26T21:41:38Z",
  "createdBy": null,
  "updatedBy": null,
  "permissionRoles": null,
  "users": null
}
```

