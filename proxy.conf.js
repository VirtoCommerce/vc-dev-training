require('dotenv').config();

const target = process.env.PROXY_TARGET;

module.exports = {
  "/graphql": {
    target: target,
    secure: true,
    changeOrigin: true,
    logLevel: "debug"
  }
};
