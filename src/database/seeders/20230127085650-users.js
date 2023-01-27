"use strict";

const { encryptStr } = require("../../helpers/crypt");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.bulkInsert("Users", [
        {
          email: "user@gmail.com",
          username: "User",
          password: await encryptStr("user@gmail.com"),
          role: "user",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          email: "moderator@gmail.com",
          username: "Moderator",
          password: await encryptStr("moderator@gmail.com"),
          role: "moderator",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "admin@gmail.com",
          username: "Admin",
          password: await encryptStr("admin@gmail.com"),
          role: "admin",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]),
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.bulkDelete("Users", [
        {
          email: "user@gmail.com",
        },
      ]),
      queryInterface.bulkDelete("Users", [
        {
          email: "moderator@gmail.com",
        },
      ]),
      queryInterface.bulkDelete("Users", [
        {
          email: "admin@gmail.com",
        },
      ]),
    ]);
  },
};
