const path = require('path');

module.exports = {
  entry: './src/index.ts',  // Entry point for TypeScript
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'fuze.js',
    library: 'Fuze',
    libraryTarget: 'umd', 
    clean: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,  // Use TypeScript loader for `.ts` and `.tsx` files
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  externals: {
    react: 'react',  // Exclude React from the bundle
    'react-dom': 'react-dom',  // Exclude React DOM from the bundle
  },
  devtool: 'source-map',
};