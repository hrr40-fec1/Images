const path = require('path');

module.exports = {
  entry: './client/app.jsx',
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          {loader: "style-loader"},
          {loader: "css-loader"}
        ],
    },
    {
        test: /\.(png|jpg|gif)$/i,
        use: [
            {
                loader: 'url-loader',
                options: {
                    limit: 8192
                }
            }
        ]
    },
    {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
                outputPath: 'fonts/'
            }
        }]
    },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'app.bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
