import { publicProcedure, router } from '../../helpers/server/trpc/trpc.helper'
import { genericCrudRouterController } from '../../helpers/generic-crud/generic-crud.controller'
import { courseService } from './course.service'
import { courseValidation } from './course.validation'

export const courseRouter = router({
  ...genericCrudRouterController('course', courseValidation),

  // -------------------------------------

  customRoute: publicProcedure.query(({ ctx: _ctx, input: _input }) => {
    return courseService.courseCustomService()
  }),
})
