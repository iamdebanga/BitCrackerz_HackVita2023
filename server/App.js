const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const paymentRoutes = require("../Routes/payment");
const app = express();

dotenv.config();

app.use.apply(express.json());
app.use(cors());

app.use("/api/payment/", paymentRoutes);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log('Listening on port $(port)...'));


