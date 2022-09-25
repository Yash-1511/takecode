module.exports = {
  port: process.env.PORT || 8000,
  db: {
    prod: process.env.DATABASE_URL || 'mongodb+srv://admin:techforum@techforum.et98x9p.mongodb.net/?retryWrites=true&w=majority',
    test: 'mongodb+srv://admin:techforum@techforum.et98x9p.mongodb.net/?retryWrites=true&w=majority',
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    }
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'development_secret',
    expiry: '7d'
  },
  aws:{
    accessKeyId:process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey:process.env.AWS_SECRET_ACCESS_KEY,
    region:process.env.AWS_REGION,
    bucketName:process.env.AWS_BUCKET_NAME,
  }
};
