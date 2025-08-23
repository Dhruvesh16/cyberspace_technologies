# CyberSpace Technologies

A modern full-stack web application built with React, TypeScript, and Express.js showcasing services in data engineering, analytics, cloud services, and cybersecurity.

## Prerequisites

- Node.js (version 20 or higher)
- npm or yarn

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   Create a `.env` file in the root directory with your database configuration and other environment variables.

3. **Database setup (if using):**
   ```bash
   npm run db:push
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```
   
   The application will be available at `http://localhost:5000`

5. **Build for production:**
   ```bash
   npm run build
   ```

6. **Start production server:**
   ```bash
   npm start
   ```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run check` - Run TypeScript type checking
- `npm run db:push` - Push database schema changes

## Tech Stack

### Frontend
- React 18 with TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- shadcn/ui components
- React Query for state management
- Wouter for routing
- React Hook Form with Zod validation

### Backend
- Express.js with TypeScript
- Drizzle ORM for database operations
- WebSocket support
- Session management with Passport.js

## Project Structure

```
├── client/          # React frontend
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── pages/       # Page components
│   │   ├── hooks/       # Custom React hooks
│   │   └── lib/         # Utility functions
├── server/          # Express backend
├── shared/          # Shared types and schemas
└── dist/            # Build output
```
