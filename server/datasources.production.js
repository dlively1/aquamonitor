module.exports = {
  postgres_db: {
    connector: 'postgresql',
    name: 'postgres_db',
    url: process.env.DB_URL
  }
};
