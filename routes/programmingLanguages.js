const express = require('express');
const router = express.Router();
const programmingLanguages = require('../connection/programmingLanguages');

/* GET programming languages. */
router.get('/', async function(req, res, next) {
  try {
    const data = await programmingLanguages.getMultiple(req.query.page);
    res.json(data);
  } catch (err) {
    console.error(`Error while getting programming languages `, err.message);
    next(err);
  }
});


module.exports = router;