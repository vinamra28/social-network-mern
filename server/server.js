import config from './../config/config'
import app from './express'
import mongoose from 'mongoose'

// Connection URL
mongoose.Promise = global.Promise
mongoose.connect('mongodb://rxlabs:rxlabs1@ds147225.mlab.com:47225/rxlab')
mongoose.connection.on('error', () => {
  throw new Error('unable to connect to database: mongodb://rxlabs:rxlabs1@ds147225.mlab.com:47225/rxlab')
})

app.listen(config.port, (err) => {
  if (err) {
    console.log(err)
  }
  console.info('Server started on port %s.', config.port)
})
