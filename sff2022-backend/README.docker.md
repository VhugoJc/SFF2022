# MongoDB Docker Setup

Simple MongoDB container setup for the SFF backend.

## Quick Start

1. **Setup credentials:**
   ```bash
   cp .env.mongo.example .env
   # Edit .env with your passwords
   ```

2. **Start MongoDB:**
   ```bash
   npm run mongo:up
   # Or directly: docker compose up -d mongodb
   ```

3. **Update your backend .env:**
   ```bash
   DB=mongodb://sff_user:your_app_password@localhost:27017/sff_db
   ```

4. **Start your backend:**
   ```bash
   npm run dev
   ```

## Commands

- `npm run mongo:up` - Start MongoDB
- `npm run mongo:down` - Stop MongoDB  
- `npm run mongo:logs` - View logs
- `npm run mongo:shell` - MongoDB shell

## Environment Variables

Required in `.env`:
```bash
MONGO_ROOT_USER=admin
MONGO_ROOT_PASSWORD=your_admin_password
MONGO_DB_NAME=sff_db
MONGO_APP_USER=sff_user
MONGO_APP_PASSWORD=your_app_password
```

## Database Access

**MongoDB Compass:** `mongodb://sff_user:your_app_password@localhost:27017/sff_db`

**Reset database:**
```bash
npm run mongo:down
docker volume rm sff2022-backend_mongodb_data
npm run mongo:up
```
