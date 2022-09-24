import { Type, Nullable } from "../@schema"

export const authenticationSettingsSchema = Type.Object({
    secret: Type.String({ description: 'The JWT signing secret' }),
    entity: Nullable(Type.String(), { description: 'The name of the authentication entity (e.g. user)' }),
    entityId: Type.String({ description: 'The name of the authentication entity id property' }),
    service: Type.String({ description: 'The path of the entity service' }),
    authStrategies: Type.Array(Type.String(), { description: 'A list of authentication strategy names that are allowed to create JWT access tokens' }),
    parseStrategies: Type.Array(Type.String(), { description: 'A list of authentication strategy names that should parse HTTP headers for authentication information (defaults to `authStrategies`)' }),
    jwtOptions: Type.Object({}),
    jwt: Type.Object({
        header: Type.String({ default: 'Authorization', description: 'The HTTP header containing the JWT' }),
        schemes: Type.String({ description: 'An array of schemes to support' }),
    }),
    local: Type.Object({
        usernameField: Type.String({ description: 'Name of the username field (e.g. `email`)' }),
        passwordField: Type.String({ description: 'Name of the password field (e.g. `password`)' }),
        hashSize: Type.Optional(Type.Number({ description: 'The BCrypt salt length' })),
        errorMessage: Type.Optional(Type.String({ description: 'The error message to return on errors' })),
        entityUsernameField: Type.Optional(Type.String({ description: 'Name of the username field on the entity if authentication request data and entity field names are different' })),
        entityPasswordField: Type.Optional(Type.String({ description: 'Name of the password field on the entity if authentication request data and entity field names are different' })),
    }),
    oauth: Type.Object({
        redirect: Type.Optional(Type.String()),
        origins: Type.Optional(Type.Array(Type.String())),
        defaults: Type.Optional(Type.Object({
            key: Type.Optional(Type.String()),
            secret: Type.Optional(Type.String()),
        })),
    })
})
  