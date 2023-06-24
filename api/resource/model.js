const db = require("../../data/dbConfig.js");

const getAll = () => {
  return db("resources");
};

const create = async (data) => {
  let id = await db("resources").insert(data);
  return { id: id[0], ...data };
};

module.exports = { getAll, create };
