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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_47_05_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjA5LFxuICAgICAgICAxNDksXG4gICAgICAgIDI5LFxuICAgICAgICA4NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjMwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDc2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDI1LFxuICAgICAgICA1MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNixcbiAgICAgICAgMTQ0LFxuICAgICAgICA4MixcbiAgICAgICAgNTIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDcwLFxuICAgICAgICAxODgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDQwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDYxLFxuICAgICAgICA0NSxcbiAgICAgICAgMTAzLFxuICAgICAgICA2LFxuICAgICAgICA1NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDQxLFxuICAgICAgICAxOSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEsXG4gICAgICAgIDY1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDU4LFxuICAgICAgICA5NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDU5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjE3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE4LFxuICAgICAgICA1NCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjksXG4gICAgICAgIDIxLFxuICAgICAgICA4NixcbiAgICAgICAgMjMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDg4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjMzLFxuICAgICAgICA2NixcbiAgICAgICAgOTgsXG4gICAgICAgIDgzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDU4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDM2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTE1LFxuICAgICAgICA2NCxcbiAgICAgICAgMTU4LFxuICAgICAgICA4MCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMDksXG4gICAgICAgIDIzMyxcbiAgICAgICAgOTMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTM4LFxuICAgICAgICA2NCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDI5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDUyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTYsXG4gICAgICAgIDIzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTUzLFxuICAgICAgICA0MSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEzNixcbiAgICAgICAgNTgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTI0LFxuICAgICAgICA4NCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxODUsXG4gICAgICAgIDMwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMSxcbiAgICAgICAgMjM0LFxuICAgICAgICA0MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDEsXG4gICAgICAgIDQ0LFxuICAgICAgICA1NSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxODcsXG4gICAgICAgIDEyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjQyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDQwLFxuICAgICAgICAyMTksXG4gICAgICAgIDE1NyxcbiAgICAgICAgNTEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDYxLFxuICAgICAgICAyOSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTg5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNDcsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMjdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDY2LFxuICAgICAgICA2MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDUyLFxuICAgICAgICA1NixcbiAgICAgICAgMTE3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTk1LFxuICAgICAgICAzMSxcbiAgICAgICAgMTA4LFxuICAgICAgICA1NCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjksXG4gICAgICAgIDExLFxuICAgICAgICAxMDEsXG4gICAgICAgIDI5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTI5LFxuICAgICAgICA5MixcbiAgICAgICAgNjcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTEzLFxuICAgICAgICA3MCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDg0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDgyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDk5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNTcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjA5LFxuICAgICAgICA0MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDI5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDQ2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlJ3ZCtqQ3MwRnRGcFp0RjF4TTRuSDNNbG96cnhpNm9Kb2g5UUlUMkk2dDA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkZFV3Z5WnNUVE9TLXBObHdYbzdDZFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZjJjNWIxM2MtNTYwMy00MTIwLTgxOGEtNzQwOTkxNTk5Yzg0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1NSxcbiAgICAgIDE2MixcbiAgICAgIDEyNSxcbiAgICAgIDEzMixcbiAgICAgIDQ5LFxuICAgICAgMTcsXG4gICAgICAxNjIsXG4gICAgICAyMixcbiAgICAgIDI0MSxcbiAgICAgIDIwMyxcbiAgICAgIDE1MSxcbiAgICAgIDE1MCxcbiAgICAgIDE4NSxcbiAgICAgIDIwNCxcbiAgICAgIDIzMSxcbiAgICAgIDIwMCxcbiAgICAgIDE0OSxcbiAgICAgIDk2LFxuICAgICAgMjUzLFxuICAgICAgNTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4MixcbiAgICAgIDIzMCxcbiAgICAgIDgwLFxuICAgICAgMTksXG4gICAgICA4MCxcbiAgICAgIDY1LFxuICAgICAgMTAxLFxuICAgICAgMjMzLFxuICAgICAgMjEyLFxuICAgICAgNyxcbiAgICAgIDE2NSxcbiAgICAgIDcxLFxuICAgICAgMTQyLFxuICAgICAgNjQsXG4gICAgICAxNyxcbiAgICAgIDIwMCxcbiAgICAgIDI0NyxcbiAgICAgIDIyMixcbiAgICAgIDIsXG4gICAgICAyNTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJbkVoWTRERU5lcjNMSUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInIwdERsWit1Q2w2NXVobVhrMXNRZmFMUmdrdG1XTVg1VmZFZnJLaEg3Qnc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiRGtFV0IzdkM0V0loUTBRY0lxR2Vza2FGeXM3Z2RwNy92QTRtRnRDYzVaRFhiemZkQ2R2bkZEajNRM2hHaVlNTnNtSHR3dVQxMU1kR29kbi9DL1R1QWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUHljTEdFTVYraW9HdTMyQXVqVEJ2R0dtNVZKN1c0L2R2czdPYnZ2QW5pOHpnVTQzV2tkcUk3dEdDMFhjbWlWbXoyTk1tbUgzSm9qc2ZDNFIrUHRHQ2c9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTU3NTA2ODI4OjYzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI4NDA2NTU2MjY2OTIyMDo2M0BsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxNTc1MDY4Mjg6NjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNjk4MzI1OVxufSIKfQ=="  // PUT your SESSION_ID 


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
