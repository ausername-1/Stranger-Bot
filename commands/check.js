const fetch = require('node-fetch')
const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'check', // Optional
    commands: ['check'], // Optional
    aliases: ['find'],
    category: 'Other',
    description: "Check dangerous users on discord!",
    cooldown: '10m',
    callback: async({ message, args }) => {
        if(!args || args.length < 1) return message.reply("Please provide a User ID to check!");
        const data = await fetch(`https://discord.riverside.rocks/check.json.php?id=${args[0]}`).then((res) => res.json())   
    
        const embed = new MessageEmbed()
        .setTitle(`Information about ${data.username}`)
        .setColor('#5ffcae')
        .addFields(
                {name: 'Reports', value: data.reports},
                {name: 'Total Reports', value: data.total_reports},
                {name: 'Score', value: data.score}
        )
        .setTimestamp()
        .setFooter(`Information requested by ${message.author.tag}`, message.author.displayAvatarURL);
        message.channel.send(embed)
    }
  }