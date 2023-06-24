const bodyController = (req, res, next) => {
  if (req.body.resource_name !== undefined) {
    next();
  } else {
    next({ status: 400, message: "bad request" });
  }
};

module.exports = {
  bodyController,
};
