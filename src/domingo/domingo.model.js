const  mongoose = require("mongoose");

const RemovedDOMSchema = new mongoose.Schema({
  location : {type : String},
  selector : String,
  createdAt : { type: Date, default: Date.now }
});

const RemovedDOM = mongoose.model('RemovedDOM', RemovedDOMSchema);

module.exports = RemovedDOM;
