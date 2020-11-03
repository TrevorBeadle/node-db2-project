const knex = require("knex");
const knexFile = require("../knexfile");
const db = knex(knexFile.development);

module.exports = {
  get,
  getByID,
  insert,
};

function get() {
  return db.select("*").from("cars");
}

function getByID(id) {
  return db("cars").where("id", id).first();
}

function insert(data) {
  return db
    .insert(data)
    .into("cars")
    .then(ids => {
      return getByID(ids[0]);
    });
}
