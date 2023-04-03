import { publicProcedure, router } from '../../helpers/server/trpc/trpc.helper'
import { genericCrudRouterController } from '../../helpers/generic-crud/generic-crud.controller'
import { nService } from './n.service'
import { nValidation } from './n.validation'

export const nRouter = router({
  ...genericCrudRouterController('n', nValidation),

  // -------------------------------------

  customRoute: publicProcedure.query(({ ctx: _ctx, input: _input }) => {
    return nService.nCustomService()
  }),
})
