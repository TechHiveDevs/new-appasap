"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testRouter = void 0;
const trpc_helper_1 = require("../../helpers/server/trpc/trpc.helper");
const generic_crud_controller_1 = require("../../helpers/generic-crud/generic-crud.controller");
const test_service_1 = require("./test.service");
const test_validation_1 = require("./test.validation");
exports.testRouter = (0, trpc_helper_1.router)({
    ...(0, generic_crud_controller_1.genericCrudRouterController)('test', test_validation_1.testValidation),
    // -------------------------------------
    customRoute: trpc_helper_1.publicProcedure.query(({ ctx: _ctx, input: _input }) => {
        return test_service_1.testService.testCustomService();
    }),
});
