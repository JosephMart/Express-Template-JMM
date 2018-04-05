import express from 'express';
import * as errors from "throw.js";
import logger from 'morgan';
import bodyParser from 'body-parser';

import routes from './routes';
import { getStatusCode } from './utils';

const app = express();
app.disable('x-powered-by');

app.use(logger('dev', {
  skip: () => app.get('env') === 'test'
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use('/api/', routes);

// Catch 404 and forward to error handler
app.use((req, res, next) => {
    next(new errors.NotFound());
});

// Error handler
app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
    if (req.app.get('env') !== 'development' &&
        req.app.get('env') !== 'test') {

        delete err.stack;
    }

    res.status(getStatusCode(err)).json({
        message: err.message,
        error: err
    });
});

export default app;