
# Api User Add User Request

## Structure

`ApiUserAddUserRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `firstName` | `string` | Required | - |
| `lastName` | `string` | Required | - |
| `email` | `string` | Required | - |
| `password` | `string` | Required | - |
| `createdAt` | `string` | Required | - |
| `updatedAt` | `string` | Required | - |
| `createdBy` | `string \| null` | Required | - |
| `updatedBy` | `string \| null` | Required | - |
| `refreshToken` | `string \| null` | Required | - |
| `refreshTokenExpiryTime` | `string \| null` | Required | - |
| `addresses` | `string \| null` | Required | - |
| `role` | `unknown` | Required | - |

## Example (as JSON)

```json
{
  "firstName": "Claire",
  "lastName": "G",
  "email": "c@g.c",
  "password": "AQAAAAIAAYagAAAAEItqzhsF0gvPuRPd2Fn9slQjkF9PEhSYzydFYK9Pecm37H++Jz4Tcle588EtlD84Dw==",
  "createdAt": "2023-02-26T21:43:36Z",
  "updatedAt": "2023-02-26T21:43:36Z",
  "createdBy": null,
  "updatedBy": null,
  "refreshToken": null,
  "refreshTokenExpiryTime": null,
  "addresses": null,
  "role": {
    "id": 1
  }
}
```

