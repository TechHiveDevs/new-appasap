import { publicProcedure, router } from '../../helpers/server/trpc/trpc.helper'
import { genericCrudRouterController } from '../../helpers/generic-crud/generic-crud.controller'
import { bbbbbbbbbbbbbbbbbService } from './bbbbbbbbbbbbbbbbb.service'
import { bbbbbbbbbbbbbbbbbValidation } from './bbbbbbbbbbbbbbbbb.validation'

export const bbbbbbbbbbbbbbbbbRouter = router({
  ...genericCrudRouterController('bbbbbbbbbbbbbbbbb', bbbbbbbbbbbbbbbbbValidation),

  // -------------------------------------

  customRoute: publicProcedure.query(({ ctx: _ctx, input: _input }) => {
    return bbbbbbbbbbbbbbbbbService.bbbbbbbbbbbbbbbbbCustomService()
  }),
})
