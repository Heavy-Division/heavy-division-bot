import { Message } from 'discord.js';

describe('Message Handler', () => {
    const message = ({
        channel: { send: jest.fn() },
        content: '',
        author: { bot: false },
    } as unknown) as Message;

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('it should send when', async () => {
        message.content = '.when';
        await message.channel.send(message.content);
        expect(message.channel.send).toHaveBeenCalledWith('.when');
        expect(message.channel.send).toHaveBeenCalledTimes(1);
    });
});
