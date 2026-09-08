# BusGo - Online Bus Ticket Booking System

Internship-quality local full-stack project using HTML/CSS/JavaScript, Node.js/Express and MySQL.

## Setup
1. Install Node.js and XAMPP.
2. Start MySQL from XAMPP.
3. Import `database/bus_booking.sql` into phpMyAdmin.
4. Open a terminal in `server` and run `npm install`.
5. Check `server/.env` for your MySQL credentials.
6. Run `npm start`.
7. Open http://localhost:5000

## Admin
Register an account from the website, then in phpMyAdmin run:
`UPDATE users SET role='admin' WHERE email='your-email@example.com';`

## Main flow
Register/Login -> Search bus -> Select seats -> Passenger details -> Confirm booking -> My Bookings.
