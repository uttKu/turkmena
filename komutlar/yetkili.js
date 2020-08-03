const Discord = require('discord.js');

let botid = ('733451308211765270') 

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`${client.user.username} Yetkili Komutları`)

    .addField('%kick', 'Belirtilen Kişiyi Atar: %kick [kişi] [sebep]')
    .addField('%ban', 'Belirtilen Kişiyi Yasaklar: %ban [kişi] [sebep]')
    .addField('%banlananlar', 'Banlanan Listesini Görüntüler: %banlananlar')
    .addField('%duyuru', 'Belirtilen Kanala Duyuru Atar: %duyuru [kanal] [açıklama]')
    .addField('%giriş-çıkış-ayarla', 'Belirtilen Kanalda Resimli Giriş Çıkışlar Gözükür: %giriş-çıkış-ayarla [#kanal]') 
    .addField('%küfürengelle', 'Sunucunuzda Küfür Engelleme Sistemini Açarsınız Veya Kapatırsınız: %küfürengelle [aç/kapat]')
    .addField('%uyar', 'Belirtilen Kişiyi Uyarır: %uyar [kişi] [sebep]')
    .addField('%mute', 'Belirtilen Kişiyi Susturmasını Kaldırır: %unmute [kişi]')
    .addField('%rol-ver', 'Belirtilen Kişiye Etiketlenen Rolü Verir: %rol-ver [kişi] [@rol]')
    .addField('%temizle', 'Belirtilen Değer Göz Önünde Bulundurarak Mesaj(ları) Siler: %temizle [değer]')
    .addField('%reklamengelle', 'Sunucunuzda Reklam Engelleme Sistemini Açarsınız Veya Kapatırsınız: %reklamengelle [aç/kapat]')
    message.channel.sendEmbed(embed).then(msg => msg.delete(10000));

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'yetkili',
  description: '',
  usage: ''
};