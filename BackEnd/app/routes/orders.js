// define dependence
const express = require('express');
const router = express.Router();
const orderController = require('./../controllers/orders');

// authentication
const checkauth = require('./../middleware/auth');
router.use((req, res, next) => {
    next();
});

router.get('/', orderController.getOrder);
router.get('/:orderId', orderController.getOrderID);
router.delete('/:orderId', orderController.deleteOrder);
module.exports = router;