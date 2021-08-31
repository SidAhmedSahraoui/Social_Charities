const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

const Request = require('../models/Request');


//  @route       POST api/users
//  @desc        Register a user
//  @access      Public
router.post(
  '/',
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
      

      await user.save();

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

 


module.exports = router;