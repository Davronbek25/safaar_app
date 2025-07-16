import { Client, Account, Databases, Storage, Functions } from 'appwrite';

// Appwrite configuration
const client = new Client();

client
  .setEndpoint('https://fra.cloud.appwrite.io/v1') // Appwrite Endpoint
  .setProject('6874ee21003d72ba2c85'); // Appwrite project ID

// Initialize services
export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const functions = new Functions(client);

// Database and collection IDs
export const DATABASE_ID = 'safar-database';
export const COLLECTIONS = {
  USERS: 'users',
  CITIES: 'cities',
  GUIDES: 'guides',
  BOOKINGS: 'bookings',
  MESSAGES: 'messages',
  ACTIVITIES: 'activities',
};

export default client;
