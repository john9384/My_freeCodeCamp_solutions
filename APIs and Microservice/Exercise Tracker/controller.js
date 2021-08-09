const models = require("./models");
const { User, Exercise } = models;

exports.postUser = async (req, res) => {
  try {
    const username = req.body.username;
    const userExist = await User.findOne({ username });
    if (userExist) return res.json({ error: "username not available" });

    const user = await new User({
      username,
    });
    user.save();

    return res.json(user);
  } catch (error) {
    return res.json({ error });
  }
};
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    const userObjs = users.map((user) => ({
      _id: user._id,
      username: user.username,
    }));
    return res.json(userObjs);
  } catch (error) {
    return res.json(error);
  }
};

exports.postExercise = async (req, res) => {
  try {
    const user = await User.findById(req.params._id);
    const newExercise = await new Exercise({
      user: req.params._id,
      description: req.body.description,
      duration: parseInt(req.body.duration),
      date: req.body.date,
    });

    if (newExercise.date === "") {
      newExercise.date = new Date().toISOString().substring(0, 10);
    }
    newExercise.save();

    // Add exercise to user log
    user.log.push(newExercise._id);
    user.save();

    const exersiceObj = {
      _id: user.id,
      username: user.username,
      date: new Date(newExercise.date).toDateString(),
      description: newExercise.description,
      duration: newExercise.duration,
    };

    return res.json(exersiceObj);
  } catch (error) {
    return res.json(error);
  }
};
exports.getLog = async (req, res) => {
  try {
    const qlimit = req.query.limit;
    const qfrom = req.query.from;
    const qto = req.query.to;

    const user = await User.findById(req.params._id).populate("log");
    let log = [];
    if (qlimit) {
      log = user.log.slice(0, qlimit);
    }
    if (qfrom || qto) {
      let fromDate = new Date(0);
      let toDate = new Date();

      if (qfrom) fromDate = new Date(qfrom);
      if (qto) toDate = new Date(qto);

      let fromToTime = fromDate.getTime();
      let toToTime = toDate.getTime();

      log = user.log.filter((exercise) => {
        const exerciseDateToTime = new Date(exercise.date).getTime();
        return (
          exerciseDateToTime >= fromToTime && exerciseDateToTime <= toToTime
        );
      });
    }
    if (!qlimit && !qfrom && !qto) log = user.log;

    const responseObj = {
      _id: user._id,
      username: user.username,
      log: log,
      count: user.log.length,
    };

    return res.json(responseObj);
  } catch (error) {
    return res.json(error);
  }
};

exports.getCount = async (req, res) => {};
