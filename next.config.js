module.exports = {
  module: {
    rules: [
      {
        test: /\.(jpg|jpeg|png|gif|webp|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'static/media/[name].[hash].[ext]',
            },
          },
        ],
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
},
};
