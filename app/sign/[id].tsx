import { StyleSheet, View, Text, Image, ImageBackground } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function SignInScreen() {
  const { id } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      {/* Placeholder Image */}
      <ImageBackground
        source={require('@/assets/images/signIn.png')} // Path to your image
        style={styles.imageBackground} // Apply styles to define dimensions
        resizeMode="contain" // Optional: Adjust how the image is resized
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    margin: 0,
    padding: 0,
  },
  imageBackground: {
    flex: 1, // Ensures the image covers the entire container
    width: '100%', // Makes the image span the full width
    height: '100%', // Makes the image span the full height
  }
});

