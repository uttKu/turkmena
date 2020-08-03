const Discord = require ('discord.js');
const { MessageEmbed } = require('discord.js');

exports.run = async (bot, message, args) => {
        let user = message.mentions.users.first() || message.author;

        if(user.presence.game !== null && user.presence.game.type === 2 && user.presence.game.name === 'Spotify' && user.presence.game.assets !== null) {

            let trackIMG = `https://i.scdn.co/image/${user.presence.game.assets.largeImage.slice(8)}`;
            let trackURL = `https://open.spotify.com/track/${user.presence.game.syncID}`;
            let trackName = user.presence.game.details;
            let trackAuthor = user.presence.game.state;
            let trackAlbum = user.presence.game.assets.largeText;

            const embed = new MessageEmbed()
                .setAuthor('Spotify Track Info', 'https://cdn.discordapp.com/emojis/653135129870336031.png?v=1')
                .setColor("GREEN")
                .setThumbnail(trackIMG)
                .addField('Song Name', trackName, true)
                .addField('Album', trackAlbum, true)
                .addField('Author', trackAuthor, false)
                .addField('Listen to Track', `${trackURL}`, false)
                .setFooter(message.member.displayName, message.author.displayAvatarURL())
                .setTimestamp()

            message.channel.send(embed);
        } else {
            message.channel.send('**This user isn\'t listening to Spotify!**');
        }
    }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['spotify','nedinliyor'],
  permLevel: 0
};

exports.help = {
  name: 'spotify',
  description: '',
  usage: 'spotify'
};
