const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  // mongoUri: process.env.MONGODB_URI ||
  //   process.env.MONGO_HOST ||'mongodb://Vinamra:vinamradb1@ds241570.mlab.com:41570/mernsocial'||
  //   'mongodb://' + (process.env.IP || 'localhost') + ':' +
  //   (process.env.MONGO_PORT || '27017') +
  //   '/mernproject'
  mongoUri:'mongodb://Vinamra:vinamradb1@ds241570.mlab.com:41570/mernsocial'
}

export default config
