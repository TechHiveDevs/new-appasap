import { publicProcedure, router } from '../../helpers/server/trpc/trpc.helper'
import { genericCrudRouterController } from '../../helpers/generic-crud/generic-crud.controller'
import { postService } from './post.service'
import { postValidation } from './post.validation'

export const postRouter = router({
  ...genericCrudRouterController('post', postValidation),

  // -------------------------------------

  customRoute: publicProcedure.query(({ ctx: _ctx, input: _input }) => {
    return postService.postCustomService()
  }),
})
