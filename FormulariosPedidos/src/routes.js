
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('index')
})

// routes.js
router.get('/pedido', (req, res) => {
  res.render('pedido');
});

module.exports = router
