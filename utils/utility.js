export function sendSuccess(res, message = '', code = 200, data = []) {
  const response =  {
    message: message,
    data: data
  }
  return res.status(code).send(response)
}

export function sendError(res, message = '', errors = [], code = 500) {
  const response =  {
    message: message,
    errors: errors
  }
  return res.status(code).send(response)
}


