class CustomBadRequestError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 400; // 400 Bad Request
    this.name = "CustomBadRequestError";
  }
}

module.exports = CustomBadRequestError;
