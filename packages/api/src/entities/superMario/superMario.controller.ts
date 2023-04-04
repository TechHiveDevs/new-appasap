import { publicProcedure, router } from '../../helpers/server/trpc/trpc.helper'
import { genericCrudRouterController } from '../../helpers/generic-crud/generic-crud.controller'
import { superMarioService } from './superMario.service'
import { superMarioValidation } from './superMario.validation'

export const superMarioRouter = router({
  ...genericCrudRouterController('superMario', superMarioValidation),

  // -------------------------------------

  customRoute: publicProcedure.query(({ ctx: _ctx, input: _input }) => {
    return superMarioService.superMarioCustomService()
  }),
})
