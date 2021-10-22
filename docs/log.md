
# PM2

使用 pm2-logrotate 切割日志

# bunyan

使用 bunyan 作为日志输出库

## 日志格式规范

字段约定:

```
{
	"name": "express-app",
	"hostname": "fangmingdongs-MacBook-Pro.local",
	"pid": 71708,
	"level": 30,
	"msg": "1212",
	"time": "2021-10-21T06:36:08.428Z",
	"v": 0,
    "src": {
		"file": "/Users/double/projects/express-template/src/app.ts",
		"line": 24
	},
	"scope": "visit",
}
```

1. name: string。服务名
2. hostname: string。主机名
3. pid: integer。进程号
4. level: integer。日志级别对应的数字。 "debug" (20)，info:30, warn:40，"fatal" (60)，"error" (50)
5. msg: string。日志主体信息
6. time: string。UTC 格式的日期
7. v: integer。bunyan 的日志版本号
8. src: 日志打印位置
9. scope: 日志类型：desc, stat, visit, biz

## scope = visit

visit: 每个 http 请求相关的日志，会包含惟一的 requestId，定位该请求相关的所有日志

```
"scope": "visit",
"req_id": "some-uuid-for-request",
"uid": "",
"event": "client-req"
```

1. req_id: 本次请求的惟一 ID，串联本次请求的所有相关日志
2. uid: 本次请求的用户 ID
3. event: 事件类型：在 visit 的日志类型下，还会细分不同的事件，比如 client-req、client-res、 普通 trace、请求后端 service-start, service-end, service-err 等。
   - client-req: client 请求到达 node 层，统一由框架打日志，开发 不 关心
   - service-start: node 对某个后端服务发起请求，由通用请求库负责打日志，开发 不 关心
   - service-end: node 请求某个后端服务结束，由通用请求库负责打日志，开发 不 关心
   - service-err: node 请求后端服务异常，由通用请求库负责打日志，开发 不 关心。调用后端服务异常，日志级别为 WARN，不是 ERROR
   - trace: node 中业务层打的日志，如果异常，能帮助定位本次请求相关问题
   - client-res: 结束 client 的请求，打印本次请求的 http code，本次请求处理时间等，由框架统一打，开发 不 关心
