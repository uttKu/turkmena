const Discord = require("discord.js");
const client = new Discord.Client();  

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor('211427')
    .setAuthor("TürkMena Bot", "https://cdn.discordapp.com/icons/730079418067845232/b73d45d3506545083ccc49677cc9bf5e.png?size=128", "http://turkmena.tc/")
    .setDescription('Towny karmaşık bir eklenti gibi görünsede aslında gayet basittir. Aşağıda sizler için Towny hakkındaki bilmeniz gerekenleri toparladık.')
    .setTitle('TürkMena Towny Yardım')
    .addField('Towny Nedir?', 'Towny`nin amacı köy kurmaktır, oyuncular toplanıp köy kurar, muhtar seçer ve savaşırlar. Ortaçağda geçer, köy muhtarı günlük olarak köy sakinlerinden belirli bir ücret alır ve onlara yaşam alanı sağlar. Köyler, uluslar arası siyaset önemlidir, anlaşmalar yapılır. Survival ile arasındaki fark budur, daha eğlencelidir ve bir amacı vardır.')
    .addBlankField()
    .addField('Para Birimi', 'Sunucumuzun para birimi oyundaki altın madenidir. Daha doğrusu altın parçacığıdır. Bir altın külçesi 9, bir altın bloğu 81, bir stack külçe 576 parçacık eder.', true)
    .addBlankField()
    .addField('Nasıl Kasaba Kurarım?', 'Kasaba kurmanız için 500 altın parçacığına sahip olmanız gerekmektedir. Belirtilen 500 altın parçacığını elde ettikten sonra /t new (kasaba ismi) ile kasaba oluşturabilir, siyasete adım atabilirsiniz.', true)
    .addField('Kasaba Bloğu, evBloğu nedir?', 'Kasaba bloğu bir chunk eder. Yani 1 kasaba bloğu 1 chunk ile eşdeğerdir. Kasabanızı ilk kurduğunuzda bulunduğunuz chunk claimlenir ve başlangıçta 1 kasaba bloğuna(chunk) sahip olursunuz. evBloğu ise kasabanızın ana kasaba bloğudur. Genelde kasabanızını ilk kurduğunuz yer evBloğu olur. evBloğu o bölgenin spawn bölgesi olduğu anlamına gelir, evBloğu sonradan değiştirilebilir.', true)
    .addBlankField()
    .addField('Nasıl claimlerim?', 'Bölge claimlemek için /t claim yazmanız yeterlidir. Daha sonra bulunduğunuz bölge(1 chunk) claimlenir.')
    .setFooter('Towny hakkında daha detaylı bilgi için oyun içinde /t help komutunu kullanabilirsiniz.');
    message.reply('özel mesaj yoluyla towny rehberi gönderildi!').then(msg => msg.delete(8000));
    message.author.sendEmbed(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['townybilgi','tbilgi','townbilgi','townyyardim','townyardim','townyardim','townynedir'],
  permLevel: 0,
};

exports.help = {
  name: 'towny',
  description: '',
  usage: ''
};