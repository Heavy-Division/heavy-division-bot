"use strict";
require("dotenv").config();
module.exports = {
    name: 'dz',
    description: "If someone asks: Why isn't LNAV working? Plane constantly drifting to one side",
    execute: function (message, args, Discord) {
        var newEmbed = new Discord.MessageEmbed()
            .setColor('#304281')
            .setTitle('If plane is banking constantly to one side whilst LNAV is engaged:')
            .setDescription('Check that you have deadzones set >0% before engaging LNAV')
            .setImage('https://i.imgur.com/s6WVry4.jpg');
        message.channel.send({ embeds: [newEmbed] });
    }
};
