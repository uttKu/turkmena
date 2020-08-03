const Discord = require('discord.js');


exports.run = function(client, message, args) {
    message.delete()
    let type = args.slice(0).join(' ');
    if (type.length < 1) return message.channel.send(
new Discord.RichEmbed()
.setDescription('Kullanım: %şikayet <Şikayet>'));
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setDescription('Şikayetiniz Bildirildi!') 
message.channel.send(embed).then(msg => msg.delete(5000));
const embed2 = new Discord.RichEmbed()
.setColor("RANDOM")
.setDescription(`**${message.author.tag}** adlı kullanıcının Şikayeti:`)
.addField(`Kullanıcı Bilgileri`, `Kullanıcı Id: ${message.author.id}\nKullanıcı Adı: ${message.author.username}\nKullanıcı Tagı: ${message.author.discriminator}`)
.addField("Şikayet", type)
.setThumbnail(message.author.avatarURL)
client.channels.get('736723397568102442').send(embed2);
client.channels.get('736723397568102442').send(" ")

};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'şikayet',
  description: 'Şikayet de bulunursunuz.',
  usage: 'şikayet <Şikayet>'
};