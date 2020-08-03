const Discord = require("discord.js");
const client = new Discord.Client();  

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor('211427')
    .setAuthor("TürkMena Bot", "https://cdn.discordapp.com/icons/730079418067845232/b73d45d3506545083ccc49677cc9bf5e.png?size=128", "http://turkmena.tc/")
    .setDescription('TürkMena Towny modunda kurulmuş bir sunucudur. Şu anda test aşamasındadır. Aşağıdaki ip adresi ile test sunucumuza bağlanabilirsiniz. ```\noyna.turkmena.tc```')
    .setTitle('TürkMena Sunucu Bilgileri')
    .addField('Towny Nedir?', '<#732009390588035117>')
    .addField('Destek için iletişime geçmeliyim!', '<#734437532959375380>')
    .addField('Sunucu Kurucusu', 'buzdogan', true)
    .addField('Destek Ekibi', 'portakal, utku', true)
    message.reply('özel mesaj yoluyla sunucu bilgileri gönderildi!').then(msg => msg.delete(8000));
    message.author.sendEmbed(embed);

};




exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sunucu', 'sunucubilgi', 'turkmena', 'sunucubilgileri', 'sbilgi', 'ip'],
  permLevel: 0,
};

exports.help = {
  name: 'sunucu',
  description: '',
  usage: ''
};