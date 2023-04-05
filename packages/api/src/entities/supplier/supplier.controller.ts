import { publicProcedure, router } from '../../helpers/server/trpc/trpc.helper'
import { genericCrudRouterController } from '../../helpers/generic-crud/generic-crud.controller'
import { supplierService } from './supplier.service'
import { supplierValidation } from './supplier.validation'

export const supplierRouter = router({
  ...genericCrudRouterController('supplier', supplierValidation),

  // -------------------------------------

  customRoute: publicProcedure.query(({ ctx: _ctx, input: _input }) => {
    return supplierService.supplierCustomService()
  }),
})
