import { publicProcedure, router } from '../../helpers/server/trpc/trpc.helper'
import { genericCrudRouterController } from '../../helpers/generic-crud/generic-crud.controller'
import { gasStationService } from './gasStation.service'
import { gasStationValidation } from './gasStation.validation'

export const gasStationRouter = router({
  ...genericCrudRouterController('gasStation', gasStationValidation),

  // -------------------------------------

  customRoute: publicProcedure.query(({ ctx: _ctx, input: _input }) => {
    return gasStationService.gasStationCustomService()
  }),
})
