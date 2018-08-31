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
Github: https://github.com/wulfboy-95/awoo \n\
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
				case "🎑":
				var reply;
				var jd = moon(Date.now());
				var b = (jd - Math.floor(jd))*20;
				if ((b >=20) | (b < 1)) reply = "🌑 New Moon, no awoo..."
				else if (b < 5) reply = "🌒 Waxing Crescent, a little awoo...";
				else if (b == 5) reply = "🌓 First Quarter, a little more awoo.";
				else if (b < 10) reply = "🌔 Waxing Gibbous, awoo!";
				else if (b == 10) reply = "🌕 FULL MOON! AWOO!!! 😆";
				else if (b < 15) reply = "🌖 Waning Gibbous, awoo!";
				else if (b == 15) reply = "🌗 Last quarter, less awoo.";
				else if (b < 20) reply = "🌘 Waning crescent, a little awoo...";
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