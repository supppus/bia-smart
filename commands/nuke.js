const {SlashCommandBuilder, PermissionFlagsBits} = require("discord.js");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("limpar")
    .setDescription("Limpe o chat.")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
  execute(client, interaction) {
    interaction.reply("Limpando...");
    async function nukeChat() {
      let size = 100;
      try {
        while (size > 0) {
          await interaction.channel
            .bulkDelete(size)
            .then((messages) => (size = messages.size))
            .catch();
        }
      } catch {
        try {
          size = 1;
          while (size > 0) {
            await interaction.channel
              .bulkDelete(size)
              .then((messages) => (size = messages.size))
              .catch();
          }
        } catch {}
      }
    }
    nukeChat();
  },
};
