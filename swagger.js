import swaggerAutogen from "swagger-autogen";

const swagger = swaggerAutogen();

const doc = {
  info: {
    title: "Contacts API",
    description: "API documentation for the Contacts project",
    version: "1.0.0"
  },
  host: "cse341-node-r9gw.onrender.com",
  schemes: ["https"],
  tags: [
    {
      name: "Contacts",
      description: "Operations related to contacts"
    },
    {
      name: "Professional",
      description: "Professional profile information"
    }
  ]
};

const outputFile = "./swagger.json";
const endpointsFiles = ["./server.js", "./routes/contacts.js"];

swagger(outputFile, endpointsFiles, doc);