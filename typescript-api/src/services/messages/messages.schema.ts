import { Type, querySyntax, schema } from '../../@schema'
import type { Infer } from '../../@schema'
import { usersResultSchema } from '../users/users.schema'

// Schema for the basic data model (e.g. creating new entries)
export const messagesDataSchema = Type.Object({
  text: Type.String(),
  userId: Type.Optional(Type.Number()),
  createdAt: Type.Optional(Type.Number())
}, { $id: 'MessagesData', additionalProperties: false })

export type MessagesData = Infer<typeof messagesDataSchema>

// Schema for making partial updates
export const messagesPatchSchema = Type.Partial(messagesDataSchema, { $id: 'MessagesPatch' })

export type MessagesPatch = Infer<typeof messagesPatchSchema>

// Schema for the data that is being returned
export const messagesResultSchema = Type.Intersect([
  messagesDataSchema, 
  Type.Object({
    id: Type.String(),
    userId: Type.Number(),
    user: Type.Ref(usersResultSchema)
  })
], { $id: 'MessagesResult' })

export type MessagesResult = Infer<typeof messagesResultSchema>;

export const messagesQuerySchema = querySyntax(messagesResultSchema)
// messagesQuerySchema.

export type MessagesQuery = Infer<typeof messagesQuerySchema>