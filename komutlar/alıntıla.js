const Discord = require('discord.js');
const hastebin = require('hastebin-gen');
exports.run = async (client, message, args, member) => {
  if (!args[0]) return message.channel.send("**Hata:** Lütfen **Bu Kanalda Yazılmış** bir mesajın id'sini girin!")
  if(args[0] < 18) return message.channel.send("**Hata:** Lütfen **Bu Kanalda Yazılmış** bir mesajın id'sini girin!")
  
   let number = ["1","2","3","4","5","6","7","8","9","0"]
    
    if (!number.some(word => message.content.includes(word))) {
           {
                  return message.channel.send("**Hata:** Lütfen **Bu Kanalda Yazılmış** bir mesajın id'sini girin!");
           }}   
  
  message.channel.fetchMessage(args[0]).then(dest => {
   hastebin(dest.content, "text").then(r => {
     var hastLink = r
let embed = new Discord.RichEmbed()
.setAuthor(`Bir Mesaj Alıntılandı!`)
.setDescription(`**Mesaj Sahibi:** ${dest.author.tag}\n**Mesaj İçeriği:** ${dest.content}\n**Mesaj Linki:** [Tıkla](${hastLink})`)
.setColor("RANDOM")
.setFooter(`${message.author.tag} tarafından istendi`, message.author.avatarURL)
message.channel.send(embed)
}
)}).catch(err => {
    
 if (err.name === 'DiscordAPIError' && err.message === 'Unknown Message') {
       message.channel.send("**Hata:** Lütfen **Bu Kanalda Yazılmış** bir mesajın id'sini girin!"); 
   }
})}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['alinti','alıntıla','alintila'],
  permLevel: 0,
};
exports.help = {
  name: 'alıntıla',
  description: 'Bir Mesaj Alıntılar.',
  usage: 'r!alıntıla mesaj id'
};
