import vine, { errors } from "@vinejs/vine";

export const authRegisterValidator = vine.compile(
  vine.object({
    email: vine.string().email(),
    password: vine.string().minLength(6),
    fullName: vine.string().nullable().optional(),
  })
);

export const authLoginValidator = vine.compile(
  vine.object({
    email: vine.string().email(),
    password: vine.string().minLength(6),
  })
);

export const authLoginResponseValidator = vine.compile(
  vine.object({
    user: vine.object({
      id: vine.number().positive().withoutDecimals(),
      email: vine.string().email(),
      fullName: vine.string().nullable(),
      updatedAt: vine.string(),
    }),
    token: vine.object({
      abilities: vine.array(vine.string()),
      expiresAt: vine.string(),
      lastUsedAt: vine.string().nullable().optional(),
      name: vine.string().nullable().optional(),
      token: vine.string(),
      type: vine.string(),
    }),
  })
);

export const E_VALIDATION_ERROR: typeof errors.E_VALIDATION_ERROR =
  errors.E_VALIDATION_ERROR;
