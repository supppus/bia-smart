const {SlashCommandBuilder, PermissionFlagsBits} = require("discord.js");
const editJsonFile = require("edit-json-file");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("humor")
    .setDescription("Altere meu humor por aqui!")
    .addStringOption((option) =>
      option.setName("estado").setDescription("bom, mal, justa ou alegre")
    )
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
  execute(client, interaction) {
    let humor = interaction.options.getString("estado");
    if (
      !humor ||
      (humor !== "bom" &&
        humor !== "mal" &&
        humor !== "justa" &&
        humor !== "alegre")
    ) {
      return interaction.reply(
        "Opa, infelizmente não tenho esse tipo de humor..."
      );
    }
    let file = editJsonFile("./config/cfg.json");
    file.set("state", humor);
    file.save();
    interaction.reply(
      "Nossa, meu humor mudou do nada, acho que estou ficando louca..."
    );
  },
};
