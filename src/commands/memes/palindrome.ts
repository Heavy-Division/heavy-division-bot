import { CommandDefinition } from '../../lib/command';
import { CommandCategory } from '../../constants';

export const palindrome: CommandDefinition = {
    name: ['palindrome', 'pal', 'pdrome'],
    description: 'Checks if passed word is a palindrome',
    category: CommandCategory.MEMES,
    executor: async (msg) => {

            const text = msg.content.replace(/[\s\.pal\.palindrome\.pdrome\"'.,-\/#!$%\^&*;:{}=\-_`~()\\\[\]@+|?><]/g,"").toLowerCase();

            const reverseText = text.split('').reverse().join('');

            console.log(reverseText)

            if (text === reverseText) {
                return msg.reply('True');

            }
            return msg.reply('False');


        }


    }
