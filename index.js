const Discord = require("discord.js")
require("dotenv").config()

const TOKEN = "OTI4OTU4MjQwNzgyNDQyNTQ4.YdgVxw.SVFOo_2eSCQnhtkgcsGW83wvmEs"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log('Logged in as ${client.user.tag}')
})

client.on("messageCreate", (message) => {
    if (message.content == '!BotHelp') {
        message.reply("Do !Help and then add a number at the end of it for commands.")
    }
})

client.on("messageCreate", (message) => {
    if (message.content == '!WhatAreYou') {
        message.reply("An idiot sandwich")
    }
})

client.on("messageCreate", (message) => {
    if (message.content == '!Peter') {
        message.reply("Wow annoying")
    }
})


client.on("messageCreate", (message) => {
    if (message.content == '!CodeList') {
        message.reply("1:Image Code 2:Sounds/Music Code                                                                                                                                                         !Amogus:What?")
    }
})

client.on("messageCreate", (message) => {
    if (message.content == '!Help1') {
        message.reply("Image Locate Code: !CodeImage")
    }
})

client.on("messageCreate", (message) => {
    if (message.content == '!Help2') {
        message.reply("Sound/Music Locate Code: !PlaySound")
    }
})

client.on("messageCreate", (message) => {
    if (message.content == '!PlaySound') {
        message.reply("Image Locate Code: Paths.sound code bracket and then the file name with that doubleupper thingy")
    }
})

client.on("messageCreate", (message) => {
    if (message.content == '!CodeImage') {
        message.reply("Image Locate Code: Paths.image code bracket and then the file name with that doubleupper thingy")
    }
})

client.on("messageCreate", (message) => {
    if (message.content == '!Amogus') {
        message.reply("fuck you >:(")
    }
})

client.login(process.env.TOKEN)