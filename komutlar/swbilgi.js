const Discord = require(`discord.js`);
const client = new Discord.Client();  

exports.run = (client, message, args) => {
 let member = message.mentions.members.first();
 let body = 'https://cache.gametracker.com/server_info/91.134.209.194:25565/b_560_95_1.png'
 const mcbody = new Discord.RichEmbed()
   .setColor('#ffa200')
   .setTitle('Sunucu:')
   .setImage(body)
   .setFooter('TürkMena | Bu mesaj 15 saniye sonra silinecektir.')
 message.channel.send(mcbody).then(msg => msg.delete(15000));
 }


exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['swbilgileri','swbilgi'],
 permLevel: 0,
};
exports.help = {
 name: 'swbilgi',
 description: 'Belirtilen',
 usage: 'swbilgi'
};