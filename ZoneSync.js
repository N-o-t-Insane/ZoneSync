const config = require(`./config.json`);

const zones = ['UTC','GMT','CET','EET','MSK','AMT','PKT','OMSK','KRAT','JST','AEST','SAKT','NZST','WAT','AT','ART','AST','EST','CST','MST','PST','AKST','HST','IDLW'];

const UTC = 0 * 60
const GMT = 0 * 60
const CET = 1 * 60
const EET = 2 * 60
const MSK = 3 * 60
const AMT = 4 * 60
const PKT = 5 * 60
const OMSK = 6 * 60
const KRAT = 7 * 60
    //const CST = 8 *60
const JST = 9 * 60
const AEST = 10 * 60
const SAKT = 11 * 60
const NZST = 12 * 60

const WAT = -1 * 60
const AT = -2 * 60
const ART = -3 * 60
const AST = -4 * 60
const EST = -5 * 60
const CST = -6 * 60
const MST = -7 * 60
const PST = -8 * 60
const AKST = -9 * 60
const HST = -10 * 60
const IDLW = -12 * 60

const { MessageEmbed } = require('discord.js');
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const {
    prefix,
    token,
} = require('./config.json');

var time = 0;
var time_user = '0';
var timestamp = '0';

client.on("ready", () => {
    console.log('ready')
    client.user.setActivity("with a time machine")
})

