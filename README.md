# SafarApp - Travel Guide Mobile App

A React Native mobile application built with Expo, TypeScript, and Appwrite for connecting travelers with local guides.

## Features

- **User Authentication**: Login/Register with email or OAuth (Google, Apple)
- **City Exploration**: Browse different cities and their attractions
- **Guide Discovery**: Find and book local guides
- **Real-time Chat**: Communicate with guides
- **Booking Management**: Track your bookings and activities
- **Activity Feed**: Stay updated with social interactions

## Tech Stack

- **Frontend**: React Native with Expo
- **Language**: TypeScript
- **Styling**: NativeWind (Tailwind CSS for React Native)
- **Backend**: Appwrite
- **Navigation**: Expo Router
- **State Management**: React Context

## Screenshots Reference

The app is designed based on the following screens:
1. Home screen with city selection and guide recommendations
2. Search/Map view for finding guides in specific cities
3. Booking flow with service selection and payment
4. Social feed with user activities and interactions
5. Activity notifications
6. Chat interface for guide communication
7. Dashboard with analytics
8. Authentication screens

## Project Structure

```
SafarApp/
├── app/                    # Expo Router pages
│   ├── (tabs)/            # Tab navigation screens
│   ├── auth/              # Authentication screens
│   ├── city/              # City detail screens
│   ├── guide/             # Guide detail screens
│   ├── booking/           # Booking screens
│   └── chat/              # Chat screens
├── components/            # Reusable UI components
│   └── ui/               # UI component library
├── contexts/             # React contexts
├── lib/                  # Utility libraries
│   ├── appwrite.ts       # Appwrite configuration
│   ├── auth.ts           # Authentication service
│   └── database.ts       # Database service
└── assets/               # Static assets
```

## Setup Instructions

### Prerequisites

