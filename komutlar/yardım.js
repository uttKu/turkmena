const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

let botid = ('544496325744525322') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setAuthor(`${client.user.username} `, client.user.avatarURL)
        .setColor('RANDOM')
        .setTitle(`${client.user.username} - Komutlar`)
        .setDescription(`:white_small_square: | **${ayarlar.prefix}yetkili** Moderasyon Komutları.\n :white_small_square: | **${ayarlar.prefix}kullanıcı** Kullanıcı Komutları.\n :white_small_square: | **${ayarlar.prefix}minecraft** Minecraft Komutları.\n :white_small_square: | **${ayarlar.prefix}eglence** Eğlence Komutları.\n :white_small_square: | **${ayarlar.prefix}towny** Towny Rehberi.`)
        .setThumbnail(client.user.avatarURL)
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.avatarURL)
    return message.channel.sendEmbed(embed).then(msg => msg.delete(10000));
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['help'],
  permLevel: 0,
};

exports.help = {
  name: 'yardım',
  description: '',
  usage: ''
};