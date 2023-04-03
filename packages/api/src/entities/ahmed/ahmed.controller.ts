import { publicProcedure, router } from '../../helpers/server/trpc/trpc.helper'
import { genericCrudRouterController } from '../../helpers/generic-crud/generic-crud.controller'
import { ahmedService } from './ahmed.service'
import { ahmedValidation } from './ahmed.validation'

export const ahmedRouter = router({
  ...genericCrudRouterController('ahmed', ahmedValidation),

  // -------------------------------------

  customRoute: publicProcedure.query(({ ctx: _ctx, input: _input }) => {
    return ahmedService.ahmedCustomService()
  }),
})
