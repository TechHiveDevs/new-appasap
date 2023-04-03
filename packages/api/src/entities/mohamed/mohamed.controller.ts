import { publicProcedure, router } from '../../helpers/server/trpc/trpc.helper'
import { genericCrudRouterController } from '../../helpers/generic-crud/generic-crud.controller'
import { mohamedService } from './mohamed.service'
import { mohamedValidation } from './mohamed.validation'

export const mohamedRouter = router({
  ...genericCrudRouterController('mohamed', mohamedValidation),

  // -------------------------------------

  customRoute: publicProcedure.query(({ ctx: _ctx, input: _input }) => {
    return mohamedService.mohamedCustomService()
  }),
})
