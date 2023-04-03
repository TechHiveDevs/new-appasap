import { publicProcedure, router } from '../../helpers/server/trpc/trpc.helper'
import { genericCrudRouterController } from '../../helpers/generic-crud/generic-crud.controller'
import { faragelloService } from './faragello.service'
import { faragelloValidation } from './faragello.validation'

export const faragelloRouter = router({
  ...genericCrudRouterController('faragello', faragelloValidation),

  // -------------------------------------

  customRoute: publicProcedure.query(({ ctx: _ctx, input: _input }) => {
    return faragelloService.faragelloCustomService()
  }),
})
