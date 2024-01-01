const CustomAPIError = require('../errors/custom-error')
const { StatusCodes } = require('http-status-codes')

const errorHandlerMiddleware = (err, req, res, next) => {

  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }

  return res
    .status(500)
    .send('Bir şeyler yanlış gitti, daha sonra tekrar deneyin');
}

module.exports = errorHandlerMiddleware
