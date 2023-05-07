import { publicProcedure, router } from '../../helpers/server/trpc/trpc.helper'
import { genericCrudRouterController } from '../../helpers/generic-crud/generic-crud.controller'
import { userService } from './user.service'
import { userValidation } from './user.validation'

export const userRouter = router({
  ...genericCrudRouterController('user', userValidation),

  // -------------------------------------

  customRoute: publicProcedure.query(({ ctx: _ctx, input: _input }) => {
    return userService.userCustomService()
  }),
})
