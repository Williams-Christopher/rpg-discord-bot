require('dotenv').config();
const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    console.log(`Bot was ready at ${client.readyAt}`);
});

client.on('message', msg => {
    if (msg.content.substring(0, 1) === '!') {
        let args = msg.content.substring(1).split(' ');

        let commandName = args.shift().toLowerCase();
        // console.log('commandName: ', commandName);
        // if (!commandName) {
        //     throw new Error();
        //     return;
        // };
        // commandName = commandName.toLowerCase();

        if (!client.commands.has(commandName)) {
            msg.reply(`Could not find the command ${commandName}.`);
            return;
        }
        
        const command = client.commands.get(commandName);
        
        try {
            command.execute(msg, args);
        } catch (e) {
            console.log(e);
            msg.reply(`There was an error trying to execute ${command}.`);
        }   
    };
});

client.login(process.env.DISCORD_TOKEN);
