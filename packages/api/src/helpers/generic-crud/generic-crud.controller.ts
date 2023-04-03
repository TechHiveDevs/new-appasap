/**
 * Genric Crud Controller
 *
 * This module aims to act like a generic singleton
 * module can do CRUD for any resource
 *
 * @author MarioMonir
 **/

// ------------------------------------------------------

import { publicProcedure } from '../../helpers/server/trpc/trpc.helper'
import { parseQuery, setGetListHeaders } from './generic-crud.helper'
import { genericCrudService } from './generic-crud.service'
import { genericValidation } from './generic-crud.validation'
import { Model } from '../types/types'

// ------------------------------------------------------

export const genericCrudRouterController = (model: Model, modelValidation = genericValidation) => ({
  // ----------------------------------------------

  getList: publicProcedure
    .input(modelValidation.getListValidation)
    .query(async ({ ctx: { req, res }, input }) => {
      const parsedQueryParams = parseQuery({ path: req.path, ...(input as any) })
      const [count, rows] = await genericCrudService.getList(model, parsedQueryParams)
      setGetListHeaders({ res, total: count, rowsCount: rows?.length || 0 })
      return rows
    }),

  // ----------------------------------------------

  getOne: publicProcedure
    .input(modelValidation.getOneValidation)
    .query(({ ctx: { req }, input }: any) => {
      const { select } = parseQuery({ path: req.path, ...(input as any) })
      return genericCrudService.getOne(model, { id: input.id, select })
    }),

  // ----------------------------------------------

  getMany: publicProcedure
    .input(modelValidation.getManyValidation)
    .query(({ input }) => genericCrudService.getMany(model, input)),

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

  createOne: publicProcedure
    .input(modelValidation.createOneValidation)
    .mutation(({ input }) => genericCrudService.createOne(model, input)),

  // ----------------------------------------------

  updateOne: publicProcedure
    .input(modelValidation.updateOneValidation)
    .mutation(({ ctx: _ctx, input: { id, data } }) => {
      return genericCrudService.updateOne(model, id, data)
    }),

  // ----------------------------------------------

  /* Coming Soon
  updateMany: publicProcedure
    .input(modelValidation.updateManyValidation)
    .mutation(({ input: _input }) => genericCrudService.updateMany(model, [], {})),
  */

  // ----------------------------------------------

  deleteOne: publicProcedure
    .input(modelValidation.deleteOneValidation)
    .mutation(({ input: { id } }) => genericCrudService.deleteOne(model, id)),

  // ----------------------------------------------

  deleteMany: publicProcedure
    .input(modelValidation.deleteManyValidation)
    .mutation(({ input: { ids } }) => genericCrudService.deleteMany(model, ids)),

  // ----------------------------------------------

  getCountsGroupBy: publicProcedure
    .input(modelValidation.getCountsGroupBy)
    .query(({ input: { groupBy } }) => genericCrudService.getCountsGroupBy(model, groupBy)),

  // ----------------------------------------------
})
