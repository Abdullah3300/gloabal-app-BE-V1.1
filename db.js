const sql = require("mssql");

// Database configuration
// const config = {
//   user: "apps_dba",
//   password: "Apps@*786",
//   server: "66.165.248.146",
//   database: "GS_Apps",
//   port: 80,
//   options: {
//     encrypt: false,
//   },
// };

// Function to connect to the database
async function connectToDatabase() {
  try {
    await sql.connect(
      "Server=66.165.248.146;Database=GS_Apps;User Id=apps_dba;Password=Apps@*786;Encrypt=false;trustServerCertificate:true"
    );
    console.log("Connected to SQL Server");
  } catch (err) {
    console.error("Error connecting to SQL Server:", err);
  }
}

// Function to execute a query
async function executeQuery(query) {
  try {
    const result = await sql.query(query);
    return result.recordset;
  } catch (err) {
    console.error("Error executing query:", err);
    throw err;
  }
}

// Function to close the database connection
async function closeDatabaseConnection() {
  try {
    await sql.close();
    console.log("Connection closed.");
  } catch (err) {
    console.error("Error closing connection:", err);
  }
}

module.exports = {
  connectToDatabase,
  executeQuery,
  closeDatabaseConnection,
};
