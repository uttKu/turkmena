const Discord = require("discord.js");
const client = new Discord.Client();  

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor('211427')
    .setAuthor("TürkMena Bot", "https://cdn.discordapp.com/icons/730079418067845232/b73d45d3506545083ccc49677cc9bf5e.png?size=128", "http://turkmena.tc/")
    .setDescription('Website aktif olmadığından sıra önceliğini satın almak için geçici süreliğine bu sistem kullanılacaktır.')
    .addField('Nasıl Alırım?', '**İninal** ile öncelikli giriş ön ödemesi için **4091350133537** barkod numaralı **ininal** karta **30 (otuz)** Türk Lirasını yatırmakla beraber açıklama kısmına örnekteki gibi oyun içi isminizi ve discord isminizi yazmanız gerekmektedir:```\nbuzdogan-buzdoğan#6025```')
    .addBlankField()
    .addField('Ödeme Teyidi', 'Ödemenizi teyit etmek için <@185807964265775105>`a ulaşmanız yeterlidir.')
    .setTitle('TürkMena Öncelikli Giriş')
    .setURL('http://www.turkmena.tc/')
    .setFooter('Türkiye`nin en iyi Türk Towny sunucusunu tercih ettiğiniz için teşekkürler!');
    message.channel.sendEmbed(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ödemeduyuru','ödduyuru','önödemeduyuru'],
  permLevel: 3,
};

exports.help = {
  name: 'önödemeduyuru',
  description: '',
  usage: ''
};