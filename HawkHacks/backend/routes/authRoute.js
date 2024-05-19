const express = require('express');
const router = express.Router();
const cors = require('cors')
const { test, authController } = require('../controllers/authController');


router.use(
    cors({
        credentials: true,
        origin: 'https://localhost:5173'
    })
)

router.get('/', test)
// Signup route
router.post('/register', authController.signup);

// Login route
router.post('/login', authController.login);

module.exports = router;
