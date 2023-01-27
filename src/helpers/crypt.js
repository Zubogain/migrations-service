const bcrypt = require("bcrypt");

async function encryptStr(str = "") {
  return await bcrypt.hash(str, 10);
}

async function compareStr(str = "", encryptedStr = "") {
  return await bcrypt.compare(str, encryptedStr);
}

module.exports = { encryptStr, compareStr };
