const Discord = require('discord.js');

Discord.Constants.DefaultOptions.ws.properties.$browser = "Discord Android"

const grew = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] });

const config = require('./config.json')

grew.on("message", message => {
    if (message.author.bot) return;

    if (message.channel.id === config.twitter) {
        if (!message.attachments.first()) {
            let embed = new Discord.MessageEmbed()
                .setDescription("**" + message.content + "**")
                .setFooter("Twitter", "https://i.imgur.com/BvtmaH8.png")
                .setTimestamp()
                .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }), `https://discord.com/users/${message.author.id}`)
                .setColor('#0496f1')
            message.channel.send(embed)
            message.delete()
        }
        else if (!message.content) {
            let embed2 = new Discord.MessageEmbed()
                .setFooter("Twitter", "https://i.imgur.com/BvtmaH8.png")
                .setTimestamp()
                .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }), `https://discord.com/users/${message.author.id}`)
                .setColor('#0496f1')
                .setImage(message.attachments.first().proxyURL)
            message.channel.send(embed2)
            message.delete()
        }
        else if (message.content, message.attachments.first()) {
            let embed3 = new Discord.MessageEmbed()
                .setFooter("Twitter", "https://i.imgur.com/BvtmaH8.png")
                .setTimestamp()
                .setDescription("**" + message.content + "**")
                .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }), `https://discord.com/users/${message.author.id}`)
                .setColor('#0496f1')
                .setImage(message.attachments.first().proxyURL)
            message.channel.send(embed3)
            message.delete()
        }
    }
    if (message.channel.id === config.instagram) {
        if (!message.attachments.first()) {
            let embed = new Discord.MessageEmbed()
                .setDescription("**" + message.content + "**")
                .setFooter("Instagram", "https://i.imgur.com/W8hUGFt.png")
                .setTimestamp()
                .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }), `https://discord.com/users/${message.author.id}`)
                .setColor("#ff0f7b")
            message.channel.send(embed)
            message.delete()
        }
        else if (!message.content) {
            let embed2 = new Discord.MessageEmbed()
                .setFooter("Instagram", "https://i.imgur.com/W8hUGFt.png")
                .setTimestamp()
                .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }), `https://discord.com/users/${message.author.id}`)
                .setColor("#ff0f7b")
                .setImage(message.attachments.first().proxyURL)
            message.channel.send(embed2)
            message.delete()
        }
        else if (message.content, message.attachments.first()) {
            let embed3 = new Discord.MessageEmbed()
                .setFooter("Instagram", "https://i.imgur.com/W8hUGFt.png")
                .setTimestamp()
                .setDescription("**" + message.content + "**")
                .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }), `https://discord.com/users/${message.author.id}`)
                .setColor("#ff0f7b")
                .setImage(message.attachments.first().proxyURL)
            message.channel.send(embed3)
            message.delete()
        }
    } if (message.channel.id === config.yellowpages) {
        if (!message.attachments.first()) {
            let embed = new Discord.MessageEmbed()
                .setDescription("**" + message.content + "**")
                .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }), `https://discord.com/users/${message.author.id}`)
                .setTimestamp()
                .setColor("#d4af6a")
            message.channel.send(embed)
            message.delete()
        }
        else if (!message.content) {
            let embed2 = new Discord.MessageEmbed()
                .setFooter(`Posted by ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
                .setTimestamp()
                .setAuthor("Yellow Pages", "https://i.imgur.com/BRw5QJ9.png")
                .setColor("#d4af6a")
                .setImage(message.attachments.first().proxyURL)
            message.channel.send(embed2)
            message.delete()
        }
        else if (message.content, message.attachments.first()) {
            let embed3 = new Discord.MessageEmbed()
                .setDescription("**" + message.content + "**")
                .setFooter(`Posted by ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
                .setTimestamp()
                .setAuthor("Yellow Pages", "https://i.imgur.com/BRw5QJ9.png")
                .setColor("#d4af6a")
                .setImage(message.attachments.first().proxyURL)
            message.channel.send(embed3)
            message.delete()
        }
    } if (message.channel.id === config.darkchat) {
        message.channel.send(message.content, message.attachments.first())
        message.delete({ timeout: 1 })
    } if (message.channel.id === config.darkchat) {
        let channel = message.guild.channels.cache.get(config.darkchatlogs)
        if (message.channel.id === config.darkchat) {
            let channel = message.guild.channels.cache.get(config.darkchatlogs)
            if (!message.attachments.first()) {
                let embed = new Discord.MessageEmbed()
                    .setTitle("`👥Dark Chat Logs`")
                    .addField("`Το μήνυμα έγραψε ο:`", `${message.author}`)
                    .addField("`Το περιεχόμενο ήταν:`", `${message.content}`)
                    .setColor(config.color)
                    .setThumbnail(config.image)
                channel.send(embed)
            }

            if (!message.content) {
                let channel2 = message.guild.channels.cache.get(config.darkchatlogs)
                let embed2 = new Discord.MessageEmbed()
                    .setTitle("`👥Dark Chat Logs`")
                    .addField("`Το μήνυμα έγραψε ο:`", `${message.author}`)
                    .addField('`Φαίνεται πως ο αποστολέας έστειλε μόνο μία εικόνα!`')
                    .setImage(message.attachments.first().proxyURL)
                    .setThumbnail(config.image)
                    .setColor(config.color)
                channel2.send(embed2)
            }
            else if (message.content, message.attachments.first()) {
                let channel3 = message.guild.channels.cache.get(config.darkchatlogs)
                let embed3 = new Discord.MessageEmbed()
                    .setTitle("`👥Dark Chat Logs`")
                    .addField("Έγραψε ο :", `${message.author}`).addField("`Το μήνυμα έγραψε ο:`", `${message.author}`)
                    .addField("Μήνυμα:", `${message.content}`).addField("`Το περιεχόμενο ήταν:`", `${message.content}`)
                    .setImage(message.attachments.first().proxyURL)
                    .setThumbnail(config.image)
                    .setColor(config.color)
                channel3.send(embed3)
            }
        }
    }
})

grew.login(config.token)