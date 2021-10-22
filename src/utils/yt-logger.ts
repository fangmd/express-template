import bunyan from 'bunyan'

const ytLogger = bunyan.createLogger({ name: 'express-app', src: true })

export default ytLogger
