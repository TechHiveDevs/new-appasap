"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.courseRouter = void 0;
const trpc_helper_1 = require("../../helpers/server/trpc/trpc.helper");
const generic_crud_controller_1 = require("../../helpers/generic-crud/generic-crud.controller");
const course_service_1 = require("./course.service");
const course_validation_1 = require("./course.validation");
exports.courseRouter = (0, trpc_helper_1.router)({
    ...(0, generic_crud_controller_1.genericCrudRouterController)('course', course_validation_1.courseValidation),
    // -------------------------------------
    customRoute: trpc_helper_1.publicProcedure.query(({ ctx: _ctx, input: _input }) => {
        return course_service_1.courseService.courseCustomService();
    }),
});
