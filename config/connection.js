const { connect, connection } = require('mongoose');

// Add your Atlas connection string as a Config variable, node looks for this variable and will use it if it exists. Otherwise, it will assume that you are running this application locally
const connectionString =
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/socialmediaDB';

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;