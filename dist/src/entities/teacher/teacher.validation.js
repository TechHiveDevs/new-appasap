"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.teacherValidation = void 0;
const zod_1 = require("zod");
const generic_crud_validation_1 = require("../../helpers/generic-crud/generic-crud.validation");
// =================================================================
const fields = [
    'id',
    'createdAt',
    'updatedAt',
];
// =================================================================
exports.teacherValidation = {
    // ------------------------------
    ...generic_crud_validation_1.genericValidation,
    // ------------------------------
    getListValidation: zod_1.z
        .object({
        select: zod_1.z.enum(fields).array().optional(),
        filter: zod_1.z.any().optional(),
        pagination: zod_1.z
            .object({
            page: zod_1.z.number().default(1).optional(),
            perPage: zod_1.z.number().default(10).optional(),
        })
            .optional(),
        sort: zod_1.z
            .object({
            field: zod_1.z.enum(fields).default('createdAt').optional(),
            order: zod_1.z.enum(['ASC', 'DESC']).default('ASC').optional(),
        })
            .optional()
    })
        .partial()
        .optional(),
    // ------------------------------
    getOneValidation: zod_1.z.object({
        id: zod_1.z.number(),
        select: zod_1.z.enum(fields).array().optional()
    }),
    // ------------------------------
    createOneValidation: zod_1.z.object({
        id: zod_1.z.number().optional(),
        createdAt: zod_1.z.date().optional(),
        updatedAt: zod_1.z.date(),
    }),
    // ----------------------------------
    updateOneValidation: zod_1.z.object({
        id: zod_1.z.number(),
        data: zod_1.z.object({
            id: zod_1.z.number().optional(),
            createdAt: zod_1.z.date().optional(),
            updatedAt: zod_1.z.date(),
        }).partial(),
    }),
};
