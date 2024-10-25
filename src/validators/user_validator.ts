import vine, { errors } from "@vinejs/vine";

export const userIndexValidator = vine.compile(
  vine.object({
    page: vine.number().positive().withoutDecimals().optional(),
    perPage: vine.number().positive().withoutDecimals().max(100).optional(),
  })
);

export const userStoreValidator = vine.compile(
  vine.object({
    email: vine.string().email(),
    password: vine.string().minLength(6),
    fullName: vine.string().nullable().optional(),
  })
);

export const userShowValidator = vine.compile(
  vine.object({
    params: vine.object({
      id: vine.number().positive().withoutDecimals(),
    }),
  })
);

export const userUpdateValidator = vine.withMetaData<{ id: number }>().compile(
  vine.object({
    email: vine.string().email(),
    password: vine.string().minLength(6).optional(),
    fullName: vine.string().nullable().optional(),
  })
);

export const E_VALIDATION_ERROR: typeof errors.E_VALIDATION_ERROR =
  errors.E_VALIDATION_ERROR;
