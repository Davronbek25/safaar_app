import { account } from './appwrite';
import { ID, OAuthProvider } from 'appwrite';

export interface User {
  $id: string;
  name: string;
  email: string;
  avatar?: string;
}

class AuthService {
  // Create an account
  async createAccount(email: string, password: string, name: string): Promise<User> {
    try {
      const newAccount = await account.create(ID.unique(), email, password, name);
      if (newAccount) {
        return this.login(email, password);
      } else {
        throw new Error('Failed to create account');
      }
    } catch (error) {
      console.error('Create account error:', error);
      throw error;
    }
  }

  // Login
  async login(email: string, password: string): Promise<User> {
    try {
      await account.createEmailPasswordSession(email, password);
      return this.getCurrentUser();
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  }

  // Get current user
  async getCurrentUser(): Promise<User> {
    try {
      const user = await account.get();
      return {
        $id: user.$id,
        name: user.name,
        email: user.email,
        avatar: user.prefs?.avatar,
      };
    } catch (error) {
      console.error('Get current user error:', error);
      throw error;
    }
  }

  // Logout
  async logout(): Promise<void> {
    try {
      await account.deleteSession('current');
    } catch (error) {
      console.error('Logout error:', error);
      throw error;
    }
  }

  // OAuth login with Google
  async loginWithGoogle(): Promise<void> {
    try {
      await account.createOAuth2Session(
          OAuthProvider.Google,
        'safaarapp://auth/success',
        'safaarapp://auth/failure'
      );
    } catch (error) {
      console.error('Google login error:', error);
      throw error;
    }
  }

  // OAuth login with Apple
  async loginWithApple(): Promise<void> {
    try {
      await account.createOAuth2Session(
          OAuthProvider.Apple,
        'safaarapp://auth/success',
        'safaarapp://auth/failure'
      );
    } catch (error) {
      console.error('Apple login error:', error);
      throw error;
    }
  }

  // Check if a user is logged in
  async isLoggedIn(): Promise<boolean> {
    try {
      await this.getCurrentUser();
      return true;
    } catch {
      return false;
    }
  }
}

export default new AuthService();
