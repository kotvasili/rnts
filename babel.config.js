module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          src: './src',
          assets: './src/assets',
          screens: './src/screens',
          interfaces: './src/interfaces',
          styles: './src/styles',
          components: './src/components',
          navigators: './src/navigators',
        },
      },
    ],
  ],
};
