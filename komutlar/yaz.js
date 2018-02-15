const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.reply('Yazmam için herhangi bir şey yazmalısın.');
  message.delete();
  const mesaj1 = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('Yazdıran:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Mesaj:', mesaj);
  message.channel.sendEmbed(mesaj1);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['say', 'söyle'],
  permLevel: 0
};

exports.help = {
  name: 'yaz',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: 'yaz [yazdırmak istediğiniz şey]'
};
