// DISCORD
const {EmbedBuilder} = require("discord.js");

const fs = require("fs");

const GetCfg = () => {
  return new Promise((resolve, reject) => {
    fs.readFile("./config/cfg.json", (err, data) => {
      return err ? reject(err) : resolve(JSON.parse(data));
    });
  });
};

const NewEmbed = (titulo, thumbnail, fields, image) => {
  GetCfg()
    .then((data) => {
      return new EmbedBuilder().setColor("#f21d41").setTitle(titulo);
    })
    .catch((err) => {
      return false;
    });
};

const Sleep = (time) => {
  setTimeout(() => {}, time);
};

module.exports = {GetCfg, NewEmbed, Sleep};
