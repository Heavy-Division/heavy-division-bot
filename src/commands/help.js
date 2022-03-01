require("dotenv").config();
module.exports = {
    name: 'help',
    description: "Use for list of heavybot commands",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Bot Commands')
        .setDescription('How to use HeavyBot')
        .addFields(
            { name: '1. .prm', value: 'Explains why some users do not see the plane in the sim after unzipping to their community folder' },
            { name: '2. .dz', value: 'Deadzone fix guide for LNAV banking issues.' },
            { name: '3. .wx', value: 'If questions arise regarding weather engine fixes/updates.'},
            { name: '4. .hud', value: 'Fix for misaligned HUD'},
            { name: '5. .when', value: 'For inquiries on when new updates/features will be availible'},
        )

        message.channel.send({ embeds: [newEmbed] });
    }
}
