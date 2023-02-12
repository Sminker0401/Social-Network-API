const { ObjectId } = require('mongoose');
const { User, Thought } = require('../models');

module.exports = {
  // Get all users
  getAllUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
 
  getOneUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select('-__v')
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'ID not valid' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
 
  createUser(req, res) {
    console.log(req.body)
    User.create(req.body)
      .then((User) => res.json(User))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'ID not found' })
          : Thought.deleteMany({ _id: { $in: thought.userId } })
      )
      .then(() => res.json({ message: 'Deleted successfully' }))
      .catch((err) => res.status(500).json(err));
  },

  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'User not valid' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

//   addFriend(req, res) {
//     console.log(req.body)
//     friend.create(req.body)
//       .then((friend) => res.json(friend))
//       .catch((err) => {
//         console.log(err);
//         return res.status(500).json(err);
//       });
//   },

//   deleteFriend(req, res) {
//     friend.findOneAndDelete({ _id: req.params.friendId })
//       .then((friend) =>
//         !friend
//           ? res.status(404).json({ message: 'ID not found' })
//           : friend.deleteMany({ _id: { $in: friend.friendId } })
//       )
//       .then(() => res.json({ message: 'Deleted successfully' }))
//       .catch((err) => res.status(500).json(err));
//   },
};
