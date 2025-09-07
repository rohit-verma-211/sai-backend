"# sai-backend" 
🏅 SAI Sports Talent Assessment – Backend

This is the backend service for the Sports Authority of India (SAI) Talent Assessment Platform.
It handles athlete registration, authentication, video management, performance tracking, and leaderboard generation.
Future features will include coach dashboards, analytics, and admin tools for large-scale talent evaluation.

⚡ Tech Stack

Node.js + Express.js → Backend framework

MongoDB + Mongoose → Database & ORM

JWT (jsonwebtoken) → Authentication

bcryptjs → Password hashing

Nodemon → Dev server auto-restart

CORS & dotenv → Security + Config management

✅ Features (Completed)
1. Authentication

Athlete register & login with email/password.

Passwords securely stored using bcryptjs.

JWT tokens used for secure API access.

2. Video Management

Upload & store video metadata (title, URL, athlete ID).

Athletes can view their uploaded videos.

Supports linking to cloud storage (e.g., AWS S3, Cloudinary).

3. Performance Tracking

Athletes can add their performance scores (e.g., sprint time, vertical jump, sit-ups).

Retrieve all performances for logged-in athlete.

4. Leaderboard

Aggregates athletes’ total scores.

Returns a sorted leaderboard.

Useful for district/state/national level rankings.

🚧 Features (Planned / Upcoming)

Coach Dashboard → Coaches can view athlete progress and analytics.

Admin Dashboard → For SAI officials to verify and manage athletes.

AI Integration → On-device video analysis & cheat detection.

Gamification → Badges, challenges, and leaderboards by event/district.

Offline Sync → Upload key performance data first, full videos later.

📂 Project Structure
sai-backend/
│── models/          # Mongoose Schemas (Athlete, Video, Performance)
│── routes/          # Express routes (auth, video, performance, leaderboard)
│── middleware/      # JWT auth middleware
│── server.js        # Entry point
│── .env             # Environment variables
│── package.json

🔑 API Endpoints (Summary)
Feature	Method	Endpoint	Protected
Register	POST	/api/auth/register	❌
Login	POST	/api/auth/login	❌
Upload Video	POST	/api/video/upload	✅
Get My Videos	GET	/api/video	✅
Add Performance	POST	/api/performance/add	✅
Get My Perf.	GET	/api/performance	✅
Leaderboard	GET	/api/leaderboard	❌
🚀 Getting Started (Local Setup)

Clone repo:

git clone https://github.com/your-repo/sai-backend.git
cd sai-backend


Install dependencies:

npm install


Create a .env file:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000


Start dev server:

npm run dev

🎯 Impact

This backend helps in:

Democratizing sports talent assessment (reach remote athletes).

Automated, scalable system for storing and analyzing performances.

Building blocks for future dashboards & AI-based evaluation.