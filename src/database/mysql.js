// import sequelize
import { Sequelize } from "sequelize";

//create varialbes for DB connection
const database = process.env.MYSQL_DATABASE;
const username = process.env.MYSQL_USER;
const password = process.env.MYSQL_PASSWORD;
const host = process.env.MYSQL_HOST;

// create Sequelize instance
const sequelize = new Sequelize(database, username, password, {
  host,
  dialect: "mysql",
});

//create db connection
const dbConnect = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connected to MySQL");
  } catch (error) {
    console.log("Error connecting to DB: " + error);
  }
};

//Export db connection
export { dbConnect, sequelize };
