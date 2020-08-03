const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let user = message.guild.member(message.mentions.members.first() || message.author); 
  let kickable = user.kickable ? "✅" : "❎";
  let bannable = user.bannable ? "✅" : "❎";
  let icon = user.user.displayAvatarURL;

  let nickname = user.nickname;
  if (nickname) {
    nickname = user.nickname;
  } else {
    nickname = 'None'
  };

  let createdAtRaw = user.user.createdAt.toDateString();
  let createdAt = createdAtRaw.split(" ");
  let joinedAtRaw = user.joinedAt.toDateString();
  let joinedAt = joinedAtRaw.split(" ");

  let playingStatus = user.presence.game;
  if (playingStatus) {
    playingStatus = user.presence.game.name;
  } else {
    playingStatus = 'None'
  }

  let embed = new Discord.RichEmbed()
    .setTitle(`Information about ${nickname}`)
    .setColor(0xFF00FF)
    .setThumbnail(icon)
    .addField('Kullanıcı Adı', user.user.tag, true)
    .addField('Kullanıcı', nickname, true)
    .addField('Kullanıcı İd', user.id, true)
    .addField('Durum', user.presence.status, true)
    .addField('Oynuyor Durumu', playingStatus, true)
    .addField('Hesap Oluşturma Tarihi', `${createdAt[0]} ${createdAt[2]} ${createdAt[1]} ${createdAt[3]}`, true)
    .addField('Sunucuya Katılma Tarihi', `${joinedAt[0]} ${joinedAt[2]} ${joinedAt[1]} ${joinedAt[3]}`, true)
    .addField('Banlanabilirlik', bannable, true)
    .addField('Kicklenebilirlik', kickable, true);
  message.channel.send(embed);
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};
exports.help = {
  name: 'kbilgi',
  description: 'Duyurumu mi? Sunucunda güzel şeyler olacak :3',
  usage: 'kbilgi'
};