// Add reaction to thought by ID
app.post('/api/thoughts/:id/reactions', async (req, res) => {
    try {
      const thought = await Thought.findById(req.params.id);
      if (!thought) {
        return res.status(404).json({ error: 'Thought not found' });
      }
      thought.reactions.push(req.body);
      await thought.save();
      res.status(201).json(thought);
    } catch (error) {
      res.status(400).json({ error: 'Bad request' });
    }
  });
  
  // Delete reaction from thought by ID and reaction ID
  app.delete('/api/thoughts/:thoughtId/reactions/:reactionId', async (req, res) => {
    try {
      const thought = await Thought.findById(req.params.thoughtId);
      if (!thought) {
        return res.status(404).json({ error: 'Thought not found' });
      }
      thought.reactions.pull({ _id: req.params.reactionId });
      await thought.save();
      res.json(thought);
    } catch (error) {
      res.status(400).json({ error: 'Bad request' });
    }
  });
