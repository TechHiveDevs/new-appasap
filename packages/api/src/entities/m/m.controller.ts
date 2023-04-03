import { publicProcedure, router } from '../../helpers/server/trpc/trpc.helper'
import { genericCrudRouterController } from '../../helpers/generic-crud/generic-crud.controller'
import { mService } from './m.service'
import { mValidation } from './m.validation'

export const mRouter = router({
  ...genericCrudRouterController('m', mValidation),

  // -------------------------------------

  customRoute: publicProcedure.query(({ ctx: _ctx, input: _input }) => {
    return mService.mCustomService()
  }),
})
