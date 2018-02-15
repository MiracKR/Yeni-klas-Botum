const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.channel.send('Birşey Yazmalısınız');
  message.delete();
      const mesajat = new Discord.RichEmbed()
      .setAuthor("Duyuran: " + message.author.username + "#" + message.author.discriminator +" " , message.author.avatarURL)
      .setColor(0x00AE86)
      .setDescription('' + mesaj + '')

      client.users.forEach(u => {
u.sendEmbed(mesajat)
})
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['duyur'],
  permLevel: 4
};

exports.help = {
  name: 'duyuru',
  description: 'İstediğiniz şeyi bota duyurtur.',
  usage: 'duyuru [duyurmak istediğiniz şey]'
};
