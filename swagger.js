import swaggerAutogen from "swagger-autogen";

const swagger = swaggerAutogen();

const doc = {
  info: {
    title: "Contacts API",
    description: "API documentation for the Contacts project"
  },
  host: "cse341-node-r9gw.onrender.com",
  schemes: ["https"]
};

const outputFile = "./swagger.json";
const endpointsFiles = ["./server.js"];

swagger(outputFile, endpointsFiles, doc);