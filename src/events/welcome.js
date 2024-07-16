const { Events, EmbedBuilder } = require("discord.js");

module.exports = {
  name: Events.GuildMemberAdd,
  once: false,
  execute(member, client) {
    const welcomeChannel = member.guild.channels.cache.find(
      (channel) => channel.name === "welcome"
    );

    if (!welcomeChannel) return;

    const welcomeEmbed = new EmbedBuilder()
      .setColor(0x0099ff)
      .setTitle("Welcome!")
      .setDescription(`Welcome to the server, ${member}! Enjoy your stay.`)
      .setThumbnail(member.user.displayAvatarURL());

    welcomeChannel.send({ content: `${member}`, embeds: [welcomeEmbed] });
  },
};
