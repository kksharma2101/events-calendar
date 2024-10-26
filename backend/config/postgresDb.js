import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(process.env.POSTGRES_URL,
  {
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    // logging: false, // Disable SQL logging if not needed
  }
);

export const connection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
