# booking-management-system
Booking app for reserving meeting rooms with JWT authentication and real-time updates.
Booking Management System — Full Stack (Node.js + Express + React + TypeScript)

A full-stack mini Booking Management System that allows authenticated users to reserve meeting rooms.
Includes user authentication, room availability calculations, booking conflict detection, and full frontend dashboard.

This project simulates real-world SaaS features including backend APIs, frontend UI, and real-time updates.

Tech Stack
Backend

Node.js

Express.js

TypeScript

JWT Authentication

MongoDB + Mongoose

Frontend

React + TypeScript

React Router

Styled Components / Tailwind (choose your styling)

Axios (API calls)

Features
Authentication

Register new user

Login using email + password

JWT-based authentication

Role system: user | admin

Rooms

Admin can create new rooms

Rooms have: name, capacity

Booking System
Users can:

Create bookings

View own bookings

Reschedule bookings

Cancel bookings

Booking rules:

Cannot book overlapping times
Cannot book in the past
startTime must be < endTime

If conflict exists, backend returns:

{
  "conflict": true,
  "message": "Room is already booked during this time",
  "conflictingBookings": []
}

Availability Calculation

Endpoint:

GET /rooms/availability?date=YYYY-MM-DD


Returns:

{
  "roomId": "...",
  "roomName": "...",
  "availableSlots": [
    { "start": "09:00", "end": "10:00" }
  ]
}

Frontend Pages
Page	Description
Login	User login (JWT)
Register	User sign-up
Rooms	List rooms
Room Availability	Display available timeslots for selected date
Create Booking	Form to create booking
My Bookings	User’s bookings + cancel/reschedule
Admin (optional)	Manage rooms & view all bookings
How to Run the Project
Backend Setup
Install packages
cd backend
npm install

Create .env
PORT=5000
MONGO_URI=your_mongodb_url_here
JWT_SECRET=your_secret_key

Start backend
npm run dev


Backend runs at:

http://localhost:5000

Frontend Setup
Install packages
cd frontend
npm install

Start frontend
npm start


Frontend runs at:

http://localhost:5173/

Booking Conflict Logic

When a user books a room

Backend checks if any existing booking overlaps with new one

An overlap exists if:

newStart < existingEnd  AND  
newEnd > existingStart


If overlap: return conflict error

Otherwise: create booking

Authentication Flow

User registers → backend saves hashed password

User logs in → backend validates password

Backend generates JWT

Frontend stores token (React Query or state)

Each request sends:

Authorization: Bearer <token>


Backend middleware verifies token & assigns req.user

Project Structure
Backend
/controllers
/services
/routes
/middlewares
/models

Frontend
/src
  /features/auth
  /features/bookings
  /components
  /hooks
  /api
  /types

Status

Backend completed
Frontend: All main pages completed
Optional: Admin dashboard + real-time WebSocket
Optional: UI polishing

Conclusion

This project demonstrates:

Full-stack engineering

Real booking conflict logic

Authentication with JWT

TypeScript discipline

Clean architecture

Practical SaaS-style features