// swagger.js
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "API QUẢN LÝ KHO",
      version: "1.0.0",
      description: "API Documentation for backend",
      components: {
        securitySchemes: {
          bearerAuth: {
            type: "http",
            scheme: "bearer",
            bearerFormat: "JWT",
          },
        },
      },
      security: [
        {
          bearerAuth: [],
        },
      ],
      contact: {
        name: "Your Name",
      },
      servers: [
        {
          url: "http://localhost:5000",
          description: "Production server",
        },
      ],
    },
  },
  apis: [
    "./routes/auth.routes.js",
    "./routes/product.routes.js",
    "./routes/order.routes.js",
    "./routes/comment.routes.js",
    "./routes/category.routes.js",
  ], // Path to the API docs
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

export default swaggerDocs;
