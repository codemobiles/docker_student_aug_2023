return (module.exports = config =
  {
    mongo: {
      uri: process.env.MONGO_URL || "mongodb://127.0.0.1:27018/react-app",
      options: [],
    },
    port: process.env.port || "8080",
  });
