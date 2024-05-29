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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348140184683";




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


global.SESSION_ID = process.env.SESSION_ID || "SUHAIL_18_36_05_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgOSxcbiAgICAgICAgNDMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgODMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE1NixcbiAgICAgICAgOTcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDQsXG4gICAgICAgIDkxLFxuICAgICAgICA3OCxcbiAgICAgICAgMSxcbiAgICAgICAgMzksXG4gICAgICAgIDQ5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjUsXG4gICAgICAgIDExLFxuICAgICAgICA2MixcbiAgICAgICAgMTE5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDg3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEyLFxuICAgICAgICAxNTksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMyxcbiAgICAgICAgNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDU2LFxuICAgICAgICAzOCxcbiAgICAgICAgMjUzLFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDM0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTksXG4gICAgICAgIDExMyxcbiAgICAgICAgNzcsXG4gICAgICAgIDU5LFxuICAgICAgICAyMCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTEyLFxuICAgICAgICA4NSxcbiAgICAgICAgMjI3LFxuICAgICAgICAzMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDI1LFxuICAgICAgICA5MCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNDksXG4gICAgICAgIDIyMixcbiAgICAgICAgMTgwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxOTksXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzLFxuICAgICAgICA5OSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDcwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDExMyxcbiAgICAgICAgNzgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDc0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNzEsXG4gICAgICAgIDc3LFxuICAgICAgICAxMDksXG4gICAgICAgIDE4OCxcbiAgICAgICAgNixcbiAgICAgICAgNTQsXG4gICAgICAgIDU4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDkyLFxuICAgICAgICA0OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDk5LFxuICAgICAgICA0NyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTU4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxODQsXG4gICAgICAgIDgyLFxuICAgICAgICAzNSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDQzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDM1LFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDg3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDU2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTMsXG4gICAgICAgIDY2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDY2LFxuICAgICAgICAxOCxcbiAgICAgICAgMTMwLFxuICAgICAgICA4MyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMTFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMzNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjIyLFxuICAgICAgICA0NSxcbiAgICAgICAgODIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTYwLFxuICAgICAgICA0NCxcbiAgICAgICAgODUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjQyLFxuICAgICAgICA0NyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDgzLFxuICAgICAgICAxMzksXG4gICAgICAgIDg1LFxuICAgICAgICAxOCxcbiAgICAgICAgMjIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE5LFxuICAgICAgICA0NyxcbiAgICAgICAgODksXG4gICAgICAgIDQ5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDMwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxOSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIwLFxuICAgICAgICA1OCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDg2LFxuICAgICAgICA0MSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDQ3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTY0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEyOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTcwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjlheHpJTWVsWmNPMERyK2w1UFB3eUtKcVZuWXcrTHNCZGxsK2dzWXg3VEk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkM0Q01QdHI2UzF5TGdzLWwyX2ZDS0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiZTBiYzdkZjAtMmEyNS00ZDQwLTkxNWItY2MxNGYxM2I5ZGQxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0MCxcbiAgICAgIDE4NSxcbiAgICAgIDIzMSxcbiAgICAgIDE0NyxcbiAgICAgIDE1OSxcbiAgICAgIDIyMyxcbiAgICAgIDIyOSxcbiAgICAgIDEwNyxcbiAgICAgIDE5NSxcbiAgICAgIDE2LFxuICAgICAgNTYsXG4gICAgICAxNSxcbiAgICAgIDE1NyxcbiAgICAgIDI1LFxuICAgICAgNDEsXG4gICAgICAyMzEsXG4gICAgICAyNTUsXG4gICAgICAxOTksXG4gICAgICAzNCxcbiAgICAgIDExN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODcsXG4gICAgICAxNzYsXG4gICAgICAxOTksXG4gICAgICAxNjUsXG4gICAgICA3NCxcbiAgICAgIDE5OSxcbiAgICAgIDE1MCxcbiAgICAgIDE1OCxcbiAgICAgIDIxNyxcbiAgICAgIDMzLFxuICAgICAgMTgyLFxuICAgICAgMzYsXG4gICAgICA1NixcbiAgICAgIDI1MCxcbiAgICAgIDEwNSxcbiAgICAgIDc4LFxuICAgICAgMTY3LFxuICAgICAgMTY4LFxuICAgICAgMTY5LFxuICAgICAgMjRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRjY4TjI3UFJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxNDAxODQ2ODM6MTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjY5MTcwOTM0ODQ1NjEwOjExQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0krajdaUUJFSVhyM2JJR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiVjUxeU5IeEpjbUJLYWdZZldYY1l3VUNOTmxEcWtJdUVMRW42cUM5TUxHVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJHTG1vbmFockdKZWZVVzgrMnNCUmZkS01GSW4rRTRyVzVCR25yZllMclAzTEJ6OS95Q2JHa3R6bWdmT0dWcURoYWFLZVNCbXdlNkV6WWdoNEFLaEhCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJsYlA0bURjd0o1Y2lpRnBtZzFMKzRKbGdVTW53UHFDUzhxN1c0cmluemhYbTM3ZVNFNWVjdUwwYjYySjB2cVAxelQwV3lEZWlNWHR0S1VXcUc0VFlndz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTQwMTg0NjgzOjExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDEwMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE3MDA3NzUzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSDE1XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIMTUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJMNk9VRzgwMVFuTlBka0tqWVFIL2UrRy9FSVFRUCtKRTlBZWQxeW9adGFBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjMxMjE2ODg0NSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE1MzQxNjI1NTQ3XCJ9Igp9"// PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "ESCOBAR DC GAY",
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
