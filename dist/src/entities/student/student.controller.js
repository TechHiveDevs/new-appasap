"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentRouter = void 0;
const trpc_helper_1 = require("../../helpers/server/trpc/trpc.helper");
const generic_crud_controller_1 = require("../../helpers/generic-crud/generic-crud.controller");
const student_service_1 = require("./student.service");
const student_validation_1 = require("./student.validation");
exports.studentRouter = (0, trpc_helper_1.router)({
    ...(0, generic_crud_controller_1.genericCrudRouterController)('student', student_validation_1.studentValidation),
    // -------------------------------------
    customRoute: trpc_helper_1.publicProcedure.query(({ ctx: _ctx, input: _input }) => {
        return student_service_1.studentService.studentCustomService();
    }),
});
