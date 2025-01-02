const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="ogemdidavid1@gmail.com"
global.location="Imo, Nigeria"


global.mongodb= process.env.MONGODB_URI || "null"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/Dartondave/Suhail-Md-V5";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://raw.githubusercontent.com/Dartondave/Suhail-Md-V5/main/lib/assets/sukuna.jpeg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "`Hail Amy you sluts`" 


global.devs = "2347025836462" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347040694847";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text"  // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "composing" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,2347040694847";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,2347040694847";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2347040694847,2347040694847";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_16_01_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAyMixcbiAgICAgICAgMTI5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDM3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTIsXG4gICAgICAgIDcwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjIyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDMwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDg1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjQyLFxuICAgICAgICA5NyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDgyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjEzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMSxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDcyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDExMSxcbiAgICAgICAgNjIsXG4gICAgICAgIDcwLFxuICAgICAgICA4MSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNjksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTExLFxuICAgICAgICAzOSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjIxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDg4LFxuICAgICAgICA2MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxOTksXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDExOSxcbiAgICAgICAgNDMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgOCxcbiAgICAgICAgMjIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDExMCxcbiAgICAgICAgODMsXG4gICAgICAgIDc3LFxuICAgICAgICAxODEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTY4LFxuICAgICAgICA4MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDU4LFxuICAgICAgICAxOSxcbiAgICAgICAgODAsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDk4LFxuICAgICAgICAxNCxcbiAgICAgICAgODksXG4gICAgICAgIDQyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNjksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDY4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDkxLFxuICAgICAgICAzNixcbiAgICAgICAgNjAsXG4gICAgICAgIDM5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDcxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICA0NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTIsXG4gICAgICAgIDgwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDI1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxODgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTcyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA2NyxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDQzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDI2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDgsXG4gICAgICAgIDU4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDcwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDkxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDUwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA3NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MCxcbiAgICAgICAgMzAsXG4gICAgICAgIDM0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQyLFxuICAgICAgICA4MyxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNSxcbiAgICAgICAgMTMxLFxuICAgICAgICA2MixcbiAgICAgICAgMTM3LFxuICAgICAgICAxMjksXG4gICAgICAgIDU2LFxuICAgICAgICA5OSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDExNixcbiAgICAgICAgOTIsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDM2LFxuICAgICAgICA2NSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjE2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDcyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDg5LFxuICAgICAgICAxODMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgOTQsXG4gICAgICAgIDk2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDQwLFxuICBcImFkdlNlY3JldEtleVwiOiBcImFtMmJEcXBBVXE5Mm9sVEtyTHpWcEFwREVhcUhzZEtMOG9CVlNMNU5BOHc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjZNaG1lbURkUUZDYzFFMElEOW01RXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiODRkYmJlMzgtZWM4ZC00NTU3LTlhZWItZDQ5YTI1ZGE5MzRmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwMyxcbiAgICAgIDE5NixcbiAgICAgIDE4NyxcbiAgICAgIDQzLFxuICAgICAgMjMzLFxuICAgICAgMjI3LFxuICAgICAgMTk4LFxuICAgICAgMTYxLFxuICAgICAgMjQ3LFxuICAgICAgNTQsXG4gICAgICA4MixcbiAgICAgIDUxLFxuICAgICAgMTgyLFxuICAgICAgMTY5LFxuICAgICAgMTgxLFxuICAgICAgMTMsXG4gICAgICAxNyxcbiAgICAgIDIxMSxcbiAgICAgIDI0NCxcbiAgICAgIDI0OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTMsXG4gICAgICAxNDgsXG4gICAgICAxMjQsXG4gICAgICA2MyxcbiAgICAgIDE1MyxcbiAgICAgIDE4OSxcbiAgICAgIDE2MSxcbiAgICAgIDE0MCxcbiAgICAgIDQyLFxuICAgICAgMzksXG4gICAgICA3NCxcbiAgICAgIDQ1LFxuICAgICAgMjE5LFxuICAgICAgNjMsXG4gICAgICA2NyxcbiAgICAgIDE2MixcbiAgICAgIDIxNyxcbiAgICAgIDc2LFxuICAgICAgMTc2LFxuICAgICAgMjI3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkJaV1o1QkpDXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTM5OTc4NzgwOjQ5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNDI3NzgwNTA4MjIzNDk6NDlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTmVTdzRNRUVOR1cyYnNHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJFQi9adnRyc1F2aUFaL0YxNVdTVXFKNVZQVWgzdUt0RmxQdmkzaHR1NDJvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkRwSTVwRDFvWFZjM3pySFcvQ2xDdHE5ZE4wcm40SmtnWm8yNFNTaTZkN2xhNVlEekZEcVArVi9LSzNsZ0djZ1ltVDNaWDZ3bnAvbnJEZ0t0U2tFZEJnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm9JT2Z3MW5malZjTXhZZ2lZZnh2MkxCa2FGNFBqTGZiWmNsS2pySFN1L1AzOHpTMjBMRDFTQ1VqcndkcE5aTnVZV08yaWdOK3oycEZQaFRtZDR4YkRBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxMzk5Nzg3ODA6NDlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEwNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM1ODA1NzgxXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.9",
  caption : global.caption || "" , // ```『 POWERED BY BLESSED-MD 』```", //*『𝕤ᴜʙ𝕤ᴄʀɪʙᴇ • BLESSED TECH』*\n youtube.com/hailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "٭*AMY𖤐",
  packname: process.env.PACK_NAME || "HAIL AMY SLUTS",
  botname : process.env.BOT_NAME  || "`HAIL AMY SLUTS`",
  ownername:process.env.OWNER_NAME|| "`SEXY AMY`",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "BLESSED"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 5,
  //userImages:process.env.USER_IMAGES|| "https://raw.githubusercontent.com/Dartondave/Suhail-Md-V5/main/lib/assets/sukuna.jpeg?raw=true",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "composing", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
