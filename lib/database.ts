import { databases, DATABASE_ID, COLLECTIONS } from './appwrite';
import { ID, Query } from 'appwrite';

export interface City {
  $id: string;
  name: string;
  country: string;
  image: string;
  description?: string;
}

export interface Guide {
  $id: string;
  name: string;
  email: string;
  city: string;
  rating: number;
  price: number;
  currency: string;
  image: string;
  description: string;
  languages: string[];
  services: string[];
  userId: string;
}

export interface Booking {
  $id: string;
  guideId: string;
  userId: string;
  startDate: string;
  endDate: string;
  guests: number;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  totalPrice: number;
  currency: string;
  services: string[];
  notes?: string;
}

export interface Message {
  $id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: string;
  read: boolean;
}

export interface Activity {
  $id: string;
  userId: string;
  type: 'follow' | 'like' | 'comment' | 'save' | 'tour' | 'booking';
  targetId: string;
  targetType: 'user' | 'post' | 'guide' | 'booking';
  content?: string;
  timestamp: string;
  read: boolean;
}

class DatabaseService {
  // Cities
  async getCities(): Promise<City[]> {
    try {
      const response = await databases.listDocuments(DATABASE_ID, COLLECTIONS.CITIES);
      // Ensure documents have the required City properties before casting
      return response.documents.map(doc => {
        // Verify the document has all required City properties
        if (typeof doc.name !== 'string' || 
            typeof doc.country !== 'string' || 
            typeof doc.image !== 'string') {
          throw new Error(`Document is missing required City properties: ${JSON.stringify(doc)}`);
        }
        return {
          $id: doc.$id,
          name: doc.name,
          country: doc.country,
          image: doc.image,
          description: doc.description
        } as City;
      });
    } catch (error) {
      console.error('Get cities error:', error);
      throw error;
    }
  }

  async createCity(city: Omit<City, '$id'>): Promise<City> {
    try {
      const response = await databases.createDocument(
        DATABASE_ID,
        COLLECTIONS.CITIES,
        ID.unique(),
        city
      );

      // Verify the response has all required City properties
      if (!response.$id || !response.name || !response.country || !response.image) {
        throw new Error(`Response is missing required City properties: ${JSON.stringify(response)}`);
      }

      // Construct a proper City object
      return {
        $id: response.$id,
        name: response.name,
        country: response.country,
        image: response.image,
        description: response.description
      } as City;
    } catch (error) {
      console.error('Create city error:', error);
      throw error;
    }
  }

  // Guides
  async getGuides(cityId?: string): Promise<Guide[]> {
    try {
      const queries = cityId ? [Query.equal('city', cityId)] : [];
      const response = await databases.listDocuments(
        DATABASE_ID,
        COLLECTIONS.GUIDES,
        queries
      );
      // Ensure documents have the required Guide properties before casting
      return response.documents.map(doc => {
        // Verify the document has all required Guide properties
        if (!doc.$id || !doc.name || !doc.email || !doc.city || 
            typeof doc.rating !== 'number' || typeof doc.price !== 'number' || 
            !doc.currency || !doc.image || !doc.description || 
            !Array.isArray(doc.languages) || !Array.isArray(doc.services) || 
            !doc.userId) {
          throw new Error(`Document is missing required Guide properties: ${JSON.stringify(doc)}`);
        }
        return {
          $id: doc.$id,
          name: doc.name,
          email: doc.email,
          city: doc.city,
          rating: doc.rating,
          price: doc.price,
          currency: doc.currency,
          image: doc.image,
          description: doc.description,
          languages: doc.languages,
          services: doc.services,
          userId: doc.userId
        } as Guide;
      });
    } catch (error) {
      console.error('Get guides error:', error);
      throw error;
    }
  }

  async getGuide(guideId: string): Promise<Guide> {
    try {
      const response = await databases.getDocument(
        DATABASE_ID,
        COLLECTIONS.GUIDES,
        guideId
      );

      // Verify the document has all required Guide properties
      if (!response.$id || !response.name || !response.email || !response.city || 
          typeof response.rating !== 'number' || typeof response.price !== 'number' || 
          !response.currency || !response.image || !response.description || 
          !Array.isArray(response.languages) || !Array.isArray(response.services) || 
          !response.userId) {
        throw new Error(`Document is missing required Guide properties: ${JSON.stringify(response)}`);
      }

      // Construct a proper Guide object
      return {
        $id: response.$id,
        name: response.name,
        email: response.email,
        city: response.city,
        rating: response.rating,
        price: response.price,
        currency: response.currency,
        image: response.image,
        description: response.description,
        languages: response.languages,
        services: response.services,
        userId: response.userId
      } as Guide;
    } catch (error) {
      console.error('Get guide error:', error);
      throw error;
    }
  }

