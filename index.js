var Discord = require('discord.js');
var moon = require('./calculate_synodic_month.js');

const client = new Discord.Client();
const token = process.argv[2];

const help_string = 'AWOO!!! >.< Help Message: \n\
`!awoo help` to show this message \n\
`!awoo moon` to show the phase of the moon \n\
"awoo" in any message and you will recieve an "awoo as a reply! ^-^ \n\
`!awoo about` to show information about this bot. \n\
 \n\
Admin only commands: \n\
`!awoo sleep [duration=300]` to nap for a certain amount of seconds. \n\
`!awoo wake` to wake up from a nap';

const about_string = 'Application name: Awoo-beta \n\
Version: August 2018 in development \n\
Made by: Wulfboy_95 \n\
Github: https://github.com/alphawulfboy-95/awoo \n\
Discord: <@339379689892085772> \n\
Copyright: All Rights Reserved 2018';

const response_string = "AWOO!!! >.<";

client.on('ready', () => {
	console.log(`Loggend in as ${client.user.tag}!`);
});

client.on('message', msg => {
	var m = msg.content.toLowerCase();
	var ins = m.split(" ");
	if (ins[0] == "!awoo") {
		if (ins.length > 1) {
			switch (ins[1]) {
				case "help":
				msg.channel.send(help_string);
				break;
				case "moon":
				var reply = "New Moon, no awoo...";
				var jd = moon(Date.now());
				var b = Math.round((jd - Math.floor(jd))*8);
				switch(b) {
					case 1:
					reply = "Waxing Cresent, a little awoo...";
					break;
					case 2:
					reply = "First Quarter, a little more awoo.";
					break;
					case 3:
					reply = "Waxing Gibbous, awoo!";
					break;
					case 4:
					reply = "FULL MOON! AWOO!!!  >.<";
					break;
					case 5:
					reply = "Waning Gibbous, awoo!";
					break;
					case 6:
					reply = "Last quarter, less awoo.";
					break;
					case 7:
					reply = "Waning cresent, a little awoo...";
					break;
				}
				msg.channel.send(reply);
				break;
				case "about":
				msg.channel.send(about_string);
				break;
				case "sleep":
				msg.channel.send("Not available yet. " + response_string);
				break;
				case "wake":
				msg.channel.send("Not available yet. " + response_string);
				break;
				default:
				msg.channel.send("Invalid command, " + response_string);
				break;
			}
		}
	}
	else if (m.includes("awoo") && !msg.author.bot) {
		msg.channel.send(response_string);
	}
	
});

client.login(token);