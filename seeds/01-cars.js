exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("cars").insert([
        {
          VIN: "asdf1234",
          make: "Toyota",
          model: "Tacoma",
          milage: 123456,
          title_status: "clean",
        },
        {
          VIN: "asdf7890",
          make: "Toyota",
          model: "Tundra",
          milage: 123478,
          title_status: "damaged",
        },
      ]);
    });
};
