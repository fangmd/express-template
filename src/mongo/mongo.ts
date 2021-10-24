/**
 * @description 数据库配置，初始化
 */

import { createConnection } from 'typeorm'
import Config from '../config'
import { isDEV } from '../utils/env'

export const mongoInit = async () => {
  const connection = await createConnection({
    type: 'mongodb', // 数据库类型
    host: Config.mongodb.host, // 数据库地址
    port: parseInt(Config.mongodb.port), // 数据库端口号
    username: Config.mongodb.userName, // 数据库用户名
    password: Config.mongodb.password, // 密码
    database: Config.mongodb.dbName, // 数据库名
    entities: [`${__dirname}/model/**/*.ts`, `${__dirname}/model/**/*.js`],
    synchronize: false,
    logging: isDEV,
    // migrationsTableName: 'user_table',
    // migrations: [`${__dirname}/migration/*{.js,.ts}`],
    // cli: {
    //   migrationsDir: `${__dirname}/migration`,
    // },
  })
  // run all migrations
  // await connection.runMigrations()

  console.log(`mongo 数据库连接结果 ${connection}`)
  return connection
}
