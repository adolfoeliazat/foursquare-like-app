module.exports = {
  TOKEN_SECRET : process.env.TOKEN_SECRET || 'k6m1e9k2y3i8rd4i10t4l3z7m9r6m1',
  MONGO_URI    : process.env.MONGO_URI    || 'mongodb://root:h9Y3q1Tm0X7i5e@ds055792.mongolab.com:55792/foursquare-like',

  // OAuth 2.0
  GOOGLE_SECRET    : process.env.GOOGLE_SECRET    || 'apz2BkdT1Wo0mZm3JYofwH04',
  INSTAGRAM_SECRET : process.env.INSTAGRAM_SECRET || '05cb628ea1954b86b174f2497cfe7eab',
  FACEBOOK_SECRET  : process.env.FACEBOOK_SECRET  || '0a5fb8a1b3ea2e6cd2280ed4028d817b',

  // OAuth 1.0
  TWITTER_KEY    : process.env.TWITTER_KEY || '87RSzCFl40diEsbGnomYAAisN',
  TWITTER_SECRET : process.env.TWITTER_SECRET || 'QvsKEvsSZmg1NNKxah2Pch5RFJSABDdrgyWldj5msP4Iq0i3OY'
};
