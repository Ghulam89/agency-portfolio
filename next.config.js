module.exports = {
  reactStrictMode: true,
  webpack(config, { isServer }) {
    // Modify the Webpack config here
    config.module.rules.push({
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
    });
    
    return config;
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};
