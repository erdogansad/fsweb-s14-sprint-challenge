const { getById } = require("../project/model");

const bodyController = async (req, res, next) => {
  try {
    if (req.body.project_id !== undefined) {
      let data = await getById(req.body.project_id);
      if (data) {
        next();
      } else {
        next({ status: 400, message: "bad request" });
      }
    } else {
      next({ status: 400, message: "bad request" });
    }
  } catch (e) {
    next(e);
  }
};

module.exports = {
  bodyController,
};
