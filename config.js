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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_44_05_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDQ4LFxuICAgICAgICA4MSxcbiAgICAgICAgNjgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDQyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDExNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDk0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDk5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDkzLFxuICAgICAgICAxOSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxODMsXG4gICAgICAgIDE5LFxuICAgICAgICA0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTk1LFxuICAgICAgICA3OCxcbiAgICAgICAgMjksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTU4LFxuICAgICAgICA2OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDQwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDI1MixcbiAgICAgICAgNzYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNjksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDMyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDkyLFxuICAgICAgICAzMSxcbiAgICAgICAgNjUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjIyLFxuICAgICAgICA5NSxcbiAgICAgICAgNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjQxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDExNixcbiAgICAgICAgMjQsXG4gICAgICAgIDc3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNzcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNTksXG4gICAgICAgIDExMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjcsXG4gICAgICAgIDExNixcbiAgICAgICAgMTQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDg2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDkwLFxuICAgICAgICAxOTksXG4gICAgICAgIDQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMixcbiAgICAgICAgMTEwLFxuICAgICAgICA4OSxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEyLFxuICAgICAgICAyNixcbiAgICAgICAgNjQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE0MixcbiAgICAgICAgODQsXG4gICAgICAgIDk2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDcwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDg4LFxuICAgICAgICA0MixcbiAgICAgICAgMjMzLFxuICAgICAgICA3NyxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMwLFxuICAgICAgICAyOSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDY4LFxuICAgICAgICAzMCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTA5LFxuICAgICAgICA4NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDEwLFxuICAgICAgICA0OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTAzLFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgOTBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3OSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxODgsXG4gICAgICAgIDcwLFxuICAgICAgICAxMyxcbiAgICAgICAgNDksXG4gICAgICAgIDkyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDc0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMzcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMixcbiAgICAgICAgMjMyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDg4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIyMixcbiAgICAgICAgOTMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzNixcbiAgICAgICAgNTcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOCxcbiAgICAgICAgMTEzLFxuICAgICAgICA2OCxcbiAgICAgICAgMTY4LFxuICAgICAgICA1MSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDI0NixcbiAgICAgICAgNjAsXG4gICAgICAgIDEwLFxuICAgICAgICAyMTksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTM1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNzQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiYm5OdENmcjVmMVpaTUlBN1lnZS9KTk9ZbGN5aW9MbmZXN29OUXNYZHVJaz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwieG1DSnlxSEFTYW1HTGZfYWhoLUllUVwiLFxuICBcInBob25lSWRcIjogXCIyMmRiN2JjYy04NWQyLTRmNjYtYmQwZC1iNjViOTJmNmU5NGRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODIsXG4gICAgICAyNTQsXG4gICAgICAyNDgsXG4gICAgICAxNTcsXG4gICAgICA2NCxcbiAgICAgIDI0NSxcbiAgICAgIDEwNCxcbiAgICAgIDExNixcbiAgICAgIDIxNyxcbiAgICAgIDY4LFxuICAgICAgMCxcbiAgICAgIDE1NCxcbiAgICAgIDI0MyxcbiAgICAgIDIzMSxcbiAgICAgIDEwMixcbiAgICAgIDE4NyxcbiAgICAgIDE4NCxcbiAgICAgIDU1LFxuICAgICAgMjI2LFxuICAgICAgMTg0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDgsXG4gICAgICAxMjMsXG4gICAgICA0MCxcbiAgICAgIDIwNCxcbiAgICAgIDEyMyxcbiAgICAgIDIyOSxcbiAgICAgIDIxNCxcbiAgICAgIDExOCxcbiAgICAgIDEzMixcbiAgICAgIDgzLFxuICAgICAgNjYsXG4gICAgICAxNDMsXG4gICAgICA5MixcbiAgICAgIDIwNixcbiAgICAgIDg2LFxuICAgICAgMTU3LFxuICAgICAgNzYsXG4gICAgICAxNTMsXG4gICAgICAyNSxcbiAgICAgIDE5NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0l6RWhZNERFS0RpM0xJR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwicjB0RGxaK3VDbDY1dWhtWGsxc1FmYUxSZ2t0bVdNWDVWZkVmcktoSDdCdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIvTStWbmhaSnJjQWI1Y1J2VHdJclhJQ3M4SFFvNXo2VzdvT1dFUEtmT0lBa0R0cTJOL2N5bmR4QUUrbjVSQTJRSTNlRjVQbS9EbWJad2lvWUJQOXlBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJWYWEvV3k4OVA0SURodzhzaXhMSDZtN2E5dmt0N000UmgxQWw5VHNQbUJERFJjWnhlTDhPUU1sYWVZYzE0dW9kUitETHlSTXVyYUpuS0Vvbm1lVHBoUT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxNTc1MDY4Mjg6NjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjg0MDY1NTYyNjY5MjIwOjY3QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE1NzUwNjgyODo2N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE2OTkwMjQ1XG59Igp9"  // PUT your SESSION_ID 


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
