import { publicProcedure, router } from '../../helpers/server/trpc/trpc.helper'
import { genericCrudRouterController } from '../../helpers/generic-crud/generic-crud.controller'
import { transactionService } from './transaction.service'
import { transactionValidation } from './transaction.validation'

export const transactionRouter = router({
  ...genericCrudRouterController('transaction', transactionValidation),

  // -------------------------------------

  customRoute: publicProcedure.query(({ ctx: _ctx, input: _input }) => {
    return transactionService.transactionCustomService()
  }),
})
