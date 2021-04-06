const fetch = require('node-fetch')
const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'report', // Optional
    commands: ['report'], // Optional
    aliases: ['reportabuse'],
    category: 'Other',
    description: "Report dangerous users on discord!",
    cooldown: '10m',
    callback: async({ message, args }) => {
        if(!args || args.length < 1) return message.reply("Please provide a User ID to check!");
        const data = await fetch(`https://discord.riverside.rocks/report.json.php?key=${process.env.KEY}&id=${args[0]}&details=${args[1]}`).then((res) => res.json())   
        
        const embed = new MessageEmbed()
        .setTitle('Report!')
        .setColor('#5ffcae')
        .setDescription(data.message + ` (https://discord.riverside.rocks/check?id=${args[0]}&ref=homepage)`)
        .setTimestamp()
        .setFooter(`Command ran by ${message.author.tag}`, message.author.displayAvatarURL)
        message.channel.send(embed)
    }
  }