  async createGuide(guide: Omit<Guide, '$id'>): Promise<Guide> {
    try {
      const response = await databases.createDocument(
        DATABASE_ID,
        COLLECTIONS.GUIDES,
        ID.unique(),
        guide
      );

      // Verify the response has all required Guide properties
      if (!response.$id || !response.name || !response.email || !response.city || 
          typeof response.rating !== 'number' || typeof response.price !== 'number' || 
          !response.currency || !response.image || !response.description || 
          !Array.isArray(response.languages) || !Array.isArray(response.services) || 
          !response.userId) {
        throw new Error(`Response is missing required Guide properties: ${JSON.stringify(response)}`);
      }

      // Construct a proper Guide object
      return {
        $id: response.$id,
        name: response.name,
        email: response.email,
        city: response.city,
        rating: response.rating,
        price: response.price,
        currency: response.currency,
        image: response.image,
        description: response.description,
        languages: response.languages,
        services: response.services,
        userId: response.userId
      } as Guide;
    } catch (error) {
      console.error('Create guide error:', error);
      throw error;
    }
  }

  // Bookings
  async getUserBookings(userId: string): Promise<Booking[]> {
    try {
      const response = await databases.listDocuments(
        DATABASE_ID,
        COLLECTIONS.BOOKINGS,
        [Query.equal('userId', userId)]
      );

      // Ensure documents have the required Booking properties before casting
      return response.documents.map(doc => {
        // Verify the document has all required Booking properties
        if (!doc.$id || !doc.guideId || !doc.userId || 
            !doc.startDate || !doc.endDate || 
            typeof doc.guests !== 'number' || 
            !doc.status || typeof doc.totalPrice !== 'number' || 
            !doc.currency || !Array.isArray(doc.services)) {
          throw new Error(`Document is missing required Booking properties: ${JSON.stringify(doc)}`);
        }

        return {
          $id: doc.$id,
          guideId: doc.guideId,
          userId: doc.userId,
          startDate: doc.startDate,
          endDate: doc.endDate,
          guests: doc.guests,
          status: doc.status,
          totalPrice: doc.totalPrice,
          currency: doc.currency,
          services: doc.services,
          notes: doc.notes
        } as Booking;
      });
    } catch (error) {
      console.error('Get user bookings error:', error);
      throw error;
    }
  }

  async createBooking(booking: Omit<Booking, '$id'>): Promise<Booking> {
    try {
      const response = await databases.createDocument(
        DATABASE_ID,
        COLLECTIONS.BOOKINGS,
        ID.unique(),
        booking
      );

      // Verify the response has all required Booking properties
      if (!response.$id || !response.guideId || !response.userId || 
          !response.startDate || !response.endDate || 
          typeof response.guests !== 'number' || 
          !response.status || typeof response.totalPrice !== 'number' || 
          !response.currency || !Array.isArray(response.services)) {
        throw new Error(`Response is missing required Booking properties: ${JSON.stringify(response)}`);
      }

      // Construct a proper Booking object
      return {
        $id: response.$id,
        guideId: response.guideId,
        userId: response.userId,
        startDate: response.startDate,
        endDate: response.endDate,
        guests: response.guests,
        status: response.status,
        totalPrice: response.totalPrice,
        currency: response.currency,
        services: response.services,
        notes: response.notes
      } as Booking;
    } catch (error) {
      console.error('Create booking error:', error);
      throw error;
    }
  }

  async updateBooking(bookingId: string, updates: Partial<Booking>): Promise<Booking> {
    try {
      const response = await databases.updateDocument(
        DATABASE_ID,
        COLLECTIONS.BOOKINGS,
        bookingId,
        updates
      );

      // Verify the response has all required Booking properties
      if (!response.$id || !response.guideId || !response.userId || 
          !response.startDate || !response.endDate || 
          typeof response.guests !== 'number' || 
          !response.status || typeof response.totalPrice !== 'number' || 
          !response.currency || !Array.isArray(response.services)) {
        throw new Error(`Response is missing required Booking properties: ${JSON.stringify(response)}`);
      }

      // Construct a proper Booking object
      return {
        $id: response.$id,
        guideId: response.guideId,
        userId: response.userId,
        startDate: response.startDate,
        endDate: response.endDate,
        guests: response.guests,
        status: response.status,
        totalPrice: response.totalPrice,
        currency: response.currency,
        services: response.services,
        notes: response.notes
      } as Booking;
    } catch (error) {
      console.error('Update booking error:', error);
      throw error;
    }
  }

