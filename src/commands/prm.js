"use strict";
require("dotenv").config();
module.exports = {
    name: 'prm',
    description: "If someone asks: Why isn't 787 showing up after download? Respond with this command.",
    execute: function (message, args, Discord) {
        var newEmbed = new Discord.MessageEmbed()
            .setColor('#304281')
            .setTitle('Why is the plane not showing up in the simulator?')
            .setDescription('You need Premium Deluxe to use the Heavy Division Mod')
            .setImage('https://cdn.discordapp.com/attachments/810316915464863774/938473429399654451/unknown.png');
        message.channel.send({ embeds: [newEmbed] });
    }
};
