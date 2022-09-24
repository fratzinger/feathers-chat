import { Type, Ajv, schema } from './@schema'
import type { Infer } from './@schema'
import { authenticationSettingsSchema } from './@authentication'

export const configurationSchema = schema(
  Type.Object({
    host: Type.String(),
    port: Type.Number(),
    public: Type.String(),
    sqlite: Type.Optional(Type.Object({
      client: Type.String(),
      connection: Type.String()
    })),
    authentication: authenticationSettingsSchema,
    paginate: Type.Object({
      default: Type.Number(),
      max: Type.Number()
    }, { additionalProperties: false }),
    
  }, { $id: 'ApplicationConfiguration', additionalProperties: false }),
  new Ajv()
)

export type ConfigurationSchema = Infer<typeof configurationSchema>
