const Discord = require("discord.js");
const client = new Discord.Client();  

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor('211427')
    .setAuthor("TürkMena Bot", "https://cdn.discordapp.com/icons/730079418067845232/b73d45d3506545083ccc49677cc9bf5e.png?size=128", "http://turkmena.tc/")
    .setDescription('Bu kanal **oyun içi - discord kural ihlallerini** Destek ekibimize bildirmeniz için açılmıştır. **Şikayetinizi göndermek için aşağıda belirtilen şablonu kendinize uygun doldurup, kopyaladıktan sonra direkt olarak bu kanala yapıştırmanız yeterlidir.**```\n%şikayet <isim> kişisinden şikayetçiyim.\nSebep: <sebep>\nAçıklama: <açıklamanız>\nKanıt Link(Varsa): <youtube-hizliresim link>\nEklemek İstedikleriniz: <ek>```')
    .addField('Şikayet Sistemi Kuralları', '1)  Şablona uygun olmayan şikayetleriniz dikkate alınmaz.\n2) Şikayetlerinizi belirtirken küfür,argo kullanımı yasaktır.\n3) Şikayet sistemini suistimal etmek, gereksiz yere kullanmak yasaktır.\n4) Şikayetiniz hakkında yetkilileri özelden gereksiz yere rahatsız etmek yasaktır.')
    .addBlankField()
    .addField('Şikayetlerinizden Cevap Almak', 'Şikayetleriniz en kısa sürede yetkililerimize ulaştırılır ve **özel mesaj yoluyla cevap** alırsınız.')
    .setTitle('TürkMena Şikayet Sistemi')
    .setFooter('Şikayet sistemimizi kullandığınız için teşekkürler!');
    message.channel.sendEmbed(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sikayetduyuru','skduyuru','skd'],
  permLevel: 3,
};

exports.help = {
  name: 'sikayetduyuru',
  description: '',
  usage: ''
};