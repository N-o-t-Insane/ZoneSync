const keep_alive = require('./keep_alive.js')

const config = require(`./config.json`);

const EST = -4;

let zones = [];

var axios = require('axios');

var zoneConfig = {
  method: 'get',
  url: 'http://api.timezonedb.com/v2.1/list-time-zone?key=3MZVDQ48POOS&format=json',
  headers: { }
};

axios(zoneConfig)
.then(function (response) {
    for( let zone in response.data.zones){
        const zoneName = response.data.zones[zone].zoneName.toLowerCase();
        const countryCode = response.data.zones[zone].countryCode.toLowerCase();
        const countryName = response.data.zones[zone].countryName.toLowerCase();
        const gmtOffset = response.data.zones[zone].gmtOffset /60
        const estOffset = gmtOffset + EST
        const zoneObject = {
            id : zone,
            zoneName: zoneName,
            countryCode: countryCode,
            countryName: countryName,
            gmtOffset: gmtOffset,
            estOffset: estOffset
        }
        zones.push(zoneObject)
    }
    zones.push({
        id: 'est',
        zoneName: 'est',
        countryCode: 'est',
        countryName: 'est',
        gmtOffset: EST *60,
        estOffset: 0
    })
    zones.push({
        id: 'gmt',
        zoneName: 'gmt',
        countryCode: 'gmt',
        countryName: 'gmt',
        gmtOffset: 0 *60,
        estOffset: EST
    })
    zones.push({
        id: 'cst',
        zoneName: 'cst',
        countryCode: 'cst',
        countryName: 'cst',
        gmtOffset: -5 *60,
        estOffset: EST
    })
    zones.push({
        id: 'cdt',
        zoneName: 'cdt',
        countryCode: 'cdt',
        countryName: 'cdt',
        gmtOffset: -4 *60,
        estOffset: EST
    })
  //console.log(zones);
})
.catch(function (error) {
  console.log(error);
});

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
        time_in = args[0].split(`:`);
        time_h = parseInt(time_in[0]);
        time_m = parseInt(time_in[1]);
        
        if (typeof time_m !== 'undefined') {
            time_m = parseInt(time_in[1]);
        } else {
            time_m = 0;
        }
        //console.log(time_h * 60 + time_m);
        time = (time_h * 60) + time_m;

        if (zones.filter(e => e.countryCode === args[1].toLowerCase()).length > 0 && zones.filter(e => e.countryCode === args[2].toLowerCase()).length > 0) {
        
            console.log(zones.filter(e => e.countryCode === args[1].toLowerCase())[0].gmtOffset)
            console.log(zones.filter(e => e.countryCode === args[2].toLowerCase())[0].gmtOffset)
            console.log("time before: " + time)
            time -= zones.filter(e => e.countryCode === args[1].toLowerCase())[0].gmtOffset ;
            time += zones.filter(e => e.countryCode === args[2].toLowerCase())[0].gmtOffset ;
            if(time < 0){
                time = 1440 + time;
            }
            console.log("time after: " + time)


            time_out = `${Math.floor(time / 60 %24)}:`; if(time%60==0){ time_out += `00 \n` } else {time_out += `${time % 60} \n`};
            message.reply(`${args[2].toUpperCase()} ${time_out}`);
        }else {
            message.reply(`time zone does not exist`);
        }

    }

})

client.login(token)
