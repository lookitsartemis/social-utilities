const fs = require("fs");
const path = require("path");
const axios = require("axios");
const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("cat")
    .setDescription("Sends a random cat image."),
  async execute(interaction) {
    try {
      const response = await axios.get(
        "https://api.thecatapi.com/v1/images/search"
      );
      const catImageUrl = response.data[0].url;

      const catEmbed = new EmbedBuilder()
        .setColor(0x0099ff)
        .setTitle("Cat!")
        .setImage(catImageUrl);

      await interaction.reply({ embeds: [catEmbed] });
    } catch (error) {
      console.error(error);
      await interaction.reply({
        content: "Failed to fetch a cat image :(",
        ephemeral: true,
      });
    }
  },
};
