const { Thought, User } = require('../models');

module.exports = {
 
  getAllThoughts(req, res) {
    Thought.find()
      .then(async (thought) => {
        const thoughtObj = {
         thought,
        }
        return res.json(thoughtObj);
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  
  getOneThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .select('-__v')
      .then(async (thought) =>
        !thought
          ? res.status(404).json({ message: 'ID not found' })
          : res.json({
              thought,
            })
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
 
  addThoughts(req, res) {
    Thought.create({ _id: req.params.thoughtId })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'Thought invaild' })
          : User.findOneAndUpdate(
              { thought: req.params.thoughtId },
              { $pull: { students: req.params.thoughtId } },
              { new: true }
            )
      )
      .then((user) =>
        !user
          ? res.status(404).json({
              message: 'User not found',
            })
          : res.json({ message: 'Added thought successfully' })
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  
  deleteThoughts(req, res) {
    Thought.findOneAndRemove({ _id: req.params.thoughtId })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'Thought not found' })
          : thought.findOneAndUpdate(
              { thoughts: req.params.thoughtId },
              { $pull: { thoughts: req.params.thoughtId } },
              { new: true }
            )
      )
      .then((thought) =>
        !thought
          ? res.status(404).json({
              message: 'thought deleted, but not found',
            })
          : res.json({ message: 'Deleted successfully' })
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  createReaction(req, res) {
    reaction.create({ _id: req.params.reactionId })
      .then((reaction) =>
        !reaction
          ? res.status(404).json({ message: 'Thought invaild' })
          : User.findOneAndUpdate(
              { reaction: req.params.reactionId },
              { $pull: { students: req.params.reactionId } },
              { new: true }
            )
      )
      .then((user) =>
        !user
          ? res.status(404).json({
              message: 'User not found',
            })
          : res.json({ message: 'Added thought successfully' })
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  
  deleteReaction(req, res) {
    reaction.findOneAndRemove({ _id: req.params.reactionId })
      .then((reaction) =>
        !reaction
          ? res.status(404).json({ message: 'Reaction not found' })
          : reaction.findOneAndUpdate(
              { reaction: req.params.reactionId },
              { $pull: { reaction: req.params.reactionId } },
              { new: true }
            )
      )
      .then((reaction) =>
        !reaction
          ? res.status(404).json({
              message: 'Reaction deleted, but not found',
            })
          : res.json({ message: 'Deleted successfully' })
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  }
}