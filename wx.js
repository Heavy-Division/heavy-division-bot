require("dotenv").config();
module.exports = {
    name: 'wx',
    description: "If someone asks: Is live weather working again? Why hasn't Comi fixed it yet reeeeeeeee.",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Heavy Division is not responsible for issues in the weather engine')
        .setDescription('The Heavy Division Mod does not manipulate the weather engine, nor does any Developer have special access to Asobo channels, please keep all live weather update requests and support to the Official MSFS forums or Discord')
        .setImage('https://1.bp.blogspot.com/-_p794HOpwS4/X2SwCDPC4WI/AAAAAAAAEKw/Wc5lmnxmfxM60ryEaN-hIj3URzbD9KUEgCLcBGAsYHQ/s1916/MSFS2020%2B-%2BReal%2BTime%2BWeather%2B-%2BV.0.1.jpg')
       



        message.channel.send({ embeds: [newEmbed] });
    }


}