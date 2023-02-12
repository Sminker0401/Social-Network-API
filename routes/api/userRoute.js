const router = require('express').Router();

const {
  getAllUsers,
  getOneUser,
  updateUser,
  deleteUser,
  createUser
  // addFriend,
  // deleteFriend
} = require("../../controllers/userController")

router.route('/').get(getAllUsers).post(createUser);

router
  .route('/:userId')
  .get(getOneUser)
  .put(updateUser)
  .delete(deleteUser);

// router.route('/:userID/friends/:friendId')
// .post(addFriend)
// .delete(deleteFriend);

module.exports = router;