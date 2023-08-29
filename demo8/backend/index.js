const mysql = require("mysql2");

// Create a connection to the database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "my-secret-pW7770",
  database: "test",
});

// Establish the connection
connection.connect();

// Execute a SQL query
const query = "SELECT * FROM products";
connection.query(query, (error, results, fields) => {
  if (error) {
    console.error("Error:", error);
  } else {
    console.log("Results:", results);
    console.log("Fields:", fields);
  }

  // Close the connection
  connection.end();
});
