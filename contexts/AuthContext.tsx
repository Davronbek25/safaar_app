import React, { createContext, useContext, useEffect, useState } from 'react';
import AuthService, { User } from '@/lib/auth';
import { useRouter } from 'expo-router';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string) => Promise<void>;
  logout: () => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  loginWithApple: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter()

  useEffect(() => {
    // checkAuthState();
  }, []);

  const checkAuthState = async () => {
    try {
      console.log('Checking authentication state...');
      const isLoggedIn = await AuthService.isLoggedIn();
      if (isLoggedIn) {
        const currentUser = await AuthService.getCurrentUser();
        setUser(currentUser);
      } else {
        console.log('No active session. Redirecting to login...');
        setUser(null);
        router.push('/auth/login')
        // Redirect to login page if needed
        // Example: router.push('/auth/login');
      }
    } catch (error) {
      console.error('Error in checkAuthState:', error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const loggedInUser = await AuthService.login(email, password);
      setUser(loggedInUser);
    } catch (error) {
      throw error;
    }
  };

  const register = async (email: string, password: string, name: string) => {
    try {
      const newUser = await AuthService.createAccount(email, password, name);
      setUser(newUser);
    } catch (error) {
      throw error;
    }
  };

  const logout = async () => {
    try {
      await AuthService.logout();
      setUser(null);
    } catch (error) {
      throw error;
    }
  };

  const loginWithGoogle = async () => {
    try {
      await AuthService.loginWithGoogle();
      // Note: OAuth flow will redirect, so we don't set user here
    } catch (error) {
      throw error;
    }
  };

  const loginWithApple = async () => {
    try {
      await AuthService.loginWithApple();
      // Note: OAuth flow will redirect, so we don't set user here
    } catch (error) {
      throw error;
    }
  };

  const value: AuthContextType = {
    user,
    loading,
    login,
    register,
    logout,
    loginWithGoogle,
    loginWithApple,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

