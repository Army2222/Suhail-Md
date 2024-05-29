const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348157506828";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_17_05_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjM1LFxuICAgICAgICA4MixcbiAgICAgICAgNDcsXG4gICAgICAgIDk3LFxuICAgICAgICAxOTksXG4gICAgICAgIDU0LFxuICAgICAgICA0NCxcbiAgICAgICAgMTc5LFxuICAgICAgICA2MCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEwNixcbiAgICAgICAgNzcsXG4gICAgICAgIDc3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDExLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEzNixcbiAgICAgICAgODEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDUsXG4gICAgICAgIDIzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjEyLFxuICAgICAgICA0NSxcbiAgICAgICAgMTAyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxODcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNjksXG4gICAgICAgIDY1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxODIsXG4gICAgICAgIDg5LFxuICAgICAgICAxMTksXG4gICAgICAgIDUzLFxuICAgICAgICAxMyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNSxcbiAgICAgICAgMjAsXG4gICAgICAgIDQzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjE5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNyxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDg0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDExLFxuICAgICAgICAxNDAsXG4gICAgICAgIDUzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTgsXG4gICAgICAgIDM0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNjksXG4gICAgICAgIDE4OSxcbiAgICAgICAgNzUsXG4gICAgICAgIDExLFxuICAgICAgICAxODMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTQsXG4gICAgICAgIDI1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjMxLFxuICAgICAgICAxMSxcbiAgICAgICAgMTQyLFxuICAgICAgICA2NSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTIyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTM4LFxuICAgICAgICAzMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAzNCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyOSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDMzLFxuICAgICAgICAyNyxcbiAgICAgICAgMSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxODksXG4gICAgICAgIDc5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDkyLFxuICAgICAgICAxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMzksXG4gICAgICAgIDEzNCxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDk2LFxuICAgICAgICA3OCxcbiAgICAgICAgMjExLFxuICAgICAgICAxMixcbiAgICAgICAgMTEwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNjksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTU0LFxuICAgICAgICA0NyxcbiAgICAgICAgNDYsXG4gICAgICAgIDU3LFxuICAgICAgICAxODksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTU1LFxuICAgICAgICA1NyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDM2LFxuICAgICAgICAxODIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMDVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDgzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjcsXG4gICAgICAgIDUyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDI0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE0NixcbiAgICAgICAgODMsXG4gICAgICAgIDg0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTAxLFxuICAgICAgICA0MixcbiAgICAgICAgNDIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNDksXG4gICAgICAgIDIzNixcbiAgICAgICAgMTc1LFxuICAgICAgICA5OCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTMyLFxuICAgICAgICAxNixcbiAgICAgICAgMTc1LFxuICAgICAgICA0MSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTg3LFxuICAgICAgICA0NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMCxcbiAgICAgICAgMTEyLFxuICAgICAgICA0NSxcbiAgICAgICAgODEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTczLFxuICAgICAgICA3NyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDc3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTUwLFxuICAgICAgICA5NSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDk0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkgrT3puTEFzc3ZFY2VnQkpocmtMeHFGYjlrVnpFSXJIWTdHTXo4OG9WYzg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlJaOGljU1ItUWlhcjUwMC1weTFveHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNTAzOTYyZWItNDc2NS00YTNhLThhYzMtMmY4YTE1MTUwODVjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc0LFxuICAgICAgNixcbiAgICAgIDI0MixcbiAgICAgIDE1NixcbiAgICAgIDUzLFxuICAgICAgMjM0LFxuICAgICAgMTA0LFxuICAgICAgMTM5LFxuICAgICAgMjIsXG4gICAgICAyNTIsXG4gICAgICAyMSxcbiAgICAgIDEwMCxcbiAgICAgIDE2NyxcbiAgICAgIDY4LFxuICAgICAgOCxcbiAgICAgIDIzMyxcbiAgICAgIDE0NSxcbiAgICAgIDE1OSxcbiAgICAgIDk2LFxuICAgICAgMTIzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDY5LFxuICAgICAgMjMzLFxuICAgICAgNyxcbiAgICAgIDIzNyxcbiAgICAgIDI4LFxuICAgICAgODAsXG4gICAgICAxMzYsXG4gICAgICAyMTQsXG4gICAgICA3NSxcbiAgICAgIDE5MyxcbiAgICAgIDIxNSxcbiAgICAgIDE0NCxcbiAgICAgIDQ2LFxuICAgICAgMTQ5LFxuICAgICAgMjUxLFxuICAgICAgMTI2LFxuICAgICAgMTY0LFxuICAgICAgMTk5LFxuICAgICAgMTMyLFxuICAgICAgMjM2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjY2WUJSVlNSXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTU3NTA2ODI4OjY4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI4NDA2NTU2MjY2OTIyMDo2OEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJM0VoWTRERU9EeDNMSUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInIwdERsWit1Q2w2NXVobVhrMXNRZmFMUmdrdG1XTVg1VmZFZnJLaEg3Qnc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiaXhUa0llVFBjQlR1V0VXZldjTlQweHI4ek9tbDY4bjJVUjBqMjR1L3dENHNBOEdVYnNwQ1hkb2d5WXlrdzlSN045R01IODdScjlES2cvUGtQaVJ0RFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwieVc1UTMzRys4YmJjbUp1dUVDUFkvYUt0VjltUFJDbm9hamhuaGR2M09RWlFOdCs2dzVYYUliMVdWSHFsV012QUpRVWtCelBqTTlYQVJUdGhZbjB0Qnc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE1NzUwNjgyODo2OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE2OTkyMjI4XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="// PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



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
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
