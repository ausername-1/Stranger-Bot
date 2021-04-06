const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'ban', // Optional
    commands: ['ban'], // Optional
    aliases: ['removeuser'],
    category: 'Moderation',
    description: "Bans mentioned user from guild.",
    minArgs: 1,
    maxArgs: 1,
    permissions: ['BAN_MEMBERS'],
    callback: async({ message, args }) => {
        let member = message.mentions.members.first();
        if(!member) {
            const embed = new MessageEmbed()
            .setTitle('Error!')
            .setColor('#FF0000')
            .setDescription(`Sorry I cant ban no one!`)
            return message.channel.send(embed)
        }
        if(!member.bannable) {
            const embed = new MessageEmbed()
            .setTitle('Error!')
            .setColor('#FF0000')
            .setDescription(`Sorry I couldn't ban ${member} because they have a higher role than me!`)
            return message.channel.send(embed)
        }
        
        await member.ban()
          .catch(error => {
              const embed = new MessageEmbed()
              .setTitle('Error!')
              .setColor('#FF0000')
              .setDescription(`Sorry I couldn't ban ${member} because an error occured! Error: ${error}`)
              .setTimestamp()
              return message.channel.send(embed)
          });
         const embed = new MessageEmbed()
         .setTitle('Success!')
         .setColor('#5ffcae')
         .setDescription(`I have successfully banned ${member}!`)
         message.channel.send(embed)
        }
    }