import { publicProcedure, router } from '../../helpers/server/trpc/trpc.helper'
import { genericCrudRouterController } from '../../helpers/generic-crud/generic-crud.controller'
import { studentService } from './student.service'
import { studentValidation } from './student.validation'

export const studentRouter = router({
  ...genericCrudRouterController('student', studentValidation),

  // -------------------------------------

  customRoute: publicProcedure.query(({ ctx: _ctx, input: _input }) => {
    return studentService.studentCustomService()
  }),
})
