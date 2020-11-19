const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack');

const Page = db.define('page', {
  title: Sequelize.STRING,
  slug: Sequelize.STRING,
  content: Sequelize.TEXT,
  status: Sequelize.BOOLEAN
});

const User = db.define('user', {
  name: Sequelize.STRING,
  email: Sequelize.STRING
});

const syncDatabase = async () => {
  await Page.sync();
  await User.sync();
}

syncDatabase();

module.exports = {
  db
}
