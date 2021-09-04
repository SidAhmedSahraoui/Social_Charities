const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth')
const Request = require('../models/Request');


//  @route       POST api/requests
//  @desc        Register a request
//  @access      Private
router.post(
  '/',auth,
  [
    check('email', 'Please include a valid email').isEmail(),
    check('category', 'Category is required').not().isEmpty(),
    check('offer', 'Offer is required').not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array());
    }

    const {name , email, category , offer } = req.body;

      request = new Request({ name , email , category , offer });
      

      await request.save();

      const payload = {
        request: {
          id: request.id,
        },
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        {
          expiresIn: 3600 * 1000,
        },
        (error, token) => {
          if (error) throw error;
          res.json({ token });
        }
      );
  }
);

//  @route       GET api/requests
//  @desc        Get admin requests
//  @access      Private
router.get('/', auth, async (req, res) => {
  try {
    const requests = await Request.find().sort({
      date: -1,
    });
    res.json(requests);
  } catch (error) {
    console.log(error.request);
    res.status(500).send('Server Error');
  }
});
module.exports = router;