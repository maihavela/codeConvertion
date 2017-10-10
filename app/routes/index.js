var router = require('express').Router();
var convertions = require('./convertions');

router.use('/convertions', convertions);

//http://localhost:8080/api/convertions
router.get('/convertions', function (req, res) {
    res.send({ message: 'Convertions' });
});

module.exports = router; 