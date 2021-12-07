const logger = require('./logger')

  if (error.name === 'CastError' && error.kind === 'ObjectId') {
    return res.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return res.status(400).json({ error: error.message })
  } else {
    return res.json({ error: error.message })
  }

  next(error)

module.exports = { unknownEndpoint, errorHandler }
