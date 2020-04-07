# RPG Discord Utility Bot

## A Discord bot providing utilities for RPG games, specifically D&D 5e

### Installing

### Using the bot
Commands to the bot should be prefixed with and exclamation point `!`. Valid commands are currently:
- `ping`
    - Simply intended to be a quick test to see if the bot is still connected and functional. Bot replies with `pong`. Usage: `!ping`
- `fail`
    -  A critical fail result generator. The command can either roll a result for the user or the user can roll their own dice and provide the result as an optional argument.  
    Usage: `!fail attack-type [user-roll]`  
    (Attack-type should be one of `melee`, `natural`, `ranged` (bows), `thrown` (spears, etc.), or `spell`).