import {Sequelize} from "sequelize";

export const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USER_NAME, process.env.DATABASE_PASSWORD,  {
  host: process.env.DB_HOST,
  dialect:  'postgres'
});

export const connection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

// export const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USER_NAME, process.env.DATABASE_PASSWORD, {
//   host: process.env.DB_HOST,
//   dialect: 'postgres',
//   port: process.env.DB_PORT,
//   logging: false,
//   });