const router = require('express').Router();
const creativeService = require('../services/creativeService'); 

function serviceHandler(promiseFn) {
  return async (req, res) => {
    try {
      const data = await promiseFn();
      res.json(data);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).send('Internal Server Error');
    }
  };
}

router.get('', serviceHandler(creativeService.getAllCreatives));
// Implement the remaining endpoints
// router.post('/', serviceHandler(creativeService.createCreative));
// router.get('/:id', serviceHandler(creativeService.getCreative));

module.exports = router;
