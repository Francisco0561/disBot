require('dotenv').config();
const { Client, IntentsBitField } = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

client.on('ready', (c) => {
    console.log(`${c.user.username} is online`);
})

client.on('interactionCreate', (interation) => {
    if (!interation.isChatInputCommand()) return;

    if (interation.commandName === "add") {
        const num1 = interation.options.get('first-number').value;
        const num2 = interation.options.get('second-number').value;
        
        interation.reply(`The sum is ${num1 + num2}`);
    }
});

client.login(process.env.TOKEN);