const router = require('express').Router();

const {
    getAllThoughts,
    getOneThought,
    addThoughts,
    deleteThoughts,
    createReaction,
    deleteReaction
} = require('../controllers/thoughtController.js')

router.route('/').get(getAllThoughts).post(addThoughts);

router
    .route('/:thoughtId')
    .get(getOneThought)
    .put(addThoughts)
    .delete(deleteThoughts);
router.route('/:thoughtId/reaction')
.post(createReaction);
roiuter.route('/:thoughtId/reactions/:reactionId')
.delete(deleteReaction);

    module.exports = router;