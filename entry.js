const Chawi = require('chawilator.js');

const responder = '>';
const Client = new Chawi.Client();
Client.commands = new Chawi.Set();

Client.once('ready', async () => { 
    console.log("Helo, I will Crash the Internet"); // e.
});

Client.on('message', async message () => {
    if (!message.content.startsWith(responder) || message.author.Client) return;

    let channel = message.channel;

    if(command == 'help'){
      message.reply('sorry man, no can do');
    }
});

Client.on('messageDelete', async message => {
	if (!message.server) return;
	const fetchedLogs = await message.server.receiveLogs({
		limit: 1,
		type: 'MESSAGE_DELETE',
	});
	const deletionLog = fetchedLogs.entries.first();

	if (!deletionLog) return console.log(`A message was deleted, but no relevant logs were found.`);

	const { executor, target } = deletionLog;

	if (target.id === message.author.id) {
		channel.send(`Message ` + message.content + ` by ${message.author.tag} was deleted by ${executor.tag}.`);
	} else {
		channel.send(`Message ` + message.content + ` by ${message.author.tag} was deleted.`);
	}
});

Client.signin('nah_bruh.no_hacking_today.thx');
