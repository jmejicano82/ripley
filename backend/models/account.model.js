const sql = require("../db.js");

// constructor
const Account = function(account) {
  this.name = account.name;
};

Account.getAll = result => {
  sql.query("SELECT * FROM account_types", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("account_types: ", res);
    result(null, res);
  });
};

module.exports = Account;
