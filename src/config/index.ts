export default {
  mysql: {
    host: process.env.DATABASE_HOST || '0.0.0.0',
    port: process.env.DATABASE_PORT || '3306',
    userName: process.env.DATABASE_USER || 'root',
    password: process.env.DATABASE_PASSWORD || 'root',
    dbName: process.env.DATABASE_DB_NAME || 'koa',
  },
  mongodb: {
    host: process.env.MONGODB_URL || '0.0.0.0',
    port: process.env.MONGODB_PORT || '3306',
    userName: process.env.MONGODB_USER || 'root',
    password: process.env.MONGODB_PWD || 'root',
    dbName: process.env.MONGODB_DBBASE || 'koa',
  },
}
