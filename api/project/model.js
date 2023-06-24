const db = require("../../data/dbConfig.js");

const getAll = async () => {
  let data = await db("projects");
  return data.map((dt) => ({
    ...dt,
    project_completed: Boolean(dt.project_completed),
  }));
};

const getById = (id) => {
  return db("projects").where({ project_id: id });
};

const create = async (data) => {
  let id = await db("projects").insert(data);
  return { id: id[0], ...data, project_completed: Boolean(data.project_completed) };
};

module.exports = { getAll, getById, create };
