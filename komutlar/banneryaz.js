const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  let txt = args.join('+');
  if(!args[0]) return message.channel.send("Lütfen yazı yazın!");
  
  let embed = new Discord.RichEmbed()
  .setColor("GREEN")
  .setAuthor("TürkMena | Banner Sistemi")
  .setImage("https://dummyimage.com/2000x500/33363c/ffffff&text=" + txt)
  .setFooter("TürkMena | Banner Oluşturuldu!");
  
  message.channel.send(embed).then(msg => msg.delete(15000));
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["banneryazı","yazıbanner","banneryaz"],
  permLevel: 2
};

module.exports.help = {
  name: 'yazı-banner',
  description: 'Yazdığınız yazıyı banner olarak atar',
  usage: 'yazıb <yazdırmak istediğiniz yazı>'
};