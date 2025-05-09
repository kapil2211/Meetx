# Meetx

🧪 How to Use Postman Collection
# Import the Collection
Open Postman

Click on Collections in the sidebar.

Click "Import" → Paste the Postman link or upload the .json file if provided.

# Set Up Environment (Optional but Recommended)
If you're using environment variables in your collection:
(Variable are PORT, MONGO_URI, JWT_SECRET)

Create a new Postman environment

Set base_url = https://your-app-name.onrender.com

Save and select this environment in the top-right dropdown.

# Authentication Flow
Register a user using the POST /api/auth/register endpoint.

Then log in with POST /api/auth/login.

Copy the returned JWT token.

Set it in the Authorization tab as a Bearer Token for protected routes like:

POST /api/bookings

GET /api/bookings/me
