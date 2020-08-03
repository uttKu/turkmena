const express = require('express');
const app = express();
const http = require('http');
    app.get("/", (request, response) => {
    console.log(` az önce pinglenmedi. Sonra ponglanmadı... ya da başka bir şeyler olmadı.`);
    response.sendStatus(200);
    });
    app.listen(process.env.PORT);
    setInterval(() => {
    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
    }, 280000);
// GEREKLİ YERLER
// -------------------------------------------------------------
const Discord = require('discord.js')
const { Client, Util } = require('discord.js')
const PREFIX = ">"
const YouTube = require('simple-youtube-api')
const ytdl = require('ytdl-core')
const ayarlar = require('./ayarlar.json');

const client = new Client({ disableEveryone: true })

const youtube = new YouTube('AIzaSyDKa4ov2ObLVxtf4V-m-ojkAkjuQAqUU-Q')

const queue = new Map()
const gh = require('gitinfo')
const EncryptorDecryptor = require('encrypt_decrypt');
let tempObj = new EncryptorDecryptor();



client.on('warn', console.warn)

client.on('error', console.error)



client.on('disconnect', () => console.log('Sadece haber emin olarak kesilir, şimdi yeniden bağlanır ...'))

client.on('reconnecting', () => console.log('Şimdi yeniden bağlanmaya çalışıyorum.'))

client.on('message', async msg => { // eslint-disable-line
if (msg.author.bot) return undefined
if (!msg.content.startsWith(PREFIX)) return undefined

  
const args = msg.content.split(' ')
let eColor = msg.guild.me.displayHexColor!=='#000000' ? msg.guild.me.displayHexColor : 0xffffff
const searchString = args.slice(1).join(' ')
const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : ''
const serverQueue = queue.get(msg.guild.id)

let command = msg.content.toLowerCase().split(' ')[0]
command = command.slice(PREFIX.length)

if(command == 'encrypt'){


if(!args[1]) return msg.channel.send('Please provide something to decrypt.');  
let encryptVal = tempObj.encrypt(args.slice(1).join(" "));
let embed = new Discord.RichEmbed()
.setTitle("Encryption")
.addField("Arguement", args.slice(1).join(" "))
.addField("Encrypted Arguement", encryptVal)
msg.channel.send(embed)

}else if(command == 'decrypt'){
if(!args[1]) return msg.channel.send('Please provide something to decrypt.');  
let encryptVal = tempObj.decrypt(args.slice(1).join(" "));
let embed = new Discord.RichEmbed()
.setTitle("Decryption")
.addField("Encrypted Arguement", args.slice(1).join(" "))
.addField("Arguement", encryptVal)
msg.channel.send(embed)
}
  
});