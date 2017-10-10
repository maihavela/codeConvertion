var router = require('express').Router();
const convertionsController = require ('../controllers/convertionsController');

//http://localhost:8080/api/convertions/toMorse/:hola
router.get('/toMorse/:txt', function(req, res) {
  console.log('req' + req);
  convertionsController.toMorse(req, res);
});

router.get('/toText/:txt', function(req, res) {
  convertionsController.toText(req, res)
});

module.exports = router;