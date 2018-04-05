export const getStatusCode = (err) => (
    err.statusCode || err.errorCode || 500
)