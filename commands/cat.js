const fetch = require('node-fetch')
const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'cat', // Optional
    commands: ['cat'], // Optional
    aliases: ['catimage'],
    category: 'Fun',
    description: "Sends a random Image of cats!",
    cooldown: '5s',
    callback: async({ message }) => {
      const { file } = await fetch('https://aws.random.cat/meow').then((res => res.json()))
      const embed = new MessageEmbed()
      .setTitle('Cat Image!')
      .setColor('#5ffcae')
      .setImage(file)
      .setTimestamp()
      message.channel.send(embed)
    }
  }