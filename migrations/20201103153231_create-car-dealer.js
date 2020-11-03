exports.up = function (knex) {
  return knex.schema.createTable("cars", tbl => {
    tbl.increments();
    tbl.text("VIN", 128).unique().notNullable();
    tbl.text("make", 128).notNullable();
    tbl.text("model", 128).notNullable();
    tbl.integer("milage").notNullable();
    tbl.text("transmission_type", 128);
    tbl.text("title_status", 128);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("cars");
};
