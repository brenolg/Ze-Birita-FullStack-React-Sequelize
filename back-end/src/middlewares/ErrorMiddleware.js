class ErrorHandler {
  static handle(
    error,
    _req,
    res,
    _next,
  ) {
    console.log('ERROR', error);
    const { status, message } = error;
    return res.status(status || 500).json({ message });
  }
}

module.exports = ErrorHandler;
