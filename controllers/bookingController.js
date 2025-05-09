const Booking = require("../models/Booking");

exports.bookActivity = async (req, res) => {
    const { activityId } = req.body;
    const userId = req.user.id;
    try {
        const booking = new Booking({ user: userId, activity: activityId });
        await booking.save();
        res.status(201).json({ msg: "Activity booked" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getMyBookings = async (req, res) => {
    const bookings = await Booking.find({ user: req.user.id }).populate("activity");
    res.json(bookings);
};
