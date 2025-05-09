require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const app = express();

connectDB();
app.use(express.json());

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/activities", require("./routes/activityRoutes"));
app.use("/api/bookings", require("./routes/bookingRoutes"));
app.get('/', (req, res) => {
    res.send('Welcome to the Meetx API!');
  });
  
app.listen(process.env.PORT, () =>
    console.log(`Server running on port ${process.env.PORT}`)
);
