import { z } from "zod";
import { genericValidation } from "../../helpers/generic-crud/generic-crud.validation";

// =================================================================

const fields = [
  'id',
  'createdAt',
  'updatedAt',
  'date',
  'amount',
  'litres',
  'kilometers',
  'litresScreenshot',
  'kilometersScreenshot',
  'statu',
] as const

// =================================================================

export const transactionValidation: typeof genericValidation = {
  // ------------------------------

  ...genericValidation,

  // ------------------------------
  
  getListValidation: z
    .object({
      select: z.enum(fields).array().optional(),
      filter: z.any().optional(),
      pagination: z
        .object({
          page: z.number().default(1).optional(),
          perPage: z.number().default(10).optional(),
        })
        .optional(),
      sort: z
        .object({
          field: z.enum(fields).default('createdAt').optional(),
          order: z.enum(['ASC', 'DESC']).default('ASC').optional(),
        })
        .optional()
    })
    .partial()
    .optional(),
  
  // ------------------------------

  
  getOneValidation: z.object({ 
    id: z.number(), 
    select: z.enum(fields).array().optional()
  }),

  // ------------------------------

  createOneValidation: z.object({
    id: z.number().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    date: z.date().optional(),
    amount: z.number().optional(),
    litres: z.number().optional(),
    kilometers: z.number().optional(),
    litresScreenshot: z.string().optional(),
    kilometersScreenshot: z.string().optional(),
    statu: z.enum(['APPROVED','PENDING','DECLINED']),
  }),

  // ----------------------------------

  updateOneValidation: z.object({ 
    id: z.number(), 
    data: z.object({
      id: z.number().optional(),
      createdAt: z.date().optional(),
      updatedAt: z.date().optional(),
      date: z.date().optional(),
      amount: z.number().optional(),
      litres: z.number().optional(),
      kilometers: z.number().optional(),
      litresScreenshot: z.string().optional(),
      kilometersScreenshot: z.string().optional(),
      statu: z.enum(['APPROVED','PENDING','DECLINED']),
    }).partial(),
  }),
}
