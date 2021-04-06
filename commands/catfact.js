const fetch = require('node-fetch')
const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'catfact', // Optional
    commands: ['catfact'], // Optional
    aliases: ['catinfo'],
    category: 'Fun',
    description: "Sends a fact about cats!",
    cooldown: '5s',
    callback: async({ message }) => {
      const { fact } = await fetch('https://some-random-api.ml/facts/cat').then((res => res.json()))
      const embed = new MessageEmbed()
      .setTitle('Cat fact!')
      .setColor('#5ffcae')
      .setDescription(fact)
      .setTimestamp()
      message.channel.send(embed)
    }
  }