  // Messages
  async getMessages(userId: string, otherUserId: string): Promise<Message[]> {
    try {
      const response = await databases.listDocuments(
        DATABASE_ID,
        COLLECTIONS.MESSAGES,
        [
          Query.or([
            Query.and([
              Query.equal('senderId', userId),
              Query.equal('receiverId', otherUserId)
            ]),
            Query.and([
              Query.equal('senderId', otherUserId),
              Query.equal('receiverId', userId)
            ])
          ])
        ]
      );

      // Ensure documents have the required Message properties before casting
      return response.documents.map(doc => {
        // Verify the document has all required Message properties
        if (!doc.$id || !doc.senderId || !doc.receiverId || 
            !doc.content || !doc.timestamp || 
            typeof doc.read !== 'boolean') {
          throw new Error(`Document is missing required Message properties: ${JSON.stringify(doc)}`);
        }

        return {
          $id: doc.$id,
          senderId: doc.senderId,
          receiverId: doc.receiverId,
          content: doc.content,
          timestamp: doc.timestamp,
          read: doc.read
        } as Message;
      });
    } catch (error) {
      console.error('Get messages error:', error);
      throw error;
    }
  }

  async sendMessage(message: Omit<Message, '$id'>): Promise<Message> {
    try {
      const response = await databases.createDocument(
        DATABASE_ID,
        COLLECTIONS.MESSAGES,
        ID.unique(),
        message
      );

      // Verify the response has all required Message properties
      if (!response.$id || !response.senderId || !response.receiverId || 
          !response.content || !response.timestamp || 
          typeof response.read !== 'boolean') {
        throw new Error(`Response is missing required Message properties: ${JSON.stringify(response)}`);
      }

      // Construct a proper Message object
      return {
        $id: response.$id,
        senderId: response.senderId,
        receiverId: response.receiverId,
        content: response.content,
        timestamp: response.timestamp,
        read: response.read
      } as Message;
    } catch (error) {
      console.error('Send message error:', error);
      throw error;
    }
  }

  // Activities
  async getUserActivities(userId: string): Promise<Activity[]> {
    try {
      const response = await databases.listDocuments(
        DATABASE_ID,
        COLLECTIONS.ACTIVITIES,
        [Query.equal('userId', userId), Query.orderDesc('timestamp')]
      );

      // Ensure documents have the required Activity properties before casting
      return response.documents.map(doc => {
        // Verify the document has all required Activity properties
        if (!doc.$id || !doc.userId || !doc.type || 
            !doc.targetId || !doc.targetType || 
            !doc.timestamp || typeof doc.read !== 'boolean') {
          throw new Error(`Document is missing required Activity properties: ${JSON.stringify(doc)}`);
        }

        return {
          $id: doc.$id,
          userId: doc.userId,
          type: doc.type,
          targetId: doc.targetId,
          targetType: doc.targetType,
          content: doc.content,
          timestamp: doc.timestamp,
          read: doc.read
        } as Activity;
      });
    } catch (error) {
      console.error('Get user activities error:', error);
      throw error;
    }
  }

  async createActivity(activity: Omit<Activity, '$id'>): Promise<Activity> {
    try {
      const response = await databases.createDocument(
        DATABASE_ID,
        COLLECTIONS.ACTIVITIES,
        ID.unique(),
        activity
      );

      // Verify the response has all required Activity properties
      if (!response.$id || !response.userId || !response.type || 
          !response.targetId || !response.targetType || 
          !response.timestamp || typeof response.read !== 'boolean') {
        throw new Error(`Response is missing required Activity properties: ${JSON.stringify(response)}`);
      }

      // Construct a proper Activity object
      return {
        $id: response.$id,
        userId: response.userId,
        type: response.type,
        targetId: response.targetId,
        targetType: response.targetType,
        content: response.content,
        timestamp: response.timestamp,
        read: response.read
      } as Activity;
    } catch (error) {
      console.error('Create activity error:', error);
      throw error;
    }
  }
}

export default new DatabaseService();
