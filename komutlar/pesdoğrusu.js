const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let embed = new Discord.RichEmbed()
  .setColor("GREEN")
  .setAuthor("TürkMena | Pes Doğrusu")
  .setTitle('TürkMena')
  .setDescription('**PES DOĞRUSU**')
  .setImage("https://i.ytimg.com/vi/WQUUOAMu0Uc/hqdefault.jpg")
  .setFooter("TürkMena | Pes Doğrusu!");
  message.channel.send(embed).then(msg => msg.delete(15000));
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['pd'],
  permLevel: 0
};

exports.help = {
  name: 'pesdogrusu',
  description: 'Pes Dogrusu Yapar.',
  usage: 'pesdogrusu'
};