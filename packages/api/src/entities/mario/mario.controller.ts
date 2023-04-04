import { publicProcedure, router } from '../../helpers/server/trpc/trpc.helper'
import { genericCrudRouterController } from '../../helpers/generic-crud/generic-crud.controller'
import { marioService } from './mario.service'
import { marioValidation } from './mario.validation'

export const marioRouter = router({
  ...genericCrudRouterController('mario', marioValidation),

  // -------------------------------------

  customRoute: publicProcedure.query(({ ctx: _ctx, input: _input }) => {
    return marioService.marioCustomService()
  }),
})
