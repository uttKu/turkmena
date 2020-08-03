const Discord = require('discord.js');

let botid = ('733451308211765270') 

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`${client.user.username} Eğlence Komutları`)

    .addField('%düello', 'Belirtilen Kişiye Düello İsteği Atar: %düello [kişi]')
    .addField('%bulanık', 'Belirtilen Kişinin Fotoğrafını Bulanıklaştırır: %bulanık [kişi]')
    .addField('%spotify', 'Belirtilen Kişinin Ne Dinlediğini Gösterir: %spotify [kişi]')
    .addField('%oyunara', 'Belirtilen Oyun Hakkında Detaylı Bilgi Gösterir: %spotify [oyunadı]')
    message.channel.sendEmbed(embed).then(msg => msg.delete(10000));

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'eglence',
  description: '',
  usage: ''
};