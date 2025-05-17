
const express = require('express');
const router = express.Router();

router.get('/legal', (req, res) => {
  res.json({ message: 'Legal AI ready to serve!' });
});

module.exports = router;
