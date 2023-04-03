import { DataProvider } from 'react-admin'

export type Resource<DataType> = {
  fields: (keyof DataType)[]
}

export type Resources<RecordType> = {
  [K in keyof RecordType]: Resource<RecordType[K]>
}

// =================================================================

export function createTRPCDataProvider<Mapping extends Record<string, DataType>, DataType = any>(
  trpcClient: any,
  //  = trpcNativeClient,
  _resources?: Resources<Mapping>
): DataProvider {
  return {
    getList: async (
      resource,
      { filter, pagination: { page, perPage }, sort: { field, order } }
    ) => {
      // const { page, perPage } = params.pagination
      // const { field, order } = params.sort
      // const query = {
      //   ...fetchUtils.flattenObject(params.filter),
      //   _sort: field,
      //   _order: order,
      //   _start: (page - 1) * perPage,
      //   _end: page * perPage,
      // }
      // const url = `${apiUrl}/${resource}?${stringify(query)}`
      // return httpClient(url).then(({ headers, json }) => {
      //   if (!headers.has('x-total-count')) {
      //     throw new Error(
      //       'The X-Total-Count header is missing in the HTTP Response. The jsonServer Data Provider expects responses for lists of resources to contain this header with the total number of results to build the pagination. If you are using CORS, did you declare X-Total-Count in the Access-Control-Expose-Headers header?',
      //     )
      //   }
      //   return {
      //     data: json,
      //     total: parseInt(
      //       headers.get('x-total-count')?.split('/').pop() ?? '',
      //       10,
      //     ),
      //   }
      // })
      const data = await trpcClient[resource].getList.query({
        filter,
        pagination: { page, perPage },
        sort: { field, order },
      })

      // const data = await trpcClient

      return { data, total: data.length }
    },

    // --------------------------------------------------------

    getOne: async (resource, { id }) => {
      const data = await trpcClient[resource].getOne.query({ id: Number(id) })
      return { data }
    },

    // --------------------------------------------------------

    getMany: async (resource, { ids }) => {
      const data = await trpcClient[resource].getMany.query({ ids })
      return { data }
    },

    // --------------------------------------------------------

    // TODO: https://www.prisma.io/docs/concepts/components/prisma-client/select-fields#include-relations-and-select-relation-fields
    getManyReference: async (resource, _params) => {
      const data = await trpcClient[resource].getManyReference.query({})
      return { data }
    },

    // --------------------------------------------------------

    update: async (resource, { id, data: payload }) => {
      const data = await trpcClient[resource].updateOne.mutate({ id, data: payload })
      return { data }
    },

    // --------------------------------------------------------

    updateMany: async (resource, _params) => {
      const data = await trpcClient[resource].updateMany.mutate({})
      return { data }
    },

    // --------------------------------------------------------

    create: async (resource, { data: payload }) => {
      const data = await trpcClient[resource].createOne.mutate(payload)
      return { data }
    },

    // --------------------------------------------------------

    delete: async (resource, { id }) => {
      const data = await trpcClient[resource].deleteOne.mutate({ id })
      return { data }
    },

    // --------------------------------------------------------

    deleteMany: async (resource, { ids }) => {
      const data = await trpcClient[resource].deleteMany.mutate({ ids })
      return { data }
    },
  }
}
