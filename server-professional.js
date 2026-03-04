import express from "express";
import cors from "cors";

const app = express();
const PORT = 8080;

app.use(cors());

// Professional data object
const professionalData = {
  professionalName: "Kristin Lind",
  base64Image: "", // You can paste base64 image here later
  nameLink: {
    firstName: "Kristin",
    url: "https://kristinlind.github.io/"
  },
  primaryDescription: " is a full-stack web development student.",
  workDescription1: "She enjoys building modern web applications using JavaScript and Node.",
  workDescription2: "She is currently learning backend API development with MongoDB.",
  linkTitleText: "Professional Links",
  linkedInLink: {
    text: "LinkedIn",
    link: "https://www.linkedin.com/in/kristin-lind-0281572ba/"
  },
  githubLink: {
    text: "GitHub",
    link: "https://github.com/KristinLind"
  }
};

// Endpoint required by frontend
app.get("/professional", (req, res) => {
  res.json(professionalData);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});