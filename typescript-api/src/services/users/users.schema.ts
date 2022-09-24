import { Type, querySyntax } from '../../@schema'
import type { Infer } from '../../@schema'


// Schema for the basic data model (e.g. creating new entries)
export const usersDataSchema = Type.Object({
  email: Type.String({ format: 'email' }),
  password: Type.Optional(Type.String()),
  avatar: Type.Optional(Type.String()),
}, { $id: 'UsersData', additionalProperties: false })

export type UsersData = Infer<typeof usersDataSchema>

// Schema for making partial updates
export const usersPatchSchema = Type.Partial(usersDataSchema, { $id: 'UsersPatch' })

export type UsersPatch = Infer<typeof usersPatchSchema>

// Schema for the data that is being returned
export const usersResultSchema = Type.Intersect([
  usersDataSchema, 
  Type.Object({
    id: Type.String()
  })
], { $id: 'UsersResult' })

export type UsersResult = Infer<typeof usersResultSchema>

// Queries shouldn't allow doing anything with the password
const usersQueryProperties = Type.Omit(usersResultSchema, ['password'])

// Schema for allowed query properties
export const usersQuerySchema = querySyntax(usersQueryProperties)

export type UsersQuery = Infer<typeof usersQuerySchema>
