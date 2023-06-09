import { z } from "zod";
import { genericValidation } from "../../helpers/generic-crud/generic-crud.validation";

// =================================================================

const fields = [
  'id',
  'createdAt',
  'updatedAt',
  'name',
  'nickname',
  'email',
  'phone',
  'password',
  'otp',
  'otpExpiresAt',
  'carPlateNumber',
  'pinCode',
  'profilePicture',
  'transactionId',
  'city',
  'district',
] as const

// =================================================================

export const userValidation: typeof genericValidation = {
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
    name: z.string(),
    nickname: z.string().optional(),
    email: z.string(),
    phone: z.string(),
    password: z.string(),
    otp: z.boolean().optional(),
    otpExpiresAt: z.date().optional(),
    carPlateNumber: z.string(),
    pinCode: z.number(),
    profilePicture: z.string().optional(),
    transactionId: z.number(),
    city: z.string().optional(),
    district: z.string().optional(),
  }),

  // ----------------------------------

  updateOneValidation: z.object({ 
    id: z.number(), 
    data: z.object({
      id: z.number().optional(),
      createdAt: z.date().optional(),
      updatedAt: z.date().optional(),
      name: z.string(),
      nickname: z.string().optional(),
      email: z.string(),
      phone: z.string(),
      password: z.string(),
      otp: z.boolean().optional(),
      otpExpiresAt: z.date().optional(),
      carPlateNumber: z.string(),
      pinCode: z.number(),
      profilePicture: z.string().optional(),
      transactionId: z.number(),
      city: z.string().optional(),
      district: z.string().optional(),
    }).partial(),
  }),
}
