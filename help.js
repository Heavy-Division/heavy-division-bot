require("dotenv").config();
module.exports = {
    name: 'help',
    description: "If someone asks: Why isn't LNAV working? Plane constantly drifting to one side",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Bot Commands')
        .setDescription('.wx: will return info on weather engine failures when questions are asked,.dz: will provide info on deadzone related LNAV failures, .prm: will provide explanation why user cannot see the 787 in their menu after downloading mod')
       



        message.channel.send({ embeds: [newEmbed] });
    }
}
