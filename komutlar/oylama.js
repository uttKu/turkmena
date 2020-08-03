const Discord = require('discord.js');

 exports.run = (client, message, args) => {
   message.delete();
   let question = args.join(' ');
   let user = message.author.username
   if (!message.member.hasPermission("MANAGE_MESSAGES")) {
    const botunmesajyonet = new Discord.RichEmbed()
    .setColor(0xD97634)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField(':warning: Uyarı :warning:', 'Oylama Başlatmak için `Mesajları Yönet` yetkisine sahip olmalısın.')
    return message.author.sendEmbed(botunmesajyonet);
   }
   if (!question) return message.channel.sendEmbed(
     new Discord.RichEmbed()
     .addField(`:x:yazı yazman gerek :x:`)).then(m => m.delete(5000));
     console.log("oylama komutu " + message.author.username + '#' + message.author.discriminator + " tarafından kullanıldı.")
     message.channel.sendEmbed(
       new Discord.RichEmbed()
       .setColor("RANDOM")
       .setThumbnail(client.user.avatarURL)
       .setTimestamp()
       .setFooter(`${message.author.username} Tarafından Oylama Yapıldı.`, message.author.avatarURL)
       .addField(`**Oylama**`, `${question}`)).then(function(message) {
         message.react('✅');
         message.react('❌');
       });
     };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['oylama'],
  permLevel: 2
};

exports.help = {
  name: 'oylama',
  description: 'Oylama yapmanızı sağlar.',
  usage: 'oylama <oylamaismi>'
};