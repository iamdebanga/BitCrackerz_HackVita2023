const express = require("express");
const app = express();
const port = 3100;
const bodyparser = require("body-parser");
const Razorpay = require("razorpay");
app.use(require("body-parser").json());
var instance = new Razorpay({
    key_id: 'rzp_test_6rjSk72wukuLPH',
    key_secret: 'Xzr5q29rtgHOaDGRbJkLuRvy'
});

app.get("/", (req, res) => {
    res.sendFile("pay.html", {root: __dirname});
});

app.post("/create/orderId", (req, res) => {
    console.log("Create orderId request", req.body);
    var options = {
        amount: req.body.amount,
        currency: "INR",
        receipt: "r1"
    };
    instance.orders.create(options, function(err, order){
        console.log(order);
        res.send({orderId : order.id});
    });
    
});

   

app.listen(port, () => {
    console.log('Server is running on port ' + port);
});
