module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  env: {
    NEXT_PUBLIC_STRAPI_API_URL: 'http://localhost:1337',
  },
};
