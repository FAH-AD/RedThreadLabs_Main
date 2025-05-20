const path = require("path");

module.exports = {
  reactStrictMode: true,
  swcMinify: false ,
   output: 'export',
  sassOptions: {
    includePaths: [path.join(__dirname, "css")],
  },
 
  trailingSlash: true,
  devIndicators: {
    buildActivity: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
};
