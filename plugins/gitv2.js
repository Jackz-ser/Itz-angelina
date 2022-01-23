const Ktb = require('../events');
const {MessageType, Mimetype} = require('@adiwajshing/baileys');
const exec = require('child_process').exec;
const os = require("os");
const fs = require('fs');
const Config = require('../config')
Ktb.addCommand({ pattern: 'git ?(.*)', fromMe: false, desc: 'owner number' }, (async (message, match) => {

//coded by saidali
const vcard = 'BEGIN:VCARD\n' // metadata of the contact card
            + 'VERSION:1.0\n' 
            + 'FN:ANGELINA [OWNER]\n' // full name
            + 'ORG:ANGELINA™;\n' // 
            + 'TEL;type=CELL;type=VOICE;waid=918075641889:+91 7994765065\n' // WhatsApp ID + phone number
            + 'TEL;type=CELL;type=VOICE;waid=917994765065:+91 8075641889\n' // 
            + 'END:VCARD'
await message.client.sendMessage(message.jid,{displayname: "ANGELINA [OWNER]", vcard: vcard}, MessageType.contact, { mimetype: Mimetype.contact, quoted: message.data, ptt: true,quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { orderMessage: { itemCount: 99999, status: 200, thumbnail: fs.readFileSync('liza mwol v2.jpg'), surface: 200, message: Config.BOTV2, orderTitle: Config.BOTV2, "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": Config.BOTV2 + '\n', "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1080, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('liza mwol v2.jpg')}}}});
}))
