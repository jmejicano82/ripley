const sql = require("../db.js");

// constructor
const User = function(user) {
  this.name             = user.name;
  this.rut              = user.rut;
  this.email            = user.email;
  this.bank_id          = null;
  this.bank_name        = user.bank_name;
  this.number           = user.number;
  this.account_type_id  = user.account_type_id;
  this.account_number   = user.account_number;
  this.created_at       = user.created_at;
  this.updated_at       = user.updated_at;
};

User.getAll = result => {

  const select = "SELECT destiny_users.*, account_types.name as tipo_cuenta " +
                 "FROM destiny_users inner join account_types on account_types.id = destiny_users.account_type_id;";

  sql.query(select, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("destiny_users: ", res);
    result(null, res);
  });
};

User.create = (newUser, result) => {
  sql.query("INSERT INTO destiny_users SET ?", newUser, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created destiny_users: ", { id: res.insertId, ...newUser });
    result(null, { id: res.insertId, ...newUser });
  });
};

module.exports = User;