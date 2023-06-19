class ErrorHandler {
  static handle(
    error,
    _req,
    res,
    _next,
  ) {
    const { status, message } = error;
    console.log(error);
    return res.status(status || 500).json({ message });
  }
}

module.exports = ErrorHandler;
