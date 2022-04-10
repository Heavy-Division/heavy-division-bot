import { CommandDefinition } from '../../lib/command';
import { CommandCategory } from '../../constants';

export const palindrome: CommandDefinition = {
    name: 'palindrome',
    description: 'Checks if passed word is a palindrome',
    category: CommandCategory.MEMES,
    executor: async (msg) => {

            const text = msg.content.replace(/\.palindrome\s([a-zA-Z]+\s)+[a-zA-Z]+/i,"").toLowerCase()

            console.log(text)

            const reverseText = text.split("").reverse().join("");

            console.log(reverseText)

            if (text === reverseText) {
                return msg.reply('True');

            }
            return msg.reply('False');


        }


    }
