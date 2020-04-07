let failTables = require('../data/fail-tables');

 module.exports = {
     name: 'fail',
     description: 'Generates random results for critical fails.',
     usage: 'Usage: !fail weapon-type [user roll]\nGenerates a result for critically failed attack rolls using either a virtual random roll or a user supplied value from rolling at the table.\n<attack type> is required and should be one of melee, natural, ranged, thrown, or spell.\n<user roll> is optional and supplied only if the user has rolled at the table.',
     execute (message, args) {
        let result = '';
        let attackType = args[0];
        let userRoll = args[1];
        
        try {
            if (!attackType) {
                throw new Error(this.usage);
            }

            attackType = attackType.toLowerCase();
            
            if (!failTables.hasOwnProperty(attackType)) {
                throw new Error(this.usage);
            }

            if(!isNaN(userRoll) && userRoll <= failTables[attackType].size) {
                result = `Fumbled attack result for your roll of ${userRoll}: ${failTables[attackType][userRoll]}`;
            }
            else {
                let roll = Math.floor(Math.random() * failTables[attackType].size) + 1;
                result = `Fumbled attack result: ${failTables[attackType][roll]}`;
            }

            message.reply(`${result}`);
        }
        catch(e) {
            message.reply(e.message);
        };
     },
 };
