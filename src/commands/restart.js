require("dotenv").config();

module.exports = {
    name: "restart",
    description: "this is a ping command",

    run: async (client, message, args) => {
    if (message.author.id != '198174874479362048') {
        return message.channel.send('You cannot use this command!')

    }
    await message.channel.send('Restarting bot...')

    process.exit();

         }

}
