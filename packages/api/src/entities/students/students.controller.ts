import { publicProcedure, router } from '../../helpers/server/trpc/trpc.helper'
import { genericCrudRouterController } from '../../helpers/generic-crud/generic-crud.controller'
import { studentsService } from './students.service'
import { studentsValidation } from './students.validation'

export const studentsRouter = router({
  ...genericCrudRouterController('students', studentsValidation),

  // -------------------------------------

  customRoute: publicProcedure.query(({ ctx: _ctx, input: _input }) => {
    return studentsService.studentsCustomService()
  }),
})
