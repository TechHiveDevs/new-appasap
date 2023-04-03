"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genericValidation = void 0;
const zod_1 = require("zod");
// ==================================================================================
const fields = zod_1.z.string().array().default(['createdAt']);
// -----------------------------------------------------------
const getListValidation = zod_1.z
    .object({
    select: zod_1.z.enum([fields]).array().optional(),
    filter: zod_1.z.any().optional().nullable(),
    pagination: zod_1.z
        .object({
        page: zod_1.z.number().default(1).optional(),
        perPage: zod_1.z.number().default(10).optional(),
    })
        .optional(),
    sort: zod_1.z
        .object({
        field: zod_1.z.enum(fields).optional(),
        order: zod_1.z.enum(['ASC', 'DESC']).default('ASC').optional(),
    })
        .optional(),
})
    .partial()
    .optional();
// -----------------------------------------------------------
const getOneValidation = zod_1.z.object({
    id: zod_1.z.number(),
    select: zod_1.z.enum([fields]).array().optional(),
});
// -----------------------------------------------------------
const getManyValidation = zod_1.z.object({ ids: zod_1.z.number().array() });
// -----------------------------------------------------------
const getManyReference = zod_1.z.object({ ids: zod_1.z.number() }).optional();
// -----------------------------------------------------------
const createOneValidation = zod_1.z.object({});
// -----------------------------------------------------------
const updateOneValidation = zod_1.z.object({
    id: zod_1.z.number(),
    data: zod_1.z.object({}).partial(),
});
// -----------------------------------------------------------
const updateManyValidation = zod_1.z.object({
    ids: zod_1.z.number().array(),
    data: zod_1.z.object({}).array(),
});
// -----------------------------------------------------------
const deleteOneValidation = zod_1.z.object({ id: zod_1.z.number() });
// -----------------------------------------------------------
const deleteManyValidation = zod_1.z.object({ ids: zod_1.z.number().array() });
// -----------------------------------------------------------
const getCountsGroupBy = zod_1.z.object({ groupBy: zod_1.z.string() });
// ==================================================================================
exports.genericValidation = {
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
};
