const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'kick', // Optional
    commands: ['kick'], // Optional
    aliases: ['removeuser'],
    category: 'Moderation',
    description: "Kicks mentioned user from guild.",
    minArgs: 1,
    maxArgs: 1,
    permissions: ['KICK_MEMBERS'],
    callback: async({ message, args }) => {
        let member = message.mentions.members.first();
        if(!member) {
            const embed = new MessageEmbed()
            .setTitle('Error!')
            .setColor('#FF0000')
            .setDescription(`Sorry I cant kick no one!`)
            return message.channel.send(embed)
        }
        
        try {
            await member.kick()
            .catch(error => {
                const embed = new MessageEmbed()
                .setTitle('Error!')
                .setColor('#FF0000')
                .setDescription(`Sorry I couldn't kick ${member} because an error occured! Error: ${error}`)
                .setTimestamp()
                return message.channel.send(embed)
            });
            const embed = new MessageEmbed()
            .setTitle('Success!')
            .setColor('#5ffcae')
            .setDescription(`I have successfully kicked ${member}!`)
            message.channel.send(embed)
        } catch(err) {
         const embed = new MessageEmbed()
         .setTitle('Error!')
         .setColor('#FF0000')
         .setDescription(`Sorry, an error occured! Error: ${err}`)
         .setTimestamp()
         message.channel.send(embed)
        }
     }
    }