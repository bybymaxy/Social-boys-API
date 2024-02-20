// Add friend to user by ID
app.post('/api/users/:userId/friends/:friendId', async (req, res) => {
    try {
      const user = await User.findById(req.params.userId);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      user.friends.push(req.params.friendId);
      await user.save();
      res.json(user);
    } catch (error) {
      res.status(400).json({ error: 'Bad request' });
    }
  });
  
  // Remove friend from user by ID
  app.delete('/api/users/:userId/friends/:friendId', async (req, res) => {
    try {
      const user = await User.findById(req.params.userId);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      user.friends.pull(req.params.friendId);
      await user.save();
      res.json(user);
    } catch (error) {
      res.status(400).json({ error: 'Bad request' });
    }
  });

