const router = require('express').Router();

const {
  getAllUsers,
  getOneUser,
  createUser,
  deleteUser,
} = require("../../controllers/usersController")

router.route('/').get(getAllUsers).post(createUser);

router
  .route('/:userId')
  .get(getOneUser)
  .put(createUser)
  .delete(deleteUser);

router.route('/:userID/friends/:friendId')
.post(addFriend)
.delete(deleteFriend);

module.exports = router;