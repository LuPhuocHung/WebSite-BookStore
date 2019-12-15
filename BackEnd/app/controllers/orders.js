const Order = require('../models/order');
module.exports = {
    // Get Orders 
    getOrder : (req, res, next) => {
        Order.find()
        .exec()
        .then(docs => {
            if (docs.length >= 0) {
                res.status(200).json(docs);
            } else {
                res.status(404).json({
                    message: "No Entries Found"
                });
            }
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
     },

   

    // Delete Order
    deleteOrder: (req, res, next) => {
        Order.remove({_id: req.params.orderId})
        .exec()
        .then(result => {
            res.status(200).json({
                message: "Order deleted"
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
    },

    // Get order by orderID
    getOrderID: (req, res, next) => {
        Order.findById(req.params.orderId)
        .populate('book')
        .exec()
        .then(order => {
            if(!order)
            {
                return res.status(404).json({
                    message: "Order not found"
                });
            }
            res.status(200).json(order);
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
    }
}