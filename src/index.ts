import Discordjs, { GatewayIntentBits, SlashCommandAssertions, SlashCommandBuilder, messageLink } from 'discord.js';
import dotenv from 'dotenv';
require('./commands');


dotenv.config()

const Pedra = new Discordjs.Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageReactions
  ]
});
// login
Pedra.login(process.env.TOKEN);
//Test ready
Pedra.on('ready', () => {
  console.log("Ready!")
});

Pedra.on("messageCreate", (Message) => {
  const content: string = "Juliano";
  if (Message.author.username != "A pedra") {
    if (Message.content == content) {
      Message.reply({
        content: 'Saia daqui com esse viado de merda. '
      })
    }
  }
});

// Pedra.on("", (Message) => {
//   const content: string = Message.;
//   if (Message.author.username != "A pedra") {
//     if (Message.content == content) {
//       Message.reply({
//         content: 'Ta chamando essa puta pra quê?'
//       })
//     }
//   }
// });

Pedra.on('messageUpdate', (Message) => {
  Message.reply({
    content: "Lembre-se: quem edita as mensagens certamente dá o cu na botinha."
  })
});





