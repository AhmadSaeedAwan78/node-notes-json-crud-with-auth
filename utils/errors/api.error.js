export class ApiError extends Error {
  errorCode;
  statusCode;
  data;

  constructor(message, errorCode, statusCode, data ) {
    super(message);
    this.errorCode = errorCode;
    this.statusCode = statusCode;
    this.data = data;
    this.name = 'ApiError';
  }

}
