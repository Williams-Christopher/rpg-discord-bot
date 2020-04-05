module.exports = {
    name: 'ping',
    description: 'A simple ping command to check if the bot is still conected and functional.',
    execute (message, args) {
        message.reply('Pong!');
    },
};
