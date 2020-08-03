const Discord = require('discord.js');

let botid = ('733451308211765270') 

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`${client.user.username} Kullanıcı Komutları`)

    .addField('%alıntıla', 'Belirtilen Mesajı Alıntılar: %alıntıla [Mesaj ID]')
    .addField('%istatistik', 'Botun İstatistiklerini Gösterir: %istatistik')
    .addField('%kullanıcıara', 'Kullanıcı ararsın: %kullanıcıara [isim]')
    .addField('%ping', 'Pong! Botun Gecikmesini Gösterir: %ping')
    .addField('%sunucubilgi', 'Sunucu Bilgilerini Görüntüler: %sunucubilgi') 
    .addField('%yetkilerim', 'Sunucuda Yetkilerinizi Öğrenirsiniz: %yetkilerim')
    message.channel.sendEmbed(embed).then(msg => msg.delete(10000));

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'kullanıcı',
  description: '',
  usage: ''
};