import { publicProcedure, router } from '../../helpers/server/trpc/trpc.helper'
import { genericCrudRouterController } from '../../helpers/generic-crud/generic-crud.controller'
import { xxxxxxxxxxxxService } from './xxxxxxxxxxxx.service'
import { xxxxxxxxxxxxValidation } from './xxxxxxxxxxxx.validation'

export const xxxxxxxxxxxxRouter = router({
  ...genericCrudRouterController('xxxxxxxxxxxx', xxxxxxxxxxxxValidation),

  // -------------------------------------

  customRoute: publicProcedure.query(({ ctx: _ctx, input: _input }) => {
    return xxxxxxxxxxxxService.xxxxxxxxxxxxCustomService()
  }),
})
