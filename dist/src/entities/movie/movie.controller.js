"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.movieRouter = void 0;
const trpc_helper_1 = require("../../helpers/server/trpc/trpc.helper");
const generic_crud_controller_1 = require("../../helpers/generic-crud/generic-crud.controller");
const movie_service_1 = require("./movie.service");
const movie_validation_1 = require("./movie.validation");
exports.movieRouter = (0, trpc_helper_1.router)({
    ...(0, generic_crud_controller_1.genericCrudRouterController)('movie', movie_validation_1.movieValidation),
    // -------------------------------------
    customRoute: trpc_helper_1.publicProcedure.query(({ ctx: _ctx, input: _input }) => {
        return movie_service_1.movieService.movieCustomService();
    }),
});
