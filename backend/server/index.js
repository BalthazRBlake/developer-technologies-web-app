const express = require("express");
const server = express();
const cors = require("cors");
const { TechnologyModel } = require("../models");

server.use(express.json());
server.use(express.static(__dirname + "/../public"));
server.use(cors());

server.get("/api/technologies", async (request, response) => {
  let technologies = await TechnologyModel.find();

  technologies = technologies.map(technology => {
    technologies.logo = `${request.protocol}://${request.headers.host}/img/${technology.logo}`;
    return technology;
  });

  return response.send({ error: false, data: technologies });
});

module.exports = server;