const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');
const { wrapWithReanimatedMetroConfig } = require('react-native-reanimated/metro-config');

let config = getDefaultConfig(__dirname);

// Wrap with reanimated
config = wrapWithReanimatedMetroConfig(config);

// Then wrap with NativeWind
module.exports = withNativeWind(config, { input: './app/global.css' });