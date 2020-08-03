const Discord = require("discord.js");
const client = new Discord.Client();  

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor('211427')
    .setAuthor("TürkMena Bot", "https://cdn.discordapp.com/icons/730079418067845232/b73d45d3506545083ccc49677cc9bf5e.png?size=128", "http://turkmena.tc/")
    .setDescription('Bu kanal **oyun içi - discord** destek taleplerinizi Destek Ekibimize bildirmeniz için açılmıştır. Destek talebi oluşturmak için tek yapmanız gereken bu kanala talebiniz hakkında detaylı bilgileri yazmak ve göndermektir. Sonrasında sadece sizin ve Destek Ekibinin görebileceği bir oda oluşturulur, bu odadan detaylı şekilde talebiniz hakkında konuşabilirsiniz.')
    .addField('Destek Sistemi Kuralları', '1)  Taleplerinizi belirtirken küfür,argo kullanımı yasaktır.\n2) Destek sistemini suistimal etmek, gereksiz yere kullanmak yasaktır.\n3) Talebiniz hakkında yetkilileri özelden gereksiz yere rahatsız etmek yasaktır.')
    .addBlankField()
    .addField('Şikayetlerinizden Cevap Almak', 'Destek Talepleriniz en kısa sürede yetkililerimize ulaştırılır ve **sadece sizin ve destek ekibini görebileceği** özel oluşturulan odadan cevap alırsınız.')
    .setTitle('TürkMena Destek Sistemi')
    .setFooter('Destek sistemimizi kullandığınız için teşekkürler!');
    message.channel.sendEmbed(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['destekduyuru','dkduyuru','dd'],
  permLevel: 3,
};

exports.help = {
  name: 'destekduyuru',
  description: '',
  usage: ''
};