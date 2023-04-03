"use strict";
/**
 * Genric Crud Controller
 *
 * This module aims to act like a generic singleton
 * module can do CRUD for any resource
 *
 * @author MarioMonir
 **/
Object.defineProperty(exports, "__esModule", { value: true });
exports.genericCrudRouterController = void 0;
// ------------------------------------------------------
const trpc_helper_1 = require("../../helpers/server/trpc/trpc.helper");
const generic_crud_helper_1 = require("./generic-crud.helper");
const generic_crud_service_1 = require("./generic-crud.service");
const generic_crud_validation_1 = require("./generic-crud.validation");
// ------------------------------------------------------
const genericCrudRouterController = (model, modelValidation = generic_crud_validation_1.genericValidation) => ({
    // ----------------------------------------------
    getList: trpc_helper_1.publicProcedure
        .input(modelValidation.getListValidation)
        .query(async ({ ctx: { req, res }, input }) => {
        const parsedQueryParams = (0, generic_crud_helper_1.parseQuery)({ path: req.path, ...input });
        const [count, rows] = await generic_crud_service_1.genericCrudService.getList(model, parsedQueryParams);
        (0, generic_crud_helper_1.setGetListHeaders)({ res, total: count, rowsCount: (rows === null || rows === void 0 ? void 0 : rows.length) || 0 });
        return rows;
    }),
    // ----------------------------------------------
    getOne: trpc_helper_1.publicProcedure
        .input(modelValidation.getOneValidation)
        .query(({ ctx: { req }, input }) => {
        const { select } = (0, generic_crud_helper_1.parseQuery)({ path: req.path, ...input });
        return generic_crud_service_1.genericCrudService.getOne(model, { id: input.id, select });
    }),
    // ----------------------------------------------
    getMany: trpc_helper_1.publicProcedure
        .input(modelValidation.getManyValidation)
        .query(({ input }) => generic_crud_service_1.genericCrudService.getMany(model, input)),
    // ----------------------------------------------
    /* Coming Soon
    getManyReference: publicProcedure
      .input(modelValidation.getManyReference)
      .query(async ({ input }) => {
        const { where, skip, take, orderBy } = parseQuery(input)
        const [_count, rows] = await genericCrudService.getManyReference(model, {
          target: '',
          where,
          skip,
          take,
          orderBy,
        })
        return rows
      }),
    */
    // ----------------------------------------------
    createOne: trpc_helper_1.publicProcedure
        .input(modelValidation.createOneValidation)
        .mutation(({ input }) => generic_crud_service_1.genericCrudService.createOne(model, input)),
    // ----------------------------------------------
    updateOne: trpc_helper_1.publicProcedure
        .input(modelValidation.updateOneValidation)
        .mutation(({ ctx: _ctx, input: { id, data } }) => {
        return generic_crud_service_1.genericCrudService.updateOne(model, id, data);
    }),
    // ----------------------------------------------
    /* Coming Soon
    updateMany: publicProcedure
      .input(modelValidation.updateManyValidation)
      .mutation(({ input: _input }) => genericCrudService.updateMany(model, [], {})),
    */
    // ----------------------------------------------
    deleteOne: trpc_helper_1.publicProcedure
        .input(modelValidation.deleteOneValidation)
        .mutation(({ input: { id } }) => generic_crud_service_1.genericCrudService.deleteOne(model, id)),
    // ----------------------------------------------
    deleteMany: trpc_helper_1.publicProcedure
        .input(modelValidation.deleteManyValidation)
        .mutation(({ input: { ids } }) => generic_crud_service_1.genericCrudService.deleteMany(model, ids)),
    // ----------------------------------------------
    getCountsGroupBy: trpc_helper_1.publicProcedure
        .input(modelValidation.getCountsGroupBy)
        .query(({ input: { groupBy } }) => generic_crud_service_1.genericCrudService.getCountsGroupBy(model, groupBy)),
    // ----------------------------------------------
});
exports.genericCrudRouterController = genericCrudRouterController;
