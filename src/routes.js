import * as errors from "throw.js";
import { Router } from 'express';

const routes = Router();

/**
 * GET home page
 */
routes.get('/', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ a: 2 }, null, 3));
});

/**
 * GET /list
 */
routes.get('/list', (req, res, next) => {
    next(new errors.NotFound());
});

export default routes;
