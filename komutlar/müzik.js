const Discord = require('discord.js');

let botid = ('') 

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`${client.user.username} Müzik Komutları`)
    .addField('%çal', 'Müzik Açmak İçin Kullanılan Komuttur: %çal [müzikadı]')
    .addField('%durdur', 'Müziği Kapatmak İçin Kullanılan Komuttur: %durdur')
    .addField('%çal', 'Müzik Açmak İçin Kullanılan Komuttur: %çal [müzikadı]')
    .addField('%ses', 'Ses Seviyesini Ayarlar: %ses [değer] (ses 3 te önerilir)')
    .addField('%geç', 'Çalınan Müzikten Sıradaki Diğer Müziğe Geçer: %geç')
    .addField('%duraklat', 'Çalan Şarkıyı Duraklatır: %duraklat')
    .addField('%devam', 'Duraklatılmış Şarkıyı Devam Ettirir: %devam')
    .addField('%sıra', 'Şarkı Kuyruğunu Görüntüler: %sıra')
    message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'müzik',
  description: '',
  usage: ''
};