const sql = require("../db.js");

// constructor
const Transfer = function(transfer) {
    this.user_id    = transfer.user_id;
    this.amount     = transfer.amount;
    this.created_at = transfer.created_at;
    this.updated_at = transfer.updated_at;
};

Transfer.getAll = result => {

    const select = "select destiny_users.*, transfers.amount, date_format(transfers.created_at, '%d-%m-%Y %H:%i:%s') as fecha, account_types.name as tipo_cuenta " +
                    "from transfers " +
                    "inner join destiny_users on destiny_users.id = transfers.user_id " +
                    "inner join account_types on account_types.id = destiny_users.account_type_id";

    sql.query(select, (err, res) => {
        if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
        }

        console.log("transfers: ", res);
        result(null, res);
    });
};

Transfer.create = (newTransfer, result) => {
    sql.query("INSERT INTO transfers SET ?", newTransfer, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("created transfers: ", { id: res.insertId, ...newTransfer });
      result(null, { id: res.insertId, ...newTransfer });
    });
  };

module.exports = Transfer;