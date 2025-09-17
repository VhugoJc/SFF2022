// MongoDB initialization script
// This script creates a user for the application database

db = db.getSiblingDB(process.env.MONGO_DB_NAME || 'sff_db');

db.createUser({
  user: process.env.MONGO_APP_USER || 'sff_user',
  pwd: process.env.MONGO_APP_PASSWORD || 'sff_password',
  roles: [
    {
      role: 'readWrite',
      db: process.env.MONGO_DB_NAME || 'sff_db'
    }
  ]
});

// Create collections if needed
db.createCollection('users');
db.createCollection('products');
db.createCollection('sales');
db.createCollection('presales');
db.createCollection('teams');
db.createCollection('settings');

print('Database and user created successfully');
