const express = require('express');
const router = express.Router();
/**
 * @route /api/users/test
 */
const User = require('../../model/User');
router.get('/test', (req, res) => {
  res.send('hai');
});

/**
 * @route /api/users/adduser
 */
router.post('/adduser', (req, res) => {
  const newUser = new User({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    username: req.body.username,
    email: req.body.email,
    mobile: req.body.mobile,
    password: req.body.password
  });
  newUser.save().then(user => {
    res.status(200).json(user);
  });
});

/**
 * @route /api/users/getuser
 */

router.get('/getuser', (req, res) => {
  const username = req.query.username;
  User.findOne({ username }).then(user => {
    res.status(200).json(user);
  });
});

/**
 * @route /api/users/getalluser
 */

router.get('/getalluser', (req, res) => {
  User.find({}).then(user => {
    res.status(200).json(user);
  });
});

/**
 * @route /api/users/update
 */
router.put('/update', (req, res) => {
  const username = req.body.username;
  const mobile = req.body.mobile;

  User.updateOne({ username }, { $set: { mobile } }).then(result => {
    res.send('updated');
  });
});

/**
 * @route /api/users/delete
 */

router.delete('/delete', (req, res) => {
  const username = req.query.username;
  User.deleteOne({ username }).then(user => {
    res.status(200).json({ msg: 'deleted' });
  });
});

module.exports = router;
