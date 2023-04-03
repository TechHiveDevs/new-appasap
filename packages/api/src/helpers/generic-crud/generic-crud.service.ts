/**
 *  Generic Crud Service
 *  @author MarioMonir
 **/

// ------------------------------------------------------

// @ts-nocheck
import { prisma } from '../database/prisma-helpers/prisma.helper'
import { GetListParsed } from './generic-crud.helper'

// -------------------------------------------------------

/** NOT COMPLETED Get List of records for a given model Search for resources */
const getList = async (model: string, { where, skip, take, orderBy, select }: GetListParsed) => {
  return Promise.all([
    prisma[model].count({ where }),
    prisma[model].findMany({ skip, take, where, orderBy, select }),
  ])
}

// -------------------------------------------------------

/** Read a single resource, by id */
const getOne = async (model: string, { id, select }: { id: number; select?: object }) => {
  return prisma[model].findUnique({ where: { id }, select })
}

// -------------------------------------------------------

/** Get a list of resource by their ids */
const getMany = async (model: string, { ids }) => {
  return prisma[model].findMany({ where: { id: { in: ids } } })
}

// -------------------------------------------------------

/** COMING SOON : Read a list of resources related to another one */
const getManyReference = async (model: string, { target, where, skip, take, orderBy }) => {
  return Promise.all([
    prisma[model].count({ where }),
    prisma[model].findMany({ skip, take, where, orderBy }),
  ])
}

// -------------------------------------------------------

/** Create a single resource */
const createOne = async (model: string, data: any) => {
  return prisma[model]?.create({ data })
}
// -------------------------------------------------------

/** Update a single resource */
const updateOne = async (model: string, id: number, data: object) => {
  return prisma[model].update({ where: { id }, data })
}

// -------------------------------------------------------

/** COMING SOON Update multiple resources */
const updateMany = async (model: string, ids: number[], data: any) => {
  return prisma[model].updateMany({ where: { id: { in: ids } }, data })
}

// -------------------------------------------------------

/** Delete a single resource, by id */
const deleteOne = async (model: string, id: number) => {
  return prisma[model].delete({ where: { id } })
}

// -------------------------------------------------------

/** Delete multiple resources, by ids */
const deleteMany = async (model: string, ids: number[]) => {
  await prisma[model].deleteMany({ where: { id: { in: ids } } })
  return [ids]
}

// -------------------------------------------------------

/** Get Counts of resource grouped By a column */
const getCountsGroupBy = async (model: string, groupBy: string = 'createdAt') => {
  return await prisma[model].groupBy({ by: [groupBy], _count: true })
}

// =======================================================

export const genericCrudService = {
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
}