client.on("messageCreate", message => {
    const args = message.content.slice((`t!`).lenght).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    if (command === "t!convert") {
        if( zones.includes(`${args[1].toUpperCase()}`) &&	zones.includes(`${args[2].toUpperCase()}`)){
        
        time_in = args[0].split(`:`);
        time_h = parseInt(time_in[0]);
        
        if (typeof time_m !== 'undefined') {
            time_m = parseInt(time_in[1]);
        } else {
            time_m = 0;
        }
        //console.log(time_h * 60 + time_m);
        time = (time_h * 60) + time_m;

        
        
        
        time -= eval(`${args[1].toUpperCase()}`);
        time += eval(`${args[2].toUpperCase()}`);
        if(time < 0){
            time = 1440 + time;
        }
        //console.log(time)


        time_out = `${Math.floor(time / 60 %24)}:`; if(time%60==0){ time_out += `00 \n` } else {time_out += `${time % 60} \n`};
        message.reply(`${args[2].toUpperCase()} ${time_out}`);
    }else{message.reply(`time zone does not exist`);}
    }

    if (command === "t!all") {
        //message.reply(`Command name:${command}\nArguments:${args}`);
        if( zones.includes(`${args[1].toUpperCase()}`)){
            time_in = args[0].split(`:`);
            time_h = parseInt(time_in[0]);
            
            if (typeof time_m !== 'undefined') {
                time_m = parseInt(time_in[1]);
            } else {
                time_m = 0;
            }
            //console.log(time_h * 60 + time_m);
            time = (time_h * 60) + time_m;

        

        time -= eval(`${args[1].toUpperCase()}`);
        time_clone = time;
        time_out = "";
        
        time_out += `UTC ${Math.floor(time / 60 %24)}:`; if(time%60==0){ time_out += `00 \n` } else {time_out += `${time % 60} \n`}
        
        if(!isNaN(time)){

        time = time_clone; time += eval(`UTC`);if(time < 0){ time = 1440 + time;}; time_out += `UTC ${Math.floor(time / 60 %24)}:`; if(time%60==0){ time_out += `00 \n` } else {time_out += `${time % 60} \n`} //UTC
        time = time_clone; time += eval(`GMT`);if(time < 0){ time = 1440 + time;}; time_out += `GMT ${Math.floor(time / 60 %24)}:`; if(time%60==0){ time_out += `00 \n` } else {time_out += `${time % 60} \n`} //GMT
        time = time_clone; time += eval(`CET`);if(time < 0){ time = 1440 + time;}; time_out += `CET ${Math.floor(time / 60 %24)}:`; if(time%60==0){ time_out += `00 \n` } else {time_out += `${time % 60} \n`} //CET
        time = time_clone; time += eval(`EET`);if(time < 0){ time = 1440 + time;}; time_out += `EET ${Math.floor(time / 60 %24)}:`; if(time%60==0){ time_out += `00 \n` } else {time_out += `${time % 60} \n`} //EET
        time = time_clone; time += eval(`MSK`);if(time < 0){ time = 1440 + time;}; time_out += `MSK ${Math.floor(time / 60 %24)}:`; if(time%60==0){ time_out += `00 \n` } else {time_out += `${time % 60} \n`} //MSK
        time = time_clone; time += eval(`AMT`);if(time < 0){ time = 1440 + time;}; time_out += `AMT ${Math.floor(time / 60 %24)}:`; if(time%60==0){ time_out += `00 \n` } else {time_out += `${time % 60} \n`} //AMT
        time = time_clone; time += eval(`PKT`);if(time < 0){ time = 1440 + time;}; time_out += `PKT ${Math.floor(time / 60 %24)}:`; if(time%60==0){ time_out += `00 \n` } else {time_out += `${time % 60} \n`} //PKT
        time = time_clone; time += eval(`OMSK`);if(time < 0){ time = 1440 + time;}; time_out += `OMSK ${Math.floor(time / 60 %24)}:`; if(time%60==0){ time_out += `00 \n` } else {time_out += `${time % 60} \n`} //OMSK
        time = time_clone; time += eval(`KRAT`);if(time < 0){ time = 1440 + time;}; time_out += `KRAT ${Math.floor(time / 60 %24)}:`; if(time%60==0){ time_out += `00 \n` } else {time_out += `${time % 60} \n`} //KRAT
        time = time_clone; time += eval(`JST`);if(time < 0){ time = 1440 + time;}; time_out += `JST ${Math.floor(time / 60 %24)}:`; if(time%60==0){ time_out += `00 \n` } else {time_out += `${time % 60} \n`} //JST
        time = time_clone; time += eval(`AEST`);if(time < 0){ time = 1440 + time;}; time_out += `AEST ${Math.floor(time / 60 %24)}:`; if(time%60==0){ time_out += `00 \n` } else {time_out += `${time % 60} \n`} //AEST
        time = time_clone; time += eval(`SAKT`);if(time < 0){ time = 1440 + time;}; time_out += `SAKT ${Math.floor(time / 60 %24)}:`; if(time%60==0){ time_out += `00 \n` } else {time_out += `${time % 60} \n`} //SAKT
        time = time_clone; time += eval(`NZST`);if(time < 0){ time = 1440 + time;}; time_out += `NZST ${Math.floor(time / 60 %24)}:`; if(time%60==0){ time_out += `00 \n` } else {time_out += `${time % 60} \n`} //NZST

        time = time_clone; time += eval(`WAT`);if(time < 0){ time = 1440 + time;}; time_out += `WAT ${Math.floor(time / 60 %24)}:`; if(time%60==0){ time_out += `00 \n` } else {time_out += `${time % 60} \n`} //WAT
        time = time_clone; time += eval(`AT`);if(time < 0){ time = 1440 + time;}; time_out += `AT ${Math.floor(time / 60 %24)}:`; if(time%60==0){ time_out += `00 \n` } else {time_out += `${time % 60} \n`} //AT
        time = time_clone; time += eval(`ART`);if(time < 0){ time = 1440 + time;}; time_out += `ART ${Math.floor(time / 60 %24)}:`; if(time%60==0){ time_out += `00 \n` } else {time_out += `${time % 60} \n`} //ART
        time = time_clone; time += eval(`AST`);if(time < 0){ time = 1440 + time;}; time_out += `AST ${Math.floor(time / 60 %24)}:`; if(time%60==0){ time_out += `00 \n` } else {time_out += `${time % 60} \n`} //AST
        time = time_clone; time += eval(`EST`);if(time < 0){ time = 1440 + time;}; time_out += `EST ${Math.floor(time / 60 %24)}:`; if(time%60==0){ time_out += `00 \n` } else {time_out += `${time % 60} \n`} //EST
        time = time_clone; time += eval(`CST`);if(time < 0){ time = 1440 + time;}; time_out += `CST ${Math.floor(time / 60 %24)}:`; if(time%60==0){ time_out += `00 \n` } else {time_out += `${time % 60} \n`} //CST
        time = time_clone; time += eval(`MST`);if(time < 0){ time = 1440 + time;}; time_out += `MST ${Math.floor(time / 60 %24)}:`; if(time%60==0){ time_out += `00 \n` } else {time_out += `${time % 60} \n`} //MST
        time = time_clone; time += eval(`PST`);if(time < 0){ time = 1440 + time;}; time_out += `PST ${Math.floor(time / 60 %24)}:`; if(time%60==0){ time_out += `00 \n` } else {time_out += `${time % 60} \n`} //PST
        time = time_clone; time += eval(`AKST`);if(time < 0){ time = 1440 + time;}; time_out += `AKST ${Math.floor(time / 60 %24)}:`; if(time%60==0){ time_out += `00 \n` } else {time_out += `${time % 60} \n`} //AKST
        time = time_clone; time += eval(`HST`);if(time < 0){ time = 1440 + time;}; time_out += `HST ${Math.floor(time / 60 %24)}:`; if(time%60==0){ time_out += `00 \n` } else {time_out += `${time % 60} \n`} //HST
        time = time_clone; time += eval(`IDLW`);if(time < 0){ time = 1440 + time;}; time_out += `IDLW ${Math.floor(time / 60 %24)}:`; if(time%60==0){ time_out += `00 \n` } else {time_out += `${time % 60} \n`} //IDLW
        message.reply(time_out);
        } else {message.reply(`time invalid`);}
        } else {message.reply(`Time zone does not exist`);}
    }

    if (command === "t!help") {
        //message.reply(`Avalible commands:\nt!help => shows this dialog\nt!zones => shows info about all time zones\nt!convert [time hh:mm] [time zone to convert from] [time zone to convert to] => converts a time zone to another\nt!all [time hh:mm] [time zone to convert from] => converts from one time zone to all time zones\nmade by noTInsane`);
        const exampleEmbed = new MessageEmbed()
            .setColor('#52fc03')
            .setTitle('Avalible commands')
            .setURL('https://greenwichmeantime.com/time-zone/definition/')
            .addFields(
                { name: 't!help', value: 'Shows this dialog'},
                { name: 't!zones', value: 'shows avalible time zones'},
                { name: 't!convert [time hh:mm] [time zone to convert from] [time zone to convert to]', value: 'converts one time zone to another'},
                { name: 't!all [time hh:mm] [time zone to convert from]', value: 'converts one time zone to all avalible time zones'},
            )
            
            //.setImage('https://i.imgur.com/AfFp7pu.png')       
            .setTimestamp()
            .setFooter('Made by noTInsane');
        message.channel.send({ embeds: [exampleEmbed] });
    }
    
    if (command === "t!zones") {
        

const exampleEmbed = new MessageEmbed()
.setColor('#52fc03')
.setTitle('Avalible time zones')
.setURL('https://greenwichmeantime.com/time-zone/definition/')
//.setAuthor('Some name', 'https://i.imgur.com/AfFp7pu.png', 'https://discord.js.org')
//.setDescription('Avalible time zones')
//.setThumbnail('https://i.imgur.com/AfFp7pu.png')
.addFields(
    { name: 'UTC', value: 'Universal Time Coordinated' , inline: true},
    { name: 'GMT', value: 'Greenwich Mean Time' , inline: true},
    { name: 'CET', value: 'Central European Time' , inline: true},
    { name: 'EET', value: 'Eastern European Time' , inline: true},
    { name: 'MSK', value: 'Moscow Time' , inline: true},
    { name: 'AMT', value: 'Armenia Time' , inline: true},
    { name: 'PKT', value: 'Pakistan Standard Time' , inline: true},
    { name: 'OMSK', value: 'Omsk Time' , inline: true},
    { name: 'KRAT', value: 'Kranoyask Time' , inline: true},
    { name: 'JST', value: 'Japan Standard Time' , inline: true},
    { name: 'AEST', value: 'Eastern Australia Standard Time' , inline: true},
    { name: 'SAKT', value: 'Sakhalin Time' , inline: true},
    { name: 'NZST', value: 'New Zealand Standard Time' , inline: true},
    { name: 'WAT', value: 'West Africa Time' , inline: true},
    { name: 'AT', value: 'Azores Time' , inline: true},
    { name: 'ART', value: 'Argentina Time' , inline: true},
    { name: 'AST', value: 'Atlantic Standard Time' , inline: true},
    { name: 'EST', value: 'Eastern Standard Time' , inline: true},
    { name: 'CST', value: 'Central Standard Time' , inline: true},
    { name: 'MST', value: 'Mountain Standard Time' , inline: true},
    { name: 'PST', value: 'Pacific Standard Time' , inline: true},
    { name: 'AKST', value: 'Alaska Standard Time' , inline: true},
    { name: 'HST', value: 'Hawaii Standard Time' , inline: true},
    { name: 'IDLW', value: 'International Date Line West' , inline: true},
)

//.setImage('https://i.imgur.com/AfFp7pu.png')
.setTimestamp()
.setFooter('Made by noTInsane');

message.channel.send({ embeds: [exampleEmbed] });
    }

})

client.login(token)