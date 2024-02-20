// Update thought by ID
app.put('/api/thoughts/:id', async (req, res) => {
    try {
      const updatedThought = await Thought.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(updatedThought);
    } catch (error) {
      res.status(400).json({ error: 'Bad request' });
    }
  });
  


  // Create thought
app.post('/api/thoughts', async (req, res) => {
    try {
      const thought = new Thought(req.body);
      await thought.save();
      res.status(201).json(thought);
    } catch (error) {
      res.status(400).json({ error: 'Bad request' });
    }
  });

