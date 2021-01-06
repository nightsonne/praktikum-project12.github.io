const router = require('express').Router();
const fs = require('fs').promises;
const path = require('path');

router.get('/users', (req, res) => {
  fs.readFile((path.join(__dirname, '..', 'data', 'users.json')), 'utf-8')
    .then((data) => {
      res.status(200).json(JSON.parse(data));
    })

    .catch((error) => {
      res.status(500).json({ message: 'Ошибка при чтении файла' });
    });
});

router.get('/users/:id', (req, res) => {
  fs.readFile((path.join(__dirname, '..', 'data', 'users.json')), 'utf-8')
    .then((data) => {
      const userId = (JSON.parse(data)).find((item) => item._id === req.params.id);
      if (userId) {
        res.status(200).json(userId);
      } else {
        res.status(404).json({ message: 'Нет пользователя с таким id' });
      }
    })

    .catch((e) => {
      res.status(500).json({ message: 'Ошибка при чтении файла' });
    });
});

module.exports = router;
