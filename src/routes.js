import * as errors from "throw.js";
import { Router } from 'express';

const routes = Router();

/**
 * GET home page
 */
routes.get('/', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ a: 1 }, null, 3));
});

/**
 * GET /list
 */
routes.get('/list', (req, res, next) => {
    next(new errors.NotFound());
});

export default routes;
