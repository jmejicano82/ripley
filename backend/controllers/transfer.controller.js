const Transfer = require("../models/transfer.model.js");


exports.create = (req, res) => {

  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "error empty!"
    });
  }

  const transfer = new Transfer({
    user_id: req.body.user_id,
    amount: req.body.amount,
    created_at: new Date(),
    updated_at: new Date()
  });

  Transfer.create(transfer, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "error creating the transfer."
      });
    else res.send(data);
  });
};


exports.findAll = (req, res) => {
    Transfer.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "error retrieving transfer."
        });
      else res.send(data);
    });
};
