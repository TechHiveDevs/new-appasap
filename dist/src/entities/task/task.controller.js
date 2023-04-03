"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskRouter = void 0;
const trpc_helper_1 = require("../../helpers/server/trpc/trpc.helper");
const generic_crud_controller_1 = require("../../helpers/generic-crud/generic-crud.controller");
const task_service_1 = require("./task.service");
const task_validation_1 = require("./task.validation");
exports.taskRouter = (0, trpc_helper_1.router)({
    ...(0, generic_crud_controller_1.genericCrudRouterController)('task', task_validation_1.taskValidation),
    // -------------------------------------
    customRoute: trpc_helper_1.publicProcedure.query(({ ctx: _ctx, input: _input }) => {
        return task_service_1.taskService.taskCustomService();
    }),
});
