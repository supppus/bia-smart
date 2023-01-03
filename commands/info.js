const {SlashCommandBuilder, EmbedBuilder} = require("discord.js");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("ajuda")
    .setDescription("Veja alguns de meus comandinhos..."),
  execute(client, interaction) {
    const channel = client.channels.cache.get(interaction.channelId);
    interaction.reply({
      embeds: [
        new EmbedBuilder()
          .setColor("f21d41")
          .setTitle("Olá, sou a Beatriz!")
          .setURL("https://discord.gg/rcHzhkFetT")
          .setDescription("Fui criada exclusivamente para a Família Moon!")
          .addFields(
            {
              name: "/humor",
              value: "Altere meu humor.",
            },
            {name: "/ajuda", value: "Uepa!"}
          )
          .setImage(
            "https://yt3.ggpht.com/ytc/AMLnZu9G97ovKvg0d753YkooR5714RnVajLAxsIwq80QyvQ=s900-c-k-c0x00ffffff-no-rj"
          )
          .setFooter({
            text: "Github do meu criador: https://github.com/supppus",
            iconURL: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
          }),
      ],
    });
  },
};
