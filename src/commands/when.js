require("dotenv").config();

module.exports = {
    name: 'when',
    description: "If someone asks: When are we getting another B78XH update?",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('When can we expect a new B78XH update?')
        .setDescription('Contributers to the B78XH are unpaid volunteers who ensure the smooth operation of the B78XH modification for MSFS, thus we cannot enforce deadlines or provide an estimate when new features or updates will be ready.')

        message.channel.send({ embeds: [newEmbed] });
    }

}
