import FontAwesome from '@expo/vector-icons/FontAwesome';
import {DarkTheme, DefaultTheme, ThemeProvider} from '@react-navigation/native';
import {useFonts} from 'expo-font';
import {Stack} from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import './global.css';

import {useColorScheme} from '@/components/useColorScheme';
import {AuthProvider} from '@/contexts/AuthContext';

export {
    // Catch any errors thrown by the Layout component.
    ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
    // Ensure that reloading on `/modal` keeps a back button present.
    initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [loaded, error] = useFonts({
        SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
        ...FontAwesome.font,
    });

    // Expo Router uses Error Boundaries to catch errors in the navigation tree.
    useEffect(() => {
        if (error) throw error;
    }, [error]);

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            {/* <AuthProvider> */}
                <RootLayoutNav/>
            {/* </AuthProvider> */}
        </GestureHandlerRootView>
    );
}

function RootLayoutNav() {
    const colorScheme = useColorScheme();

    return (
        <SafeAreaView style={{flex: 1}}>
            <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
                <Stack>
                    <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
                    <Stack.Screen name="auth/login" options={{headerShown: false}}/>
                    <Stack.Screen name="city/[id]" options={{headerShown: false}}/>
                    <Stack.Screen name="guide/[id]" options={{headerShown: false}}/>
                    <Stack.Screen name="booking/[id]" options={{headerShown: false}}/>
                    <Stack.Screen name="chat/[id]" options={{headerShown: false}}/>
                    <Stack.Screen name="dashboard/[id]" options={{headerShown: false}}/>
                    <Stack.Screen name="activity/[id]" options={{headerShown: false}}/>
                    <Stack.Screen name="sign/[id]" options={{headerShown: false}}/>
                    <Stack.Screen name="modal" options={{presentation: 'modal'}}/>
                </Stack>
            </ThemeProvider>
        </SafeAreaView>
    );
}

