var Discord = require('discord.js');
const client = new Discord.Client();
var token = process.argv[2];
client.on('ready', () => {
	console.log(`Loggend in as ${client.user.tag}!`);
});

client.on('message', msg => {
	var msg_string = msg.content.toLowerCase();
	if (msg_string.includes("awoo") && !msg.author.bot) {
		msg.channel.send("Awoo!!! >.<",{reply: null});
	}
});

client.login(token);