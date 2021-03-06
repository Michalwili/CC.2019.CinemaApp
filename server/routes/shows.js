const { Show } = require('../db/models/show');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  console.log('Looking for available shows...');
  const result = await Show.find()
    .populate('movie')
    .sort('startDate');
  res.send(result);
});

router.get('/plan/:showDate', async (req, res) => {
  console.log(`Check what we cast on ${req.params.showDate}...`);
  let date = new Date(req.params.showDate).toISOString();
  console.log(`First date: ${date}`);

  const result = await Show.find({ startDate: { $gte: date } }).populate('movie');
  res.send(result);
});

module.exports = router;
