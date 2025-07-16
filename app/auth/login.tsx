import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput,
  StyleSheet, 
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Button from '@/components/ui/Button';

export default function LoginScreen() {
  const [email, setEmail] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.logo}>GID.UZ</Text>
        
        <View style={styles.form}>
          <Text style={styles.title}>Create an account</Text>
          <Text style={styles.subtitle}>Enter your email to sign up for this app</Text>
          
          <TextInput
            style={styles.input}
            placeholder="email@domain.com"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          
          <Button
            title="Continue"
            onPress={() => {}}
            style={styles.continueButton}
          />
          
          <Text style={styles.orText}>or</Text>
          
          <TouchableOpacity style={styles.socialButton}>
            <FontAwesome name="google" size={20} color="#4285F4" />
            <Text style={styles.socialButtonText}>Continue with Google</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.socialButton}>
            <FontAwesome name="apple" size={20} color="#000" />
            <Text style={styles.socialButtonText}>Continue with Apple</Text>
          </TouchableOpacity>
          
          <View style={styles.footer}>
            <Text style={styles.footerText}>
              By clicking continue, you agree to our{' '}
              <Text style={styles.link}>Terms of Service</Text>
              {' '}and{' '}
              <Text style={styles.link}>Privacy Policy</Text>
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  logo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 48,
  },
  form: {
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 32,
  },
  input: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 16,
    fontSize: 16,
    marginBottom: 16,
    backgroundColor: '#F9FAFB',
  },
  continueButton: {
    marginBottom: 24,
  },
  orText: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 24,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 12,
    paddingVertical: 16,
    marginBottom: 12,
    backgroundColor: '#F9FAFB',
  },
  socialButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
    marginLeft: 12,
  },
  footer: {
    marginTop: 32,
  },
  footerText: {
    fontSize: 12,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 18,
  },
  link: {
    color: '#3B82F6',
    textDecorationLine: 'underline',
  },
});

