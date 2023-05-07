import { publicProcedure, router } from '../../helpers/server/trpc/trpc.helper'
import { genericCrudRouterController } from '../../helpers/generic-crud/generic-crud.controller'
import { ammarPostService } from './ammarPost.service'
import { ammarPostValidation } from './ammarPost.validation'

export const ammarPostRouter = router({
  ...genericCrudRouterController('ammarPost', ammarPostValidation),

  // -------------------------------------

  customRoute: publicProcedure.query(({ ctx: _ctx, input: _input }) => {
    return ammarPostService.ammarPostCustomService()
  }),
})
