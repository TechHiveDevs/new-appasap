import { publicProcedure, router } from '../../helpers/server/trpc/trpc.helper'
import { genericCrudRouterController } from '../../helpers/generic-crud/generic-crud.controller'
import { aaaaaService } from './aaaaa.service'
import { aaaaaValidation } from './aaaaa.validation'

export const aaaaaRouter = router({
  ...genericCrudRouterController('aaaaa', aaaaaValidation),

  // -------------------------------------

  customRoute: publicProcedure.query(({ ctx: _ctx, input: _input }) => {
    return aaaaaService.aaaaaCustomService()
  }),
})
