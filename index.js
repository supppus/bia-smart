const Discord = require("discord.js");
const {Collection, GatewayIntentBits} = require("discord.js");
const glob = require("fast-glob");
const fs = require("fs");
const path = require("path");

// CONTENT IMPORTS
const {Chat} = require("./modulos/chat");

// DATABASE
const dbInit = require("./database/db");

// CFG
const client = new Discord.Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
});
client.commands = new Collection();
const commandsPath = path.join(__dirname, "commands");
const commandFiles = fs
  .readdirSync(commandsPath)
  .filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
  const filePath = path.join(commandsPath, file);
  const command = require(filePath);
  client.commands.set(command.data.name, command);
}

client.on("ready", () => {
  client.user.setStatus("dnd");
  let atividades = [
    "-ME AO COLO DA LIVI",
    "FAMILY MOON NO DISBOARD",
    "ESTRELA CADENTE NO CÉU",
    "A LIVI NO MEU CORAÇÃO",
    "-ME AO CORAÇÃO DA LIVI",
  ];
  let choice = Math.floor(Math.random() * atividades.length);
  client.user.setActivity(atividades[choice]);
  setInterval(() => {
    let choiceLoop = Math.floor(Math.random() * atividades.length);
    client.user.setActivity(atividades[choiceLoop]);
  }, 10 * 1000);
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  const command = client.commands.get(interaction.commandName);

  if (!command) {
    return false;
  }

  try {
    await command.execute(client, interaction);
  } catch (error) {
    console.log(error);
    await interaction.channel.send("Ocorreu um erro ao executar este comando!");
  }
});

client.on("messageCreate", (message) => {
  Chat(message, client);
});

client
  .login("--token--")
  .then(() => {
    console.log("Bot on");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = client;
