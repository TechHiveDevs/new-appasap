import { publicProcedure, router } from '../../helpers/server/trpc/trpc.helper'
import { genericCrudRouterController } from '../../helpers/generic-crud/generic-crud.controller'
import { bService } from './b.service'
import { bValidation } from './b.validation'

export const bRouter = router({
  ...genericCrudRouterController('b', bValidation),

  // -------------------------------------

  customRoute: publicProcedure.query(({ ctx: _ctx, input: _input }) => {
    return bService.bCustomService()
  }),
})
