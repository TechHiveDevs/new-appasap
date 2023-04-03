"use strict";
/**
 *  Generic Crud Service
 *  @author MarioMonir
 **/
Object.defineProperty(exports, "__esModule", { value: true });
exports.genericCrudService = void 0;
// ------------------------------------------------------
// @ts-nocheck
const prisma_helper_1 = require("../database/prisma-helpers/prisma.helper");
// -------------------------------------------------------
/** NOT COMPLETED Get List of records for a given model Search for resources */
const getList = async (model, { where, skip, take, orderBy, select }) => {
    return Promise.all([
        prisma_helper_1.prisma[model].count({ where }),
        prisma_helper_1.prisma[model].findMany({ skip, take, where, orderBy, select }),
    ]);
};
// -------------------------------------------------------
/** Read a single resource, by id */
const getOne = async (model, { id, select }) => {
    return prisma_helper_1.prisma[model].findUnique({ where: { id }, select });
};
// -------------------------------------------------------
/** Get a list of resource by their ids */
const getMany = async (model, { ids }) => {
    return prisma_helper_1.prisma[model].findMany({ where: { id: { in: ids } } });
};
// -------------------------------------------------------
/** COMING SOON : Read a list of resources related to another one */
const getManyReference = async (model, { target, where, skip, take, orderBy }) => {
    return Promise.all([
        prisma_helper_1.prisma[model].count({ where }),
        prisma_helper_1.prisma[model].findMany({ skip, take, where, orderBy }),
    ]);
};
// -------------------------------------------------------
/** Create a single resource */
const createOne = async (model, data) => {
    var _a;
    return (_a = prisma_helper_1.prisma[model]) === null || _a === void 0 ? void 0 : _a.create({ data });
};
// -------------------------------------------------------
/** Update a single resource */
const updateOne = async (model, id, data) => {
    return prisma_helper_1.prisma[model].update({ where: { id }, data });
};
// -------------------------------------------------------
/** COMING SOON Update multiple resources */
const updateMany = async (model, ids, data) => {
    return prisma_helper_1.prisma[model].updateMany({ where: { id: { in: ids } }, data });
};
// -------------------------------------------------------
/** Delete a single resource, by id */
const deleteOne = async (model, id) => {
    return prisma_helper_1.prisma[model].delete({ where: { id } });
};
// -------------------------------------------------------
/** Delete multiple resources, by ids */
const deleteMany = async (model, ids) => {
    await prisma_helper_1.prisma[model].deleteMany({ where: { id: { in: ids } } });
    return [ids];
};
// -------------------------------------------------------
/** Get Counts of resource grouped By a column */
const getCountsGroupBy = async (model, groupBy = 'createdAt') => {
    return await prisma_helper_1.prisma[model].groupBy({ by: [groupBy], _count: true });
};
// =======================================================
exports.genericCrudService = {
    getList,
    getOne,
    getMany,
    getManyReference,
    createOne,
    updateOne,
    updateMany,
    deleteOne,
    deleteMany,
    getCountsGroupBy,
};
