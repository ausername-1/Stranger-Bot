require('dotenv').config()

const Discord = require('discord.js');

Discord.Constants.DefaultOptions.ws.properties.$browser = "Discord Android"
const client = new Discord.Client();

const WOKCommands = require('wokcommands')

client.on('ready', () => {
    console.log('Ready!')
    
    client.user.setActivity("cats", {type: "WATCHING"}) 
    const disabledDefaultCommands = [
       "requiredrole"
      ]
      const dbOptions = {
        keepAlive: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      }
  new WOKCommands(client, {
    commandsDir: 'commands',
    featuresDir: 'features',
    messagesPath: 'messages.json',
    showWarns: false, // Show start up warnings
    del: -1,
    dbOptions,
    disabledDefaultCommands
  })
  .setMongoPath(process.env.MONGO_URI)
  .setDefaultPrefix('d.')
  .setColor('#5ffcae')
  .setCategorySettings([
    {
      name: 'Fun',
      emoji: '🎮'
    },
    {
        name: 'Moderation',
        emoji: '💻'
    },
    {
        name: 'Other',
        emoji: '🔧'
    }
])
})

client.login(process.env.TOKEN)