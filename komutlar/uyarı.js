const Discord = require('discord.js');
exports.run = (client, message, args) => {
      
   if (!message.guild) {
  return message.reply(':no_entry_sign: Bu komut, özel mesajlarda kullanılamamakta!'); } 
 if (!message.member.hasPermission("KICK_MEMBERS")) {
    return message.reply(':fire: Yeterli yetki, bulunmamakta!');
  }
  let guild = message.guild;
  let user = message.mentions.users.first();
  let reason = args.slice(1).join(' ');
  if (reason.length < 1) return message.reply('Uyarı sebebini belirtmelisiniz!');
  if (message.mentions.users.size < 1) return message.reply('Kimi uyarmam gerekiyor?').catch(console.error);
  message.delete();
  message.reply('kişi başarılı bir şekilde uyarıldı!')
  const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setTitle(`**Yanlış giden, birşeyler var!**`)
  .setTimestamp()
  .setDescription('Sergilemiş olduğunuz hatalı & yanlış davranışlar nedeni ile uyarıldınız!')
  .addField('Belirtilen Sebep;', reason)
    .setFooter('TürkMena Bot, iyi eğlenceler diler!', client.user.avatarURL)
  return user.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['uy','u'],
  permlevel: 3
};

exports.help = {
  name: 'uyarı',
  description: 'Belirtilen kullanıcıyı uyarır!',
  usage: 'uyarı'
};