import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import type { Express } from "express";

// Swagger definition
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Gemstone Management API",
      version: "1.0.0",
      description: "API documentation for the Gemstone Management System",
      contact: {
        name: "API Support",
        email: "support@example.com",
      },
    },
    servers: [
      {
        url: "http://localhost:5000",
        description: "Development server",
      },
    ],
    components: {
      securitySchemes: {
        userId: {
          type: "apiKey",
          in: "header",
          name: "user-id",
          description: "User ID for authentication",
        },
      },
    },
    security: [
      {
        userId: [],
      },
    ],
  },
  // Path to the API docs
  apis: ["./src/routes/**/*.ts", "./src/routes/*.ts"],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

export function setupSwagger(app: Express) {
  // Serve swagger docs
  app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec, { explorer: true })
  );

  // Serve swagger spec as JSON
  app.get("/swagger.json", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });

  console.log("Swagger documentation available at /api-docs");
}
