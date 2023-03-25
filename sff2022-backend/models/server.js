const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { dbConnection } = require("../db/config");
const { socketController } = require("../socket/socketController");

class Server {
  constructor() {
    // Initialize instance variables
    this.app = express(); // Express app
    this.port = process.env.PORT; // Server port
    this.url = process.env.URLFRONT; // Frontend URL
    this.usersPath = "/api/user"; // User API endpoint
    this.authPath = "/api/auth"; // Authentication API endpoint
    this.teamPath = "/api/team"; // Team API endpoint
    this.presalePath = "/api/presale"; // Presale API endpoint
    this.salePath = "/api/sale"; // Sale API endpoint
    this.product = "/api/product"; // Product API endpoint

    this.dashboard = "/api/dashboard"; // Dashboard API endpoint
    this.event = "/api/settings"; // event API endpoint

    // Initialize socket.io configuration
    this.server = require("http").createServer(this.app); // HTTP server instance
    this.io = require("socket.io")(this.server); // Socket.IO instance for handling WebSocket connections

    // Register middleware functions
    this.middlewares();

    // Register application routes
    this.routes();

    // Connect to database
    this.dataBaseConnection();

    // Register socket.io event handlers
    this.sockets();
  }

  /**
   * Connects to the database using the configuration specified in ../db/config.js.
   */
  async dataBaseConnection() {
    await dbConnection();
  }

  /**
   * Registers middleware functions for the Express app.
   */
  middlewares() {
    // Parse request body
    this.app.use(express.json());

    // Enable Cross-Origin Resource Sharing (CORS)
    this.app.use(cors());

    // Serve static files from the 'public' directory, but remove '.html' extension from URLs
    this.app.use(express.static("public", { extensions: ["html"] }));

    // Serve images from the 'uploads' directory
    this.app.use("/uploads", express.static("uploads"));
  }

  /**
   * Registers application routes for the Express app.
   */

  routes() {
    // Register routes for user, authentication, team, presale, sale, and product APIs
    this.app.use(this.usersPath, require("../routes/user"));
    this.app.use(this.authPath, require("../routes/auth"));
    this.app.use(this.teamPath, require("../routes/team"));
    this.app.use(this.presalePath, require("../routes/presale"));
    this.app.use(this.salePath, require("../routes/sale"));
    this.app.use(this.product, require("../routes/product"));
    this.app.use(this.event, require("../routes/settings"));

    // Register route for dashboard API
    this.app.use(this.dashboard, require("../routes/dashboard"));
  }
  /**
   * Starts the server and listens for incoming connections.
   */
  listen() {
    this.server.listen(this.port, () => {
      console.log(`Server Running in port ${this.port}`);
      console.log(`The Frontend URL is running in ${this.url}`);
    });
  }
  /**
   * Registers socket.io event handlers for the WebSocket connections.
   */
  sockets() {
    this.io.on("connection", (socket) => {
      socketController(socket);
    });
  }
}

module.exports = Server;
