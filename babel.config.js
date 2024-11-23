module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    // Other plugins you might have
    [
      'react-native-reanimated/plugin',
      {
        // Disable strict mode here
        enableDebugging: true,
      },
    ],
  ],
};
