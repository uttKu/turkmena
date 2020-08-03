const Discord = require(`discord.js`);
const client = new Discord.Client();  

exports.run = (client, message, args) => {
 let mesaj = args.slice(0).join(' ');
 let member = message.mentions.members.first();
 let body = 'https://minotar.net/skin/' + mesaj
 if (mesaj.length < 1) return message.reply('bir oyuncu adı belirtmelisin.').then(msg => msg.delete(2000));
 if (mesaj == member) {
    message.reply('kullanıcı değil, bir oyuncu adı belirtmelisin :/').then(msg => msg.delete(2000));
 } else {
 const mcbody = new Discord.RichEmbed()
   .setColor('#ffa200')
   .setTitle(mesaj + ' skinini indirmek için tıkla')
   .setURL('https://minotar.net/download' + '/' + mesaj)
   .setImage(body)
   .setFooter('TürkMena | Bu mesaj 15 saniye sonra silinecektir.')
 message.channel.send(mcbody).then(msg => msg.delete(15000));
 }
};


exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['mcindir','mcdownload'],
 permLevel: 0,
};
exports.help = {
 name: 'mcindir',
 description: 'Belirtilen oyuncunun skinini indirir.',
 usage: 'mcindir oyuncu'
};