const Discord = require(`discord.js`);
const client = new Discord.Client();  

exports.run = (client, message, args) => {
 let mesaj = args.slice(0).join(' ');
 let member = message.mentions.members.first();
 let body = 'https://minotar.net/armor/bust/' + mesaj + '/300.png'
 if (mesaj.length < 1) return message.reply('bir oyuncu adı belirtmelisin.').then(msg => msg.delete(2000));
 if (mesaj == member) {
    message.reply('kullanıcı değil, bir oyuncu adı belirtmelisin :/').then(msg => msg.delete(2000));
 } else {
 const mcbody = new Discord.RichEmbed()
   .setColor('#ffa200')
   .setTitle('Oyuncu: ' + mesaj)
   .setImage(body)
   .setFooter('TürkMena | Bu mesaj 15 saniye sonra silinecektir.')
 message.channel.send(mcbody).then(msg => msg.delete(15000));
 }
};


exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['mcskin','mcbody'],
 permLevel: 0,
};
exports.help = {
 name: 'mcskin',
 description: 'Belirtilen oyuncunun kostümünü gösterir.',
 usage: 'mcbody oyuncu'
};