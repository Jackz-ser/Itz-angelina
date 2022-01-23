const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const config = require('../config');
const fs = require("fs")
const Language = require('../language');
const Lang = Language.getString('gitlink');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.GL}, (async (message, match) => {

    var respoimage = await axios.get(config.LIZA, { responseType: 'arraybuffer' })


    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {quoted: message.data , thumbnail: fs.readFileSync('20210811_082543.jpg'), mimetype: Mimetype.png, caption: `*≈≈≈≈≈≈≈ANGELINA≈≈≈≈≈≈≈≈*
 
*owner number wa.me/918075641889?text=Hai%20Jackz%20Ser*
   
*owner number wa.me/917994765065?text=Hai%20Broken%20Ser*


*whatsapp group : https://chat.whatsapp.com/DqtTdFz3yTvDNi1QihM0EP*


*githublink   :  _github.com/Jackz-ser/Itz-angelina_*


*audio commands  : _Audios comming soon_*

*Bot Make Video ytube - Video coming soon*

*sticker commands : _Sticker coming soon_*     
`}) 

})); 
