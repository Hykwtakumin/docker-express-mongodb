const RemovedDOM = require("./domingo.model");

module.exports.check = async (req, res, next) => {
  const user = await RemovedDOM.findById(req.params.id);
  if (!user) {
    throw Error('RemovedDOM not found');
  }

  next();
};

module.exports.create = async (req, res) => {
  const user = new RemovedDOM(req.body);
  await user.save();

  res.json(user);
};

module.exports.remove = async (req, res) => {
  await RemovedDOM.findByIdAndRemove(req.params.id);

  res.json(req.params.id);
};

module.exports.list = async (req, res) => {
  const users = await RemovedDOM.find();

  res.json(users);
};

module.exports.update = async (req, res) => {
  const user = await RemovedDOM.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true
  }).exec();

  res.json(user);
};

module.exports.view = async (req, res) => {
  const user = await RemovedDOM.findById(req.params.id);

  res.json(user);
};

