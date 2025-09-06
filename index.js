const { Client, GatewayIntentBits, EmbedBuilder } = require("discord.js");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers
    ]
});

const GUILD_ID = "123456789012345678";

const WELCOME_CHANNEL_ID = "123456789012345678";

client.on("guildMemberAdd", member => {
    if (member.guild.id !== GUILD_ID) return;

    const channel = member.guild.channels.cache.get(WELCOME_CHANNEL_ID);
    if (channel) {
        const embed = new EmbedBuilder()
            .setColor("Green")
            .setTitle("👋 Welcome!")
            .setDescription(`Hello ${member}, welcome to our server! We hope you enjoy your stay 🎉`);
        
        channel.send({ embeds: [embed] });
    }
});

client.login("YOUR_BOT_TOKEN");

