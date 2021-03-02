exports.handleError = (res, code, message, err) => {
    console.log(message, err)
    return res.status(parseInt(code, 10)).json({
      status: 'failed',
      message
    })
  }

  exports.handleSuccess = (res, code, message, data) => {
    return res.status(parseInt(code, 10)).json({
      status: 'success',
      message,
      data
    })
  }