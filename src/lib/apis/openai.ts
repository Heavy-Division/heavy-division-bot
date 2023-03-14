import { SlashCommandBuilder } from '@discordjs/builders';
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({ apiKey: process.env.OPENAI_TOKEN });
const openai = new OpenAIApi(configuration);

module.exports = {
    data: new SlashCommandBuilder()
        .setName('chat')
        .setDescription('Get an AI-generated response based on your message')
        .addStringOption((option) => option.setName('message')
            .setDescription('The message to generate a response from')
            .setRequired(true)),
    async execute(interaction) {
        const message = interaction.options.getString('message');

        try {
            const completion = await openai.createChatCompletion({
                model: 'gpt-3.5-turbo',
                messages: [{ role: 'user', content: message }],
            });

            const response = completion.data.choices[0].text.trim();

            await interaction.reply(response);
        } catch (error) {
            console.error(error);
            await interaction.reply({ content: 'Sorry, there was an error processing your request!', ephemeral: true });
        }
    },
};
