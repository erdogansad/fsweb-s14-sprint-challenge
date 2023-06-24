const db = require("../../data/dbConfig.js");

const getAll = async () => {
  let data = await db
    .select("ts.*", "pr.project_name", "pr.project_description")
    .from("tasks as ts")
    .leftJoin("projects as pr", "ts.project_id", "pr.project_id");
  return data.map((dt) => ({
    ...dt,
    task_completed: Boolean(dt.task_completed),
  }));
};

const create = async (data) => {
  let id = await db("tasks").insert(data);
  return { id: id[0], ...data, task_notes: data.task_notes || null, task_completed: Boolean(data.task_completed) };
};

module.exports = { getAll, create };
