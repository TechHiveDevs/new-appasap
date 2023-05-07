import { publicProcedure, router } from '../../helpers/server/trpc/trpc.helper'
import { genericCrudRouterController } from '../../helpers/generic-crud/generic-crud.controller'
import { serviceService } from './service.service'
import { serviceValidation } from './service.validation'

export const serviceRouter = router({
  ...genericCrudRouterController('service', serviceValidation),

  // -------------------------------------

  customRoute: publicProcedure.query(({ ctx: _ctx, input: _input }) => {
    return serviceService.serviceCustomService()
  }),
})
