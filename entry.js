const Chawi = require('chawilator.js');

const responder = '>';
const Client = new Chawi.Client();
Client.commands = new Chawi.Set();

Client.once('ready', async () => { 
    console.log("Helo, I will Crash the Internet"); // e.
});

Client.on('message', (message) => {
    if (!message.content.startsWith(responder) || message.author.Client) return;

    let channel = message.channel;

    if(command == 'help'){
      message.reply('stfu');
    }
});

Client.signin('nah_bruh-no_hacking_today-thx');
