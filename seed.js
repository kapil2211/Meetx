require('dotenv').config(); // Load .env variables
const mongoose = require('mongoose');
const Activity = require('./models/Activity'); // adjust path if needed

const activities = [
  {
    title: "Cricket Match",
    description: "Local league semi-finals",
    location: "Mumbai Stadium",
    date: new Date("2025-06-01T18:00:00Z")
  },
  {
    title: "Movie Night",
    description: "Latest blockbuster screening",
    location: "PVR Cinemas",
    date: new Date("2025-06-02T20:00:00Z")
  },
  {
    title: "Football Match",
    description: "International friendly",
    location: "Delhi Ground",
    date: new Date("2025-06-03T19:00:00Z")
  },
  {
    title: "Stand-up Comedy",
    description: "Live comedy night",
    location: "Bangalore Club",
    date: new Date("2025-06-04T21:00:00Z")
  },
  {
    title: "Tech Meetup",
    description: "Discuss latest in web development",
    location: "Hyderabad Tech Park",
    date: new Date("2025-06-05T17:00:00Z")
  },
  {
    title: "Art Exhibition",
    description: "Modern art gallery showing",
    location: "Kolkata Museum",
    date: new Date("2025-06-06T15:00:00Z")
  },
  {
    title: "Book Reading",
    description: "Author Q&A and reading session",
    location: "Chennai Library",
    date: new Date("2025-06-07T14:00:00Z")
  },
  {
    title: "Live Music Concert",
    description: "Popular band performing live",
    location: "Goa Beach Arena",
    date: new Date("2025-06-08T20:30:00Z")
  },
  {
    title: "Yoga Workshop",
    description: "Wellness and meditation session",
    location: "Pune Retreat Center",
    date: new Date("2025-06-09T08:00:00Z")
  },
  {
    title: "Startup Pitch Event",
    description: "Entrepreneurs pitch to investors",
    location: "Ahmedabad Startup Hub",
    date: new Date("2025-06-10T10:00:00Z")
  }
];

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(async () => {
  console.log("✅ Connected to MongoDB");
  await Activity.deleteMany(); // optional: clear old data
  await Activity.insertMany(activities);
  console.log("✅ Seeded 10 activities");
  mongoose.disconnect();
})
.catch((err) => {
  console.error("❌ MongoDB connection failed:", err.message);
});
