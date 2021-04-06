const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'lock', // Optional
    commands: ['lock'], // Optional
    aliases: ['lockdown'],
    category: 'Moderation',
    description: "Locks down all channels in a category.",
    minArgs: 1,
    maxArgs: 1,
    permissions: ['ADMINISTRATOR'],
    callback: async({ message, args }) => {
        const channels = message.guild.channels.cache.filter(ch => ch.type !== 'category');
        if (args[0] === 'on') {
            channels.forEach(channel => {
                channel.updateOverwrite(message.guild.roles.everyone, {
                    SEND_MESSAGES: false
                })
            })
            const embed = new MessageEmbed()
            .setTitle('Lockdown 🔒')
            .setDescription('All channels in this category have been locked down!')
            .setColor('RANDOM')
            .setTimestamp()
            .setFooter(`Command ran by ${message.author.tag}`, message.author.displayAvatarURL)
            message.channel.send(embed)
        } else if (args[0] === 'off') {
            channels.forEach(channel => {
                channel.updateOverwrite(message.guild.roles.everyone, {
                    SEND_MESSAGES: true
                })
            })
            const embed = new MessageEmbed()
            .setTitle('Lockdown 🔒')
            .setDescription('All channels in this category have been unlocked!')
            .setColor('RANDOM')
            .setTimestamp()
            .setFooter(`Command ran by ${message.author.tag}`, message.author.displayAvatarURL)
            message.channel.send(embed)
        }
     }
    }