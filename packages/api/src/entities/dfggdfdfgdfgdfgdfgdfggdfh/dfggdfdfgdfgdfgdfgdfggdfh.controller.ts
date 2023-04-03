import { publicProcedure, router } from '../../helpers/server/trpc/trpc.helper'
import { genericCrudRouterController } from '../../helpers/generic-crud/generic-crud.controller'
import { dfggdfdfgdfgdfgdfgdfggdfhService } from './dfggdfdfgdfgdfgdfgdfggdfh.service'
import { dfggdfdfgdfgdfgdfgdfggdfhValidation } from './dfggdfdfgdfgdfgdfgdfggdfh.validation'

export const dfggdfdfgdfgdfgdfgdfggdfhRouter = router({
  ...genericCrudRouterController('dfggdfdfgdfgdfgdfgdfggdfh', dfggdfdfgdfgdfgdfgdfggdfhValidation),

  // -------------------------------------

  customRoute: publicProcedure.query(({ ctx: _ctx, input: _input }) => {
    return dfggdfdfgdfgdfgdfgdfggdfhService.dfggdfdfgdfgdfgdfgdfggdfhCustomService()
  }),
})