- Node.js (v18 or later)
- npm or yarn
- Expo CLI
- Appwrite account (for backend services)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd SafarApp
   ```

2. **Install dependencies**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Configure Appwrite**
   - Create an Appwrite project at https://cloud.appwrite.io
   - Update the project ID in `lib/appwrite.ts`
   - Create the following collections in your Appwrite database:
     - `users` - User profiles
     - `cities` - Available cities
     - `guides` - Guide profiles
     - `bookings` - Booking records
     - `messages` - Chat messages
     - `activities` - User activities

4. **Run the application**
   ```bash
   # For web development
   npm run web

   # For iOS (requires macOS)
   npm run ios

   # For Android
   npm run android
   ```

## Development

### Available Scripts

- `npm run web` - Start web development server
- `npm run ios` - Start iOS development server
- `npm run android` - Start Android development server
- `npm run start` - Start Expo development server

### Environment Setup

The app uses Expo's managed workflow, which means you can develop and test on:
- Web browser (for quick development)
- Expo Go app on your phone
- iOS Simulator (macOS only)
- Android Emulator

## Backend Configuration

### Appwrite Collections Schema

This document outlines the detailed specifications for the Appwrite backend collections used in the SafarApp mobile application. Each section describes a specific collection, its attributes, data types, whether the attribute is required, and any relevant size or constraint details.

### 1. Users Collection

The `users` collection stores user profile information. This collection is primarily managed by Appwrite's built-in authentication system, but additional attributes can be added for extended user profiles.

| Attribute Name | Data Type | Required | Size/Constraints | Description |
|----------------|-----------|----------|------------------|-------------|
| `$id`          | String    | Yes      | Unique ID        | Appwrite's unique document ID for the user. |
| `name`         | String    | Yes      | Max 128 characters | The full name of the user. |
| `email`        | String    | Yes      | Max 256 characters | The user's email address, used for authentication. Must be unique. |
| `avatar`       | String    | No       | Max 512 characters | URL to the user's profile picture. |
| `location`     | String    | No       | Max 128 characters | The user's current location or preferred city. |


### 2. Cities Collection

The `cities` collection stores information about the various cities available for guide services within the application. This data is static or managed by administrators.

| Attribute Name | Data Type | Required | Size/Constraints | Description |
|----------------|-----------|----------|------------------|-------------|
| `$id`          | String    | Yes      | Unique ID        | Appwrite's unique document ID for the city. |
| `name`         | String    | Yes      | Max 128 characters | The name of the city. Must be unique. |
| `country`      | String    | Yes      | Max 128 characters | The country where the city is located. |
| `image`        | String    | Yes      | Max 512 characters | URL to an image representing the city. |
| `description`  | String    | No       | Max 1024 characters | A brief description or overview of the city. |


### 3. Guides Collection

The `guides` collection contains detailed profiles of the local guides available for booking. Each guide is associated with a user account.

| Attribute Name | Data Type | Required | Size/Constraints | Description |
|----------------|-----------|----------|------------------|-------------|
| `$id`          | String    | Yes      | Unique ID        | Appwrite's unique document ID for the guide. |
| `name`         | String    | Yes      | Max 128 characters | The full name of the guide. |
| `email`        | String    | Yes      | Max 256 characters | The guide's email address. |
| `city`         | String    | Yes      | Max 128 characters | The primary city where the guide operates. This should ideally be a reference to a `cities` document ID. |
| `rating`       | Float    | No       | Min 0.0, Max 5.0 | The average rating of the guide, calculated from reviews. |
| `price`        | Float    | Yes      | Min 0.0          | The guide's price per day or per service. |
| `currency`     | String    | Yes      | 3 characters (e.g., USD, EUR) | The currency code for the guide's pricing. |
| `image`        | String    | Yes      | Max 512 characters | URL to the guide's profile picture. |
| `description`  | String    | Yes      | Max 2048 characters | A detailed description of the guide's experience and offerings. |
| `languages`    | String Array | No       | Max 10 items, each max 64 chars | A list of languages the guide can speak. |
| `services`     | String Array | No       | Max 20 items, each max 128 chars | A list of specific services or tours offered by the guide. |
| `userId`       | String    | Yes      | Unique ID        | Reference to the `$id` of the associated user in the `users` collection. |


### 4. Bookings Collection

The `bookings` collection records all booking transactions made by users for guides. This collection tracks the status and details of each booking.

| Attribute Name | Data Type | Required | Size/Constraints | Description |
|----------------|-----------|----------|------------------|-------------|
| `$id`          | String    | Yes      | Unique ID        | Appwrite's unique document ID for the booking. |
| `guideId`      | String    | Yes      | Unique ID        | Reference to the `$id` of the booked guide in the `guides` collection. |
| `userId`       | String    | Yes      | Unique ID        | Reference to the `$id` of the user who made the booking in the `users` collection. |
| `startDate`    | Datetime  | Yes      | ISO 8601 format  | The start date and time of the booking. |
| `endDate`      | Datetime  | Yes      | ISO 8601 format  | The end date and time of the booking. |
| `guests`       | Integer   | Yes      | Min 1            | The number of guests included in the booking. |
| `status`       | String    | Yes      | Enum: `pending`, `confirmed`, `completed`, `cancelled` | The current status of the booking. |
| `totalPrice`   | Float     | Yes      | Min 0.0          | The total price of the booking. |
| `currency`     | String    | Yes      | 3 characters (e.g., USD, EUR) | The currency code for the total price. |
| `services`     | String Array | No       | Max 10 items, each max 128 chars | A list of specific services included in this booking. |
| `notes`        | String    | No       | Max 512 characters | Any additional notes or special requests for the booking. |


### 5. Messages Collection

The `messages` collection stores chat messages exchanged between users and guides. This enables real-time communication within the application.

| Attribute Name | Data Type | Required | Size/Constraints | Description |
|----------------|-----------|----------|------------------|-------------|
| `$id`          | String    | Yes      | Unique ID        | Appwrite's unique document ID for the message. |
| `senderId`     | String    | Yes      | Unique ID        | Reference to the `$id` of the user who sent the message. |
| `receiverId`   | String    | Yes      | Unique ID        | Reference to the `$id` of the user who received the message. |
| `content`      | String    | Yes      | Max 1024 characters | The actual text content of the message. |
| `timestamp`    | Datetime  | Yes      | ISO 8601 format  | The date and time when the message was sent. |
| `read`         | Boolean   | Yes      | `true` or `false` | Indicates whether the message has been read by the receiver. |


### 6. Activities Collection

The `activities` collection logs various user interactions and events within the application, forming an activity feed. This helps users stay updated on relevant actions.

| Attribute Name | Data Type | Required | Size/Constraints | Description |
|----------------|-----------|----------|------------------|-------------|
| `$id`          | String    | Yes      | Unique ID        | Appwrite's unique document ID for the activity. |
| `userId`       | String    | Yes      | Unique ID        | Reference to the `$id` of the user associated with this activity. |
| `type`         | String    | Yes      | Enum: `follow`, `like`, `comment`, `save`, `tour`, `booking` | The type of activity performed. |
| `targetId`     | String    | Yes      | Unique ID        | The ID of the object or entity targeted by the activity (e.g., ID of a post, guide, or user). |
| `targetType`   | String    | Yes      | Enum: `user`, `post`, `guide`, `booking` | The type of the target entity. |
| `content`      | String    | No       | Max 512 characters | Additional content related to the activity (e.g., comment text, tour name). |
| `timestamp`    | Datetime  | Yes      | ISO 8601 format  | The date and time when the activity occurred. |
| `read`         | Boolean   | Yes      | `true` or `false` | Indicates whether the activity has been viewed by the user. |


This comprehensive specification provides the necessary details for configuring your Appwrite backend to support the SafarApp's functionalities. Ensure that the permissions for each collection are set appropriately to allow read/write access for authenticated users as required by the application's logic.


## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support and questions, please contact the development team or create an issue in the repository.


## Git Repository Configuration Issue

If your code is being pushed to someone else's GitHub repository (https://github.com/Davronbek25/safaar_app.git) instead of your own, you need to update the Git remote URL.

### How to fix:

#### Option 1: Use the provided script (Recommended)

1. Run the `update_git_remote.bat` script in the project directory
2. Enter your GitHub username and repository name when prompted
3. The script will update the remote URL and verify the change

#### Option 2: Manual update

1. Open a terminal or command prompt in the project directory
2. Run the following command, replacing `YOUR_USERNAME` with your GitHub username and `YOUR_REPO` with your repository name:

```
git remote set-url origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
```

3. Verify the change with:

```
git remote -v
```

This should now show your GitHub repository URL instead of https://github.com/Davronbek25/safaar_app.git.
