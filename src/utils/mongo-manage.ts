import mongoose, { ConnectOptions } from 'mongoose'

if (process.env.NODE_ENV === 'development') {
  mongoose.set('debug', true)
}

function connectMongoDB(address: string) {
  try {
    mongoose.connect(address, {
      useNewUrlParser: true,
      bufferCommands: false,
      //   bufferMaxEntries: 0,
    //   autoReconnect: true,
      maxPoolSize: 10,
      minPoolSize: 5,
      auth: { username: `${process.env.MONGODB_USER}`, password: `${process.env.MONGODB_PWD}` },
    } as ConnectOptions)

    const db = mongoose.connection
    db.on('error', (error) => {
      console.log(`MongoDB connecting failed: ${error}`)
    })
    db.once('open', () => {
      console.log('MongoDB connecting succeeded')
    })
    return db
  } catch (error) {
    console.log(`MongoDB connecting failed: ${error}`)
  }
}

const url = `mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PWD}@${process.env.MONGODB_URL}${process.env.MONGODB_DBBASE}`

console.log(url)

const mongoInstance = connectMongoDB(url)

export default mongoInstance
