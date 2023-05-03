class ErrorHandler {
  static errorMiddleware(
    error,
    _req,
    res,
  ) {
    const { status, message } = error;
    return res.status(status || 500).json({ message });
  }
}

module.exports = ErrorHandler;