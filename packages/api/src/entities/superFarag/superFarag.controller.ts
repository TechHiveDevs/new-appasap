import { publicProcedure, router } from '../../helpers/server/trpc/trpc.helper'
import { genericCrudRouterController } from '../../helpers/generic-crud/generic-crud.controller'
import { superFaragService } from './superFarag.service'
import { superFaragValidation } from './superFarag.validation'

export const superFaragRouter = router({
  ...genericCrudRouterController('superFarag', superFaragValidation),

  // -------------------------------------

  customRoute: publicProcedure.query(({ ctx: _ctx, input: _input }) => {
    return superFaragService.superFaragCustomService()
  }),
})
