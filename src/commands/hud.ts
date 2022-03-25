require("dotenv").config();

module.exports = {
    name: 'hud',
    description: "Addresses issues regarding HUD positioning on the 787",
    execute(message: any, args: any, Discord: any) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('787 HUD Issue fix')
        .setDescription('You need to adjust camera settings to see the HUD properly')
        .setImage('https://media.discordapp.net/attachments/810316915464863774/948055227960004688/unknown.png')

        message.channel.send({ embeds: [newEmbed] });
    }


}
