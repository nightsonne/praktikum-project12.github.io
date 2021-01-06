const router = require('express').Router();
const fs = require('fs').promises;
const path = require('path');

router.get('/cards', (req, res) => {
  fs.readFile((path.join(__dirname, '..', 'data', 'cards.json')), 'utf-8')
    .then((data) => {
      res.status(200).json(JSON.parse(data));
    })

    .catch((error) => {
      res.status(500).json({ message: 'Ошибка при чтении файла' });
    });
});

module.exports = router;
