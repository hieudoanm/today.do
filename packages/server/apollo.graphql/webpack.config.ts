import path from 'node:path';
import nodeExternals from 'webpack-node-externals'; // optional, install if used

const isProduction: boolean = process.env.NODE_ENV === 'production';
const mode: string = isProduction ? 'production' : 'development';

export default {
  mode,
  target: 'node',
  entry: './src/server.ts',
  output: { path: path.resolve(__dirname, 'dist'), filename: 'server.js' },
  externals: [nodeExternals()],
  plugins: [
    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: 'ts-loader',
        exclude: ['/node_modules/'],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset',
      },
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: '@graphql-tools/webpack-loader',
      },
      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '...'],
  },
  devServer: {
    static: path.join(__dirname, 'dist'),
    liveReload: true,
    compress: true,
    port: 5555,
  },
};
