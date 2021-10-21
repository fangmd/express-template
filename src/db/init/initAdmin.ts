/**
 * @description 初始化 tag
 * 运行脚本：export NODE_ENV=development && ts-node src/db/init/menu-init.ts
 */
import dotenv from 'dotenv'
// initialize configuration
dotenv.config()

import { dbInit } from '../mysql'

export async function initMenu() {
  // await MenuService.removeAll()
  // menu blog
  // await MenuService.addMenu(1, 0, 1, 'BlogManage', 'fa-circle-o', 'BlogManage')
}

async function initTag() {
  await dbInit()

  await initMenu()
}

initTag()
