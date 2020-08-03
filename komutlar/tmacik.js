const Discord = require('discord.js');

exports.run = (client, message, args) => {
	let category = Discord.server.channels.find(c => c.id == 738755071420137523 && c.type == "category")
  category.setName('oyna.turkmena.tc > açık')
    const embed = new Discord.RichEmbed()
    .setAuthor('TürkMena Bot | Sunucu Durumu')
    .setColor(3447003)
    .setDescription(`Sunucu durumu başarıyla açık olarak değiştirildi.`)
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['tmacik','sunucuacik','swacik'],
  permLevel: 2
};

exports.help = {
  name: 'tmacik',
  description: 'TürkMena Açık .',
  usage: 'tmacik'
};