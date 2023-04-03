"use strict";
/**
 * Generic Crud Helpers
 *
 * aims to parse input params to handle all of the following
 * pagination, sorting & filteration
 *
 * @author MarioMonir
 * */
Object.defineProperty(exports, "__esModule", { value: true });
exports.setGetListHeaders = exports.parseQuery = void 0;
// --------------------------------------------------
const parseFilter = (entity, filter = {}) => {
    const where = {};
    if (!entity)
        return;
    for (const [key, value] of Object.entries(filter)) {
        // add in for integers & contains for strings
        where[key] = { contains: value };
    }
    return where;
};
// --------------------------------------------------
// const parseSearhEngine = () => {}
// --------------------------------------------------
const parseSelectors = (selectedColumn) => {
    if (!(selectedColumn === null || selectedColumn === void 0 ? void 0 : selectedColumn.length))
        return undefined;
    let select = {};
    selectedColumn === null || selectedColumn === void 0 ? void 0 : selectedColumn.forEach((field) => {
        select[field] = true;
    });
    return select;
};
// --------------------------------------------------
const parseQuery = ({ path, select, pagination, sort, filter, }) => {
    let { page = 1, perPage = 10 } = pagination || {};
    let { field = '', order = 'ASC' } = sort || {};
    /** Regex get entity that between /entity. */
    const [_, entity] = path === null || path === void 0 ? void 0 : path.match(/\/(.*)\./);
    const where = parseFilter(entity, filter);
    page = (Number(page) || 1) - 1;
    select = parseSelectors(select);
    const orderBy = field ? [{ [field]: order === null || order === void 0 ? void 0 : order.toLowerCase() }] : [];
    const take = Number(perPage) || 10; /** SQL Limit */
    const skip = page * take; /** SQL Offset */
    return { where, skip, take, orderBy, select, q: '' };
};
exports.parseQuery = parseQuery;
// --------------------------------------------------
const setExposeHeaders = (res) => {
    const rawValue = res.getHeader('Access-Control-Expose-Headers') || '';
    if (typeof rawValue !== 'string')
        return;
    const headers = new Set(rawValue
        .split(',')
        .map((header) => header.trim())
        .filter((header) => Boolean(header)));
    headers.add('Content-Range');
    headers.add('X-Total-Count');
    res.header('Access-Control-Expose-Headers', [...headers].join(', '));
};
// --------------------------------------------------
const setGetListHeaders = ({ res, skip = 0, rowsCount, total }) => {
    setExposeHeaders(res);
    res.header('Content-Range', `${skip}-${skip + rowsCount}/${total}`);
    res.header('X-Total-Count', `${total}`);
};
exports.setGetListHeaders = setGetListHeaders;
