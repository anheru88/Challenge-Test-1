export default () => ({
  port: parseInt(process.env.SERVER_PORT, 10) || 3000,
  database: {
    type: process.env.DATABASE_TYPE,
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_DATABASE,
    synchronize: process.env.DATABASE_SYNCHRONIZE,
    migrationsRun: process.env.DATABASE_MYGRATION_RUN,
    logging: process.env.DATABASE_LOGGING,
    autoLoadEntities: process.env.DATABASE_AUTO_LOAD_ENTITIES,
  },
});
