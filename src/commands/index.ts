import { SlashCommandBuilder } from 'discord.js';

export = {
  data: new SlashCommandBuilder()
    .setName('sexo')
    .setDescription('Replies with Pong!'),
  async execute(interaction: { reply: (arg0: string) => any; }) {
    await interaction.reply('Pong!');
  },
};