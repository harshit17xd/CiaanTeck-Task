import express from 'express';
import Post from '../models/Post.js';
const router = express.Router();

// Create post
router.post('/', async (req, res) => {
  const { text, authorId } = req.body;
  const post = new Post({ text, author: authorId });
  await post.save();
  res.json(post);
});

// Get all posts with author info
router.get('/', async (req, res) => {
  const posts = await Post.find().populate('author', 'name email').sort({ createdAt: -1 });
  res.json(posts);
});

export default router;
