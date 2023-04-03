import { z } from 'zod'

// ==================================================================================

const fields: any = z.string().array().default(['createdAt'])

// -----------------------------------------------------------

const getListValidation: any = z
  .object({
    select: z.enum([fields]).array().optional(),
    filter: z.any().optional().nullable(),
    pagination: z
      .object({
        page: z.number().default(1).optional(),
        perPage: z.number().default(10).optional(),
      })
      .optional(),
    sort: z
      .object({
        field: z.enum(fields).optional(),
        order: z.enum(['ASC', 'DESC']).default('ASC').optional(),
      })
      .optional(),
  })
  .partial()
  .optional()

// -----------------------------------------------------------

const getOneValidation: any = z.object({
  id: z.number(),
  select: z.enum([fields]).array().optional(),
})

// -----------------------------------------------------------

const getManyValidation = z.object({ ids: z.number().array() })

// -----------------------------------------------------------

const getManyReference = z.object({ ids: z.number() }).optional()

// -----------------------------------------------------------

const createOneValidation = z.object({})

// -----------------------------------------------------------

const updateOneValidation = z.object({
  id: z.number(),
  data: z.object({}).partial(),
})

// -----------------------------------------------------------

const updateManyValidation = z.object({
  ids: z.number().array(),
  data: z.object({}).array(),
})

// -----------------------------------------------------------

const deleteOneValidation = z.object({ id: z.number() })

// -----------------------------------------------------------

const deleteManyValidation = z.object({ ids: z.number().array() })

// -----------------------------------------------------------

const getCountsGroupBy = z.object({ groupBy: z.string() })

// ==================================================================================

export const genericValidation = {
  getListValidation,
  getOneValidation,
  getManyValidation,
  getManyReference,
  createOneValidation,
  updateOneValidation,
  updateManyValidation,
  deleteOneValidation,
  deleteManyValidation,
  getCountsGroupBy,
